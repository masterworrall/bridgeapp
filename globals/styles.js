import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#247212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        backgroundColor: '#22c096',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    helper: { 
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

