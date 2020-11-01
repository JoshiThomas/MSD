import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar } from 'react-native';
import config from '../../config';
import { styles } from './styles'

/**
 * Home screen 
 */
const Home = ({ navigation }) => {

    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <Text style={styles.titleView}>Welcome To Self Checkout</Text>
            </View>
            <View style={styles.flex}>
                <Image source={require('../../assets/cart.png')} style={styles.icon} />
                <Text>
                    Please enter your details.
                    </Text>
                <TextInput placeholder="Mobile Number" style={styles.textInput}
                    value={mobile}
                    onChangeText={(newVal) => {
                        setMobile(newVal);
                    }}
                >
                </TextInput>

                <TextInput placeholder="Email Address" style={styles.textInput}
                    value={email}
                    onChangeText={(newVal) => {
                        setEmail(newVal);
                    }}
                >
                </TextInput>
                {/* Customer input validation */}
                {mobile.length < 10 ? <Text style={styles.textError}>Please enter the Mobile Number</Text> : null}
                {email.length < 6 ? <Text style={styles.textError}>Please enter the Email address</Text> : null}

                <View style={styles.padding10}>
                    <Text style={styles.textPara}>
                        Click on the button below to start shopping. {"\n\n"}
                            Please scan the QR code displayed at the main gate
                </Text>
                </View>

                <View style={styles.padding10, styles.buttonView}>
                    {/* <Button
                        title="Sign Me In" style={styles.button}
                        onPress={() => navigation.navigate("SignedIn")}
                    /> */}
                    <Button
                        title="Sign Me In" style={styles.button}
                        onPress={() => navigation.navigate(
                            'SignedIn', {
                            emailAddress: email,
                            mobileNumber: mobile
                        }
                        )}
                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        title="Scan QR Code" style={styles.button}
                        onPress={() => navigation.navigate("SignIn")}
                    />
                </View>
                <StatusBar style="auto" />
            </View>
        </View>
    );

}

export default Home;


