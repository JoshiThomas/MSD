import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


const navigationRef = React.createRef();

//export default class SingIn extends React.Component {
// function navigate(name, params) {
//     navigationRef.current && navigationRef.current.navigate(name, params);
//     // navigationRef.current.navigate(name, params);
//     this.props.navigation.navigate('Home')
// }
 


export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    // const { navigate } = this.props.navigation;


    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        alert(` You have signed into the Supermarket successfully (code: ${data} ) `);

        // navigate('Home', 'name:joshi');
        //  this.props.navigator.push({
        //      component: Home
        //  });
        //navigationRef.current.navigate('Home');
        // navigationService.navigation.navigate('Home');

    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

        </View>
    );
}

