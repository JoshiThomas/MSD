import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableOpacity }
  from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log('XXXXXssXX');
  //console.log(navigation.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen!</Text>
      <Button
        title="Components"
        // onPress={() => console.log("HIii")}
        onPress={() => navigation.navigate("Components")}
      >
      </Button>
      <Button
        title="Lists"
        onPress={() => navigation.navigate("List")}
      >
      </Button>
      <Button
        title="Images"
        onPress={() => navigation.navigate("Images")}
      >
      </Button>
      <Button
        title="Counter"
        onPress={() => navigation.navigate("Counter")}
      >
      </Button>
      <Button
        title="Color Adding"
        onPress={() => navigation.navigate("Color")}
      >
      </Button>
      <Button
        title="Squared Color Screeen"
        onPress={() => navigation.navigate("SquareColor")}
      >
      </Button>
      <Button
        title="Text Screeen"
        onPress={() => navigation.navigate("TextScreen")}
      >
      </Button>

      <TouchableOpacity
        // onPress={() => console.log('LIST CLICKED')}
        onPress={() => navigation.navigate("Components")}
      >
        <Text>Products</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
