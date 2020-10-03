import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.barHome}>Welcome To Self Checkout</Text>
      </View>
      <View style={styles.flex}>

        <TextInput placeholder="Name" style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        ></TextInput>
        <Button title="SCAN QR" onPress={addGoalHandler} />

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50, paddingLeft: 5, paddingRight: 5
  },
  flex: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'
  },
  textInput: {
    borderColor: '#FF22DD', width: '80%', borderWidth: 1,
    borderColor: 'red'
  },
  barHome: {
    fontWeight: 'bold', borderColor: 'white', borderWidth: 2,
    fontSize: 19, alignItems: 'stretch', paddingLeft: 80,
    width: '100%',
  }
});
