import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 40, paddingLeft: 5, paddingRight: 5
    },
    flex: {
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'
    },
    textInput: {
        width: '80%', borderBottomWidth: 1,
        borderColor: 'grey', paddingBottom: 10, paddingTop: 10, textAlignVertical: 'top',
        marginBottom: 10
    },
    barHome: {
        fontWeight: 'bold', borderColor: 'white', borderWidth: 2,
        fontSize: 19, alignItems: 'stretch', paddingLeft: 80,
        width: '100%',
    },
    icon: {
        width: 40, height: 40
    },
    productImage: {
        width: '35%', height: 50, marginTop: '2%'
    },
    offers: {
        width: '100%', height: '50%',
        marginTop: '25%',
        transform: [{ scale: 1.05 }],
        resizeMode: 'contain',
    },
    tryme: {
        width: '100%', height: '40%',
        marginTop: '10%',
        transform: [{ scale: 1.20 }],
        resizeMode: 'contain',
    },
    padding10: {
        padding: 10
    },
    padding5: {
        padding: 5
    },
    paddingTop10: {
        paddingTop: 10
    },
    buttonView: {
        paddingTop: 50,
        width: 250,
    },
    button: {
        textTransform: 'lowercase'
    },
    buttonScann: {
        textTransform: 'lowercase',
        marginTop:'10%'
    },
    buttonAddTocart: {
        width: '90%',
    },
    textPara: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 300,
        backgroundColor: 'yellow',
    },
    textError: {
        textAlign: 'left', // <-- the magic
        marginTop: 0,
        width: 300,
        color: 'red',
    },
    containerView: {
        flex: 1,
        marginTop: 30,
        marginBottom: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    titleView: {
        fontSize: 19,
        fontWeight: "bold",
        textAlign: 'center',
    },
    cameraBarcodeScannerWrapper: {
        overflow: 'hidden',
        width: 260,
        height: 200,
    },
    productList: {
        marginVertical: 10,
    },
    productItem: { justifyContent: 'center', width: '90%' },
    price: { width: "50%", paddingTop: '2%', paddingLeft: "20%", fontWeight: 'normal', fontSize: 15 },
    productButtonScan: {
        width: "50%", paddingTop: '2%'
    },
    productNameItem: { fontWeight: 'normal', fontSize: 15 }
});

export { styles }   