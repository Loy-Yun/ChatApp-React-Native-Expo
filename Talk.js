import React, { Compoment } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

class Talk extends Compoment {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.props.talks.map(data => (
                            <View style={styles.todo} key={data.id}>
                                <View style={styles.todoText}>
                                    <TouchableOpacity style={styles.todoCheckbox}
                                                      onPressOut={(event) => {event.stopPropagation(); this.props.checkMes(data.id)}}>
                                        {
                                            data.completed
                                                ? <MaterialCommunityIcons color="#bbb" size={20} name='checkbox-marked-circle-outline' />
                                                : <MaterialCommunityIcons size={20} name='checkbox-blank-circle-outline' />
                                        }
                                    </TouchableOpacity>
                                    <Text style={[data.completed ? styles.todoCompleted : {}]}>{data.text}</Text>
                                </View>
                                <TouchableOpacity onPressOut={(event) => {event.stopPropagation(); this.props.removeMes(data.id)}}>
                                    <Text style={styles.todoDelBtn}>X</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default Talk;