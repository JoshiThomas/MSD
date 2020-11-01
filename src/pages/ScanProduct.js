import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar, TouchableHighlight } from 'react-native';
import { styles } from './styles'

/**
 * Home screen
 */


const fetchApiCall = () => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": "yourapikey"
        }
    })
        .then(response => response.json())
        .then(response => {
            setQuote(response.content);
            setSource(response.originator.name)
        })
        .catch(err => {
            console.log(err);
        });
}
//const [quote, setQuote] = React.useState('');
//const [source, setSource] = React.useState('');

export default class ScanProduct extends React.Component {

    static navigationOptions = {
        title: 'Scan a Product',
    };

    
    state = { mobileNumber: "", emailAddress: "" };

    render() {
 

        return (
            <View style={styles.container}>
                <View style={styles.flex}>
                    <Text style={styles.titleView}>Pick a product that you want to buy, and scan the Barcode</Text>
                </View>
                <View style={styles.flex}>
                    <Image source={require('../../assets/cart.png')} style={styles.icon} />

                    <View style={styles.padding10}>

                    </View>

                    <View style={styles.padding10, styles.buttonView}>
                        <TouchableHighlight onPress={fetchApiCall}>
                            <Text>Use Fetch APIS</Text>
                        </TouchableHighlight>
                        {/* <View>
                            <Text>{quote}</Text>
                            <Text>{source}</Text>
                        </View> */}
                        <Button
                            title="Add to Cart" style={styles.button}
                            onPress={() => navigate(
                                'SignedIn', {
                                emailAddress: this.state.emailAddress,
                                mobileNumber: this.state.mobileNumber
                            }
                            )}
                        />
                    </View>

                </View>
            </View>
        );

    }

}

