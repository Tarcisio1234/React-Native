import { Button, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AnotarPedido_1({ navigation }) {
    const [nomeProduto, setNomeProduto] = useState('');
    const [pesoProduto, setPesoProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');

    // Função para carregar as últimas informações salvas do AsyncStorage ao iniciar
    useEffect(() => {
        const carregarUltimosValores = async () => {
            const produtoSalvo = await AsyncStorage.getItem('ultimoProduto');
            if (produtoSalvo) {
                const { nome, peso, valor } = JSON.parse(produtoSalvo);
                setNomeProduto(nome || '');
                setPesoProduto(peso || '');
                setValorProduto(valor || '');
            }
        };
        carregarUltimosValores();
    }, []);


    const irParaCarrinho = () => {
        navigation.navigate("Carrinho");
      };

      const irSobre = async () => {
        if (nomeProduto.length === 0 || pesoProduto.length === 0 || valorProduto.length === 0) return;
    
        const novoProduto = {
            peso: pesoProduto,
            nome: nomeProduto,
            valor: valorProduto
        };
    
        // Obtenha a lista existente
        const produtosSalvos = await AsyncStorage.getItem('produtos');
        const listaProdutos = produtosSalvos ? JSON.parse(produtosSalvos) : [];
    
        // Adicione o novo produto à lista
        listaProdutos.push(novoProduto);
    
        // Salve a lista atualizada no AsyncStorage
        await AsyncStorage.setItem('produtos', JSON.stringify(listaProdutos));
    
        // Limpa os campos para o próximo produto
        setNomeProduto('');
        setPesoProduto('');
        setValorProduto('');
    };

    // Função para restaurar os últimos valores salvos nos TextInputs
    const restaurarDados = async () => {
        const produtoSalvo = await AsyncStorage.getItem('ultimoProduto');
        if (produtoSalvo) {
            const { peso, nome, valor } = JSON.parse(produtoSalvo);
            
            setPesoProduto(peso || '');
            setNomeProduto(nome || '');
            setValorProduto(valor || '');
        }
    };

    return (
        <View style={styles.viewmain}>
            <Image source={require('../../../assets/carrinho.png')} style={styles.imagem}/>
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
                <TouchableOpacity style={styles.buttonGreen} onPress={restaurarDados}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGreen} onPress={irSobre}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonRed} onPress={irParaCarrinho}>
                <Text style={styles.buttonText}>Ver Carrinho</Text>
            </TouchableOpacity>
        </View>
    );
}
