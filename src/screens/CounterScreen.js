import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableOpacity }
  from 'react-native';
import { styles } from './styles'
// import ImageDetail from '../components/ImageDetail';

const CounterScreen = ({ navigation }) => {
  console.log('XXXXXXX');
  //console.log(navigation.navigation);

  const [counter, setCounter1] = useState(0);

  return (
    <View>
      <Text>Counter screen!</Text>
      <Button
        title="ADD"
        onPress={() => {
          // counter++; 
          setCounter1(counter + 1)
          // console.log('XXXXXXX' + counter);
        }}

      >
      </Button>
      <Button
        title="SUBTRACT"
        onPress={() => {
          // counter-- ;
          setCounter1(counter - 1)
        }}
      >
      </Button>

      <Text>Current counter val: {counter}</Text>
    </View>
  );
};


export default CounterScreen;
