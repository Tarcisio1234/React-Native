import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#E8F3E2",
    },
    tituloPincial: {
        textAlign: "center",
        marginTop: 40,
        fontSize: 27,
    },
    tituloSecundadio:{
        textAlign: "center",
        marginTop: 2,
        fontSize: 16,
    },
    botaoInicio: {
        marginTop: 35,
        borderRadius: 12,
        width: "55%",
        backgroundColor: "#7BE15C",
        alignItems: "center",
        display: "flex",
        marginLeft: "20.8%",
        marginTop: 100,
    },
    textButton: {
        fontSize: 18,
        textAlign: "center",
        padding: 12,
        color: "#000000", 
    },
    logo: {
        marginLeft: "40%",
        marginTop: 90,
        width: 80,
        height: 80,
    },
    input: {
        borderColor: 'gray',
        width: "80%",
        backgroundColor: "#A3FF87",
        borderRadius: 12,
        marginLeft: 30,
        height: 50,
    },
    inputView: {
        margin: 18,
        width: "90%",
        height: 75,
        backgroundColor: "#A3FF87",
        borderRadius: 12,
    },
     text: {
        marginLeft: 15,
        marginTop: 5,
    },
    input: {
        marginTop: 9,
        marginLeft: 14,
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },

});

export default styles;
