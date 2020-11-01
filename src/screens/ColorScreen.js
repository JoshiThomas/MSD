import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableOpacity, FlatList }
  from 'react-native';
import { styles } from './styles'
// import ImageDetail from '../components/ImageDetail';

const ColorScreen = () => {
  // console.log('XXXXXXX');
  //console.log(navigation.navigation);

  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text>Color screen!</Text>
      <Button
        title="Add colors"
        onPress={() => {
          setColors([...colors, getRGB()]);
        }}
      />
      
      <FlatList
         keyExtractor={(item) => item} 
        // key={colors}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
        }}
      />
    </View>
  );
};

const getRGB = () => {
  const red = Math.floor(Math.random() * 250);
  const blue = Math.floor(Math.random() * 251);
  const green = Math.floor(Math.random() * 252);
  console.log(`rgb(${red}, ${green}, ${blue})`);
  console.log(`${red}`);

  return `rgb(${red},${green},${blue})`;
};

export default ColorScreen;
