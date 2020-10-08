import React, { Compoment } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

class Send extends Compoment {
    state = {
        newTalk: '',
    }

    sendNewMes = () => {
        console.log(this.state)
        if(this.state.newTalk) {
            this.props.sendMes(this.state.newTalk);
            this.setState({
                newTalk: ''
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputText}
                        placeholder='I have to do...'
                        autoCorrect={ false }
                        value={this.state.newTalk}
                        onChangeText={(newTalk) => this.setState({newTalk})}
                    />
                    <TouchableOpacity onPressOut={this.sendNewMes}>
                        <MaterialCommunityIcons style={styles.addBtn} size={30} name='plus-circle' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default Send;