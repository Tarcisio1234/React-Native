import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import {Clipboard} from 'react-native';

const irSobre = () => {
    navigation.navigate("DadosCliente");
};

const Carrinho = () => {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [produtoRemover, setProdutoRemover] = useState(null);
    const [modalVisivel, setModalVisivel] = useState(false);

    // Carregar produtos do AsyncStorage ao iniciar
    useEffect(() => {
        const carregarProdutos = async () => {
            const produtosSalvos = await AsyncStorage.getItem('produtos');
            if (produtosSalvos) {
                setListaProdutos(JSON.parse(produtosSalvos));
            }
        };
        carregarProdutos();
    }, []);

    

    // Função para remover o produto
    const removerProduto = async () => {
        const listaAtualizada = listaProdutos.filter(p => p !== produtoRemover);
        setListaProdutos(listaAtualizada);
        await AsyncStorage.setItem('produtos', JSON.stringify(listaAtualizada));
        setProdutoRemover(null);
        setModalVisivel(false);
    };

    // Função para finalizar, copiar para a área de transferência e limpar AsyncStorage
    const finalizarCompra = async () => {
        const textoProdutos = listaProdutos.map(produto => `${produto.peso}kg  -  ${produto.nome} -   R$${produto.valor}`).join('\n');

        // Copiar a lista de produtos para a área de transferência
        Clipboard.setString(textoProdutos);

        // Limpar o AsyncStorage
        await AsyncStorage.removeItem('produtos');
        setListaProdutos([]);

        // Exibir um alerta confirmando a cópia e a limpeza
        Alert.alert('Finalizado', 'A lista de produtos foi copiada e os dados foram apagados.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Carrinho</Text>
            
            {listaProdutos.length === 0 ? (
                <Text style={styles.emptyText}>Nenhum produto adicionado</Text>
            ) : (
                <FlatList
                    data={listaProdutos}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>{item.peso}kg - {item.nome} - R$ {item.valor}</Text>
                            <TouchableOpacity 
                                style={styles.removerButton}
                                onPress={() => {
                                    setProdutoRemover(item);
                                    setModalVisivel(true);
                                }}
                            >
                                <Text style={styles.removerText}>-</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}

            <TouchableOpacity style={styles.adicionarButton} onPress={irSobre}>
                <Text style={styles.adicionarText}>Adicionar Itens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.finalizarButton} onPress={finalizarCompra}>
                <Text style={styles.finalizarText}>Finalizar</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => setModalVisivel(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Deseja remover o produto ?</Text>
                        <Button title="Remover Produto" onPress={removerProduto} style={styles.botaoEscolha} />
                        <Button title="Cancelar" onPress={() => setModalVisivel(false)} style={styles.botaoEscolha} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

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
});

export default Carrinho;
