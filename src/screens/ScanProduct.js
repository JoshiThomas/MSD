// scan each product using bar code scanner.
// Since bar code scanner library shows conflict with react navigation, 
// it is temporarily disabled. A manual entry needs to be made for the timebeing.

import React, { useState, useEffect } from 'react';
import {
    Button, StyleSheet, Text, TextInput, View, Image, ActivityIndicator, FlatList, TouchableOpacity
} from 'react-native';
import { styles } from './styles'
import customer from '../api/customer';
import ProductItem from '../components/ProductItem';

/**
 * The screen to scan the products using bar code scanner.
 */

const ScanProduct = ({ navigation }) => {

    // const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState('yes');
    const [data, setData] = useState([]);
    console.log(isLoading);
    const getProducts = async () => {

        const response = await customer.get('/orders?scopes=listproducts');
        setData(response.data.result);
        console.log(response.data.result);
        setLoading('no');
    };


    useEffect(() => {
        getProducts();
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleView}>
                    Pick a product that you want to buy, and scan the Barcode
                    <Image source={require('../../assets/cart.png')} style={styles.icon} />
                </Text>
                <FlatList
                    contentContainerStyle={{ justifyContent: 'center' }}
                    data={data}
                    keyExtractor={({ productId }, index) => productId}
                    renderItem={({ item }) => (
                        <ProductItem
                            productName={item.productName}
                            productImage={item.productImage}
                            price={item.price}
                        >
                        </ProductItem>

                    )}
                />
            </View>
            <View>
                <Image source={(require('../../assets/tryme.png'))}
                    style={styles.tryme}
                >
                </Image>
            </View>
        </View>
    );

}

export default ScanProduct;


