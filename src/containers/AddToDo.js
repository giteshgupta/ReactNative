import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import { addToDo } from '../actions/AddToDo';

 function AddToDo(props) {
     const [text, setText]=useState('');
 
  return (
        <View style={styles.container}>
            <Text>ToDO With Redux Practice</Text>
            <View style={styles.inputcontainer}>
                <TextInput style={styles.inputField}
                    placeholder="Enter Task"
                    onChangeText={(text)=>setText(text)}
                  value={text}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        //console.log(text);
                        props.dispatch(addToDo(text));//
                        //setText('');
                    }}
                
                >  
                    <Text> Add item </Text>
                </TouchableOpacity>

            </View>
            
        </View>
    );
}
// const mapStateToProps=state=>({
//     setTodos: state.todos
// })
// const mapDispatchToProps=dispatch=>({
//     addToDo:(text)=> dispatch(addToDo(text))
// })
 export default connect()(AddToDo);

const styles = StyleSheet.create({
    container: {
       // flex: 1,
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
