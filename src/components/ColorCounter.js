import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableOpacity }
  from 'react-native';
// import { styles } from './styles'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  // console.log(props);
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onIncrease()}
      >
      </Button>

      <Button
        title={`Decrease ${color}`}
        onPress={() => onDecrease()}
      >
      </Button>
    </View>
  );
};


export default ColorCounter;
