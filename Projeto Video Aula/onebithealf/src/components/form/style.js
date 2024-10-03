import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: '#ffff',
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#9999",
        fontSize: 17,
        paddingLeft: 20,
        marginTop: 30,

    },
    input: {
        width: "90%",
        borderRadius: 12,
        backgroundColor: "#f6f6f6",
        height:40,
        margin: 12,
        paddingLeft: 10,
    },
    bottomCalculator:{
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
        
    },
    textBottonCalculator: {
        fontSize: 20,
        color: "#ffff",

    }
});

export default styles