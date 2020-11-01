/**
 * 
// Test file for FlatList 
   The code is used inside scan products screen file.
 * 
 */


import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { styles } from '../components/Styles'

const ListScreen = () => {

    const products = [
        { name: 'Milk #1',  price: '20' },
        { name: 'Milk #3',  price: '22' },
        { name: 'Milk #4',  price: '23' },
        { name: 'Milk #5',  price: '24' },
        { name: 'Milk #6',  price: '25' },
        { name: 'Milk #42', price: '26' },
        { name: 'Milk #76', price: '27' },
        { name: 'Milk #86', price: '28' },
        { name: 'Milk #96', price: '33' },
    ];

    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(products) => products.name}
            // listKey={(item, name) => 'D' + name.toString()}
            data={products}
            renderItem={({ item }) => {
            return <Text style={styles.productList}>{item.name} - {item.price}</Text>
            }}

        />
    );

};

export default ListScreen;