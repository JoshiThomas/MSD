import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, ActivityIndicator, FlatList } from 'react-native';
import { styles } from './styles'
import customer from '../api/customer';

/**
 * The screen after the customer have signed in
 */

const SignedIn = ({ navigation }) => {

    const emailAddress = navigation.getParam('emailAddress');
    const mobileNumber = navigation.getParam('mobileNumber');

    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    const getProductsCount = async () => {
        const response = await customer.get('/orders?scopes=listproducts');
        setResults(response.data.result);
    };
    const registerCustomer = async (emailAddress, mobileNumber) => {
        let params = `/orders?scopes=registercustomer&phone=${mobileNumber}&email=${emailAddress}`;
        console.log(params);
        const response = await customer.get(params);
        setData(response.data);
    };

    useEffect(() => {
        getProductsCount();
        registerCustomer(emailAddress, mobileNumber);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <Text style={styles.titleView}>
                    You have successfully signed in to SaveNPack supermarket,
                    Henderson!s</Text>
            </View>
            <View style={styles.flex}>
                <Image source={require('../../assets/success.png')} style={styles.icon} />

                <View style={styles.padding10}>
                    <Text>{emailAddress}/{mobileNumber}</Text>
                </View>

                <View style={styles.padding10, styles.buttonView}>
                    <Button
                        title="Start Shopping" style={styles.button}
                        onPress={() => navigation.navigate("ScanProduct")}
                    />
                </View>
                <Text>We have</Text>
                <Text style={styles.titleView}>
                {results.length}
                 </Text>
                <Text>products available for you to choose from!</Text>
                <Image source={(require('../../assets/offers.jpg'))}
                    style={styles.offers}
                >
                </Image>

            </View>
        </View>
    );

}

export default SignedIn;


