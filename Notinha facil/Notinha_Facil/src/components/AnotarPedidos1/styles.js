import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewmain: {
        backgroundColor: "#E8F3E2",
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    inputView: {
        margin: 30,
        width: "90%",
        height: 75,
        backgroundColor: "#A3FF87",
        borderRadius: 12,
    },

    input: {
        marginTop: 7,
        marginLeft: 14,
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },

    text: {
        marginLeft: 15,
        marginTop: 5,
    },

    imagem: {
        alignItems: "center",
        marginTop: 45,
        width: 100,
        height: 100,
    },

    textoPrincipal: {
        fontSize:29,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    buttonGreen: {
        marginTop: 25,
        backgroundColor: '#7BE15C',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginHorizontal: 15,
    },

    buttonRed: {
        backgroundColor: '#F28A8A',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },

    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default styles;