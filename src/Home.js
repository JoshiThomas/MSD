import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar } from 'react-native';
import { styles } from './styles'

/**
 * Home screen
 */
export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    state = { mobileNumber: "", emailAddress: "" };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.flex}>
                    <Text style={styles.barHome}>Welcome To Self Checkout</Text>
                </View>
                <View style={styles.flex}>
                    <Image source={require('../assets/cart.png')} style={styles.icon} />

                    <Text>asd
                    Please enter your details.
              </Text>
                    <TextInput placeholder="Mobile Number" style={styles.textInput}
                        onChangeText={mobileNumber => this.setState({ mobileNumber })}
                    ></TextInput>

                    <TextInput placeholder="Email Address" style={styles.textInput}
                        onChangeText={emailAddress => this.setState({ emailAddress })}
                    ></TextInput>
                    <View style={styles.padding10}>
                        <Text style={styles.textPara}>
                            Click on the button below to start shopping. {"\n\n"}
                            Please scan the QR code displayed at the main gate
                </Text>
                    </View>

                    <View style={styles.padding10, styles.button}>
                        <Button
                            title="Scan QR Code"
                            onPress={() => navigate(
                                'SignIn', { emailAddress: this.state.emailAddress, 
                                    mobileNumber: this.state.mobileNumber,
                                    nav: this.props.navigation
                                 }
                            )}
                        />
                    </View>
                    <StatusBar style="auto" />
                </View>
            </View>
        );

    }

}

