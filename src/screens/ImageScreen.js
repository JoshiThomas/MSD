/**
 * 
// Playground for reusable component.
// This can be usedfor the product listing page.

 * 
 */


import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableOpacity }
  from 'react-native';
import { styles } from '../components/Styles'
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Image screen!</Text>
      <ImageDetail
        productName="milk"
        imageSource={(require('../../assets/beach.jpg'))}
        score={12}
        >

      </ImageDetail>
      <ImageDetail
        productName="oats"
        imageSource={(require('../../assets/forest.jpg'))}
        score={15}

        >

      </ImageDetail>
      <ImageDetail
        productName="biscuts"
        imageSource={(require('../../assets/mountain.jpg'))}
        score={18}

        >

      </ImageDetail>

    </View>
  );
};


export default ImageScreen;
