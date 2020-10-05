import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, StatusBar } from 'react-native';
import { styles } from './styles'

/**
 * Home screen
 */
export default class SignedIn extends React.Component {

    static navigationOptions = {
        title: 'You have Signed In',
    };

    state = { mobileNumber: "", emailAddress: "" };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.flex}>
                    <Text style={styles.titleView}>You have successfully signed in to SaveNPack supermarket, Henderson</Text>
                </View>
                <View style={styles.flex}>
                    <Image source={require('../../assets/success.png')} style={styles.icon} />
                     
                    <View style={styles.padding10}>
                         
                    </View>

                    <View style={styles.padding10, styles.buttonView}>
                        <Button
                            title="Start Shopping" style={styles.button}
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

