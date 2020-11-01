import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableOpacity }
  from 'react-native';
// import { styles } from './styles'

const ImageDetail = ({ imageSource, score, productName }) => {
  console.log('XXXXXXX');
  // console.log(props);
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text>{productName}</Text>
      <Text>{score}</Text>

    </View>
  );
};


export default ImageDetail;
