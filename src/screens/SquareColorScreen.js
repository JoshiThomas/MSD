import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableOpacity, FlatList }
  from 'react-native';
import { styles } from './styles'
import ColorCounter from '../components/ColorCounter';

const SquareColorScreen = () => {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const INCREMENT = 50;

  const setColor = (color, change) => {

  }
  console.log(red);
  console.log(green);
  console.log(blue);

  return (
    <View>
      <Text>SquareColorScreen screen!</Text>
      <ColorCounter
        onIncrease={() => setRed(red + INCREMENT)}
        onDecrease={() => setRed(red - INCREMENT)}
        color="Red">
      </ColorCounter>

      <ColorCounter
        onIncrease={() => setBlue(blue + INCREMENT)}
        onDecrease={() => setBlue(blue - INCREMENT)}
        color="Blue">
      </ColorCounter>

      <ColorCounter
        onIncrease={() => setGreen(green + INCREMENT)}
        onDecrease={() => setGreen(green - INCREMENT)}
        color="Green">
      </ColorCounter>

      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
      {/* <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},0,0)` }} /> */}

    </View>
  );
};

export default SquareColorScreen;
