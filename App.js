import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Send from './Send';
import Talk from './Talk';

export default class App extends React.Component {
  state = {
    talks: []
  }

  componentDidMount = () => {
    AsyncStorage.getItem("talks").then(data => {
      const talks = JSON.parse(data || '[]');
      this.setState({ talks });
    });
  };

  sendMes = (talk) => {
    const newMes = {
      id: Date.now(),
      text: talk,
      completed: false,
    }
    this.setState(prevState => {
      const talks = [
        newMes,
        ...prevState.talks
      ];
      AsyncStorage.setItem("talks", JSON.stringify(talks));
      return { talks }
    });
  }

  checkMes = (id) => {
    this.setState(prevState => {
      const [ talk ] = prevState.talks.filter(e => e.id === id);
      talk.completed = !talk.completed;
      const talks = [
        ...prevState.talks
      ];
      AsyncStorage.setItem("talks", JSON.stringify(talks));
      return ({ talks })
    });
  }

  removeMes = (id) => {
    this.setState(prevState => {
      const index = prevState.talks.findIndex(e => e.id === id);
      prevState.talks.splice(index, 1);
      const talks = [
        ...prevState.talks
      ];
      AsyncStorage.setItem("talks", JSON.stringify(talks));
      return ({ talks })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Talk</Text>
        </View>
        <Talk
            talks={this.state.talks}
            checkMes={this.checkMes}
            removeMes={this.removeMes}
        />
        <Send sendMes={this.sendMes}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
});
