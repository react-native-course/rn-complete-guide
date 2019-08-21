import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.interactionContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button onPress={() => console.log('test')} title="add"/>
      </View>
      <View/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 3,
  }
});
