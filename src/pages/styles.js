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
        borderBottomColor: 'black', paddingBottom: 10, paddingTop: 10, textAlignVertical: 'top'
    },
    barHome: {
        fontWeight: 'bold', borderColor: 'white', borderWidth: 2,
        fontSize: 19, alignItems: 'stretch', paddingLeft: 80,
        width: '100%',
    },
    icon: {
        width: 40, height: 40
    },
    padding10: {
        padding: 10
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
    textPara: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 300,
        backgroundColor: 'yellow',
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
    }
});

export { styles }   