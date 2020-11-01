import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableOpacity }
  from 'react-native';
import { styles } from "../screens/styles";

const ProductItem = ({ productName, productImage, price }) => {
  console.log(productImage);
  // console.log(props);
  return (
    <View style={styles.productItem}>
      <Image
        style={styles.productImage}
        source={{ uri: productImage }}
      ></Image>
      <Text style={styles.productNameItem} >{productName}</Text>
      <Text style={styles.price} >${price}</Text>
      <View style={styles.productButtonScan}>
        <Button
          title="Scan Barcode"
          color="green"
        />
      </View>
    </View>
  );
};


export default ProductItem;
