import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import { Clipboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';



const Carrinho = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { nomeCliente = '', enderecoCliente = '' } = route.params || {};
    const [produtoRemover, setProdutoRemover] = useState(null);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [total, setTotal] = useState(0);

    const irSobre = () => {
        navigation.navigate("AnotarPedido1", {
            nomeCliente,
            enderecoCliente,
          });
    };
    // Carregar produtos do AsyncStorage ao iniciar
    useEffect(() => {
        const carregarProdutos = async () => {
            const produtosSalvos = await AsyncStorage.getItem('produtos');
            if (produtosSalvos) {
                const produtos = JSON.parse(produtosSalvos);
                setListaProdutos(produtos);
                calcularTotal(produtos);
                setListaProdutos(JSON.parse(produtosSalvos));
                calcularTotal(produtos);
            }
        };
        carregarProdutos();
    }, []);

    const calcularTotal = (produtos) => {
        let totalCalculado = produtos.reduce((soma, produto) => {
            return soma + parseFloat(produto.valor);
        }, 0);
        setTotal(totalCalculado);
    };

    // Função para remover o produto
    const removerProduto = async () => {
        const listaAtualizada = listaProdutos.filter(p => p !== produtoRemover);
        setListaProdutos(listaAtualizada);
        await AsyncStorage.setItem('produtos', JSON.stringify(listaAtualizada));
        calcularTotal(listaAtualizada); // Atualiza o total
        setProdutoRemover(null);
        setModalVisivel(false);
    };

    // Função para finalizar, copiar para a área de transferência e limpar AsyncStorage
    const finalizarCompra = async () => {
        const textoProdutos = listaProdutos.map(produto => `${produto.peso}kg  -  ${produto.nome} -   R$${produto.valor}`).join('\n');
    
        const textoParaCopiar = `Cliente: ${nomeCliente || ''}\nEndereço: ${enderecoCliente || ''}\n\n${textoProdutos}\n\nTotal: R$${total.toFixed(2)}`;

    
        // Copiar para a área de transferência
        Clipboard.setString(textoParaCopiar);
    
        // Limpar o AsyncStorage
        await AsyncStorage.removeItem('produtos');
        
        // Exibir um alerta confirmando a cópia e a limpeza
        Alert.alert(
            'Finalizado',
            'A lista de produtos foi copiada com sucesso!',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate("Home") // Redireciona para MainInicio
                }
            ]
        );
    
        setListaProdutos([]);
        setTotal(0);
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
            {listaProdutos.length > 0 && (
                <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
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



export default Carrinho;
