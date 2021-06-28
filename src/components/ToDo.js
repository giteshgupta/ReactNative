import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AddToDo from '../containers/AddToDo'
import List from '../containers/list'
export default function ToDo() {
    return (
        <View style={styles.container}>
            <AddToDo />
            <List />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,

    },
    button: {
        backgroundColor: "violet",
        width: 100,
        height: 50,
        padding: 10,
        margin: 10,
    },
    inputcontainer: {
        flexDirection: "row",
    },
    inputField: {
        width: 200,
        padding: 10,
        borderWidth: 2,
        margin: 10,
    }
});
