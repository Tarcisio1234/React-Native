import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, TextInput, Button, Text, FlatList, TouchableOpacity, Modal, Alert } from 'react-native';

const AnotarPedido = () => {
    const [nomeProduto, setNomeProduto] = useState('');
    const [pesoProduto, setPesoProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const [listaProdutos, setListaProdutos] = useState([]);
    const [produtoRemover, setProdutoRemover] = useState(null); // Produto que será removido
    const [modalVisivel, setModalVisivel] = useState(false);

    // Carregar produtos salvos no AsyncStorage ao iniciar
    useEffect(() => {
        const carregarProdutos = async () => {
                const produtosSalvos = await AsyncStorage.getItem('ultimoProduto');
                if (produtosSalvos) {
                    const produtos = JSON.parse(produtosSalvos);
        };
        carregarProdutos();
    }
}, []);

const removerProduto = async () => {
    const listaAtualizada = listaTarefas.filter(t => t !== tarefaRemover);// ele pega o t e olha se o t é diferente do tarefaRemover, verificar se t que é a primeira tarefa é diferente da tarefa que quis remover
    setListaTarefas(listaAtualizada);//Depois que removi a tarefa eu guardei a informação na lista atualizada
    await AsyncStorage.setItem('ultimoProduto', JSON.stringify(listaAtualizada));//mando a chave 'tarefas' e a informação que eu quero
    setTarefaRemover('');//garantir que esvazio a variavel dnv
    setModalVisivel(false);//Na hora que cliquei em remover eu mostrei o modal sem querer então preciso fazer com que ele desapareça no final
  }

    return (
        <View style={styles.container}>
            <TextInput
                value={nomeProduto}
                onChangeText={setNomeProduto}
                placeholder="Nome do Produto"
                style={styles.input}
            />
            <TextInput
                value={pesoProduto}
                onChangeText={setPesoProduto}
                placeholder="Peso do Produto"
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                value={valorProduto}
                onChangeText={setValorProduto}
                placeholder="Valor do Produto"
                keyboardType="numeric"
                style={styles.input}
            />

            {listaProdutos.length === 0 ? (
                <Text style={styles.emptyText}>Nenhum produto adicionado</Text>
            ) : (
                <FlatList //renderizar os itens
                data={listaTarefas}
                renderItem={({ item }) =>(
                  <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>{item}</Text>
                      <TouchableOpacity 
                      onPress={() => {
                        setTarefaRemover(item)
                        setModalVisivel(true)}}>
                      
                        <Text style={styles.removerButton}> Remover </Text> 
                      </TouchableOpacity>
                  </View>
                )}
                />
            )}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => setModalVisivel(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Deseja remover o produto "{produtoRemover?.nome}"?</Text>
                        <Button title="Remover Produto" onPress={removerProduto} />
                        <Button title="Cancelar" onPress={() => setModalVisivel(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
    },
    removerButton: {
        color: 'red',
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
        color: 'gray',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
});

export default AnotarPedido;
