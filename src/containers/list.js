import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {connect} from 'react-redux'

 function List(props) {
    return (
        <View style={styles.container}>
           
         {props.todos.map((todo)=>(
             <TouchableOpacity>
                 
                 <Text>{todo.text}</Text>         
             </TouchableOpacity>
              
               
         ))}
        </View>
    );
}
const mapStateToProps=(state)=>({
   todos: state.todos.data, // here i am fetching data from store 
})
export default connect(mapStateToProps)(List)
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
