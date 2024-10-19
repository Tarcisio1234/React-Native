import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AnotarPedido_2({ route, navigation }) {
    // Recupera a lista de produtos atualizada da tela anterior
    const { listaProdutosAtualizada = [] } = route.params;

    // Variáveis para armazenar os valores
    const [nomeProduto, setNomeProduto] = useState('');
    const [pesoProduto, setPesoProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const [listaProdutos, setListaProdutos] = useState([]);

    // Função para adicionar produto
    const adicionarProduto = async () => {
        if (nomeProduto.length === 0 || pesoProduto.length === 0 || valorProduto.length === 0) return;

        // Cria um novo objeto produto com nome, peso e valor
        const novoProduto = {
            nome: nomeProduto,
            peso: pesoProduto,
            valor: valorProduto
        };

        // Adiciona o novo produto à lista de produtos
        const novaLista = [...listaProdutosAtualizada, novoProduto];
        setListaProdutos(novaLista);

        // Salva a lista no AsyncStorage
        await AsyncStorage.setItem('produtos', JSON.stringify(novaLista));

        // Navega para a próxima tela com a lista atualizada

        // Limpa os campos de entrada
        setNomeProduto('');
        setPesoProduto('');
        setValorProduto('');
    };

    // Renderizar cada produto da lista
    const renderProduto = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>Produto: {item.nome}</Text>
            <Text style={styles.itemText}>Peso: {item.peso}</Text>
            <Text style={styles.itemText}>Valor: {item.valor}</Text>
        </View>
    );

    return (
        <View style={styles.viewmain}>
            
            <Text style={styles.textoPrincipal}>Produto</Text>
            
            <View style={styles.inputView}>
                <Text style={styles.text}>Peso:</Text>
                <TextInput 
                    keyboardType='numeric' 
                    style={styles.input} 
                    value={pesoProduto} 
                    onChangeText={setPesoProduto} 
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>Nome do Produto:</Text>
                <TextInput 
                    keyboardType='default' 
                    style={styles.input} 
                    value={nomeProduto} 
                    onChangeText={setNomeProduto} 
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>Valor:</Text>
                <TextInput 
                    keyboardType='numeric' 
                    style={styles.input} 
                    value={valorProduto} 
                    onChangeText={setValorProduto} 
                />
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.buttonGreen}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGreen}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('AnotarPedido_3')}>Proximo</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonRed}>
                <Text style={styles.buttonText} onPress={adicionarProduto}>Finalizar</Text>
            </TouchableOpacity>

            
            <FlatList
                data={listaProdutos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderProduto}
                style={styles.lista}
            />
        </View>
    );
}
