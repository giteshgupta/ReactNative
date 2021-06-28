import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDo from './src/components/ToDo';
import store from './src/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ToDo />
      </Provider>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
