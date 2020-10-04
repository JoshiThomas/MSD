import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 50, paddingLeft: 5, paddingRight: 5
    },
    flex: {
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'
    },
    textInput: {
        width: '70%', borderBottomWidth: 1,
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
    button: {
        paddingTop: 50,
        width: 250,
    },
    textPara: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 200,
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
        textAlign: 'center',
      },
});

export { styles }   