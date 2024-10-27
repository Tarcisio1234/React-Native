import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F3E2',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 30,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        padding: 9,
        marginBottom: 10,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 16,
        flex: 1,
    },
    removerButton: {
        backgroundColor: '#EF5454',
        padding: 10,
        borderRadius: 25,
    },
    removerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    adicionarButton: {
        width: "85%",
        marginLeft: 20,
        backgroundColor: '#7BE15C',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    adicionarText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    finalizarButton: {
        width: "85%",
        marginLeft: 20,
        backgroundColor: '#F28A8A',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 55,
    },
    finalizarText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'gray',
        marginTop: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 10,
        width: '90%',
    },
    totalText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
});

export default styles;