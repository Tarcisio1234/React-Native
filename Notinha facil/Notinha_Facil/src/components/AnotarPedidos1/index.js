import { useState, useRef } from 'react';

import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AnotarPedido_1() {
  const navigation = useNavigation();
  const route = useRoute();

  const [nomeProduto, setNomeProduto] = useState('');
  const [pesoProduto, setPesoProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const { nomeCliente = '', enderecoCliente = '' } = route.params || {};

  // Referências para cada TextInput
  const pesoRef = useRef(null);
  const nomeRef = useRef(null);
  const valorRef = useRef(null);

  const irParaCarrinho = () => {
    navigation.navigate("Carrinho", {
      nomeCliente,
      enderecoCliente,
    });
  };

  const irSobre = async () => {
    if (nomeProduto.length === 0 || pesoProduto.length === 0 || valorProduto.length === 0) return;

    const novoProduto = {
      peso: pesoProduto,
      nome: nomeProduto,
      valor: valorProduto
    };

    const produtosSalvos = await AsyncStorage.getItem('produtos');
    const listaProdutos = produtosSalvos ? JSON.parse(produtosSalvos) : [];
    listaProdutos.push(novoProduto);
    await AsyncStorage.setItem('produtos', JSON.stringify(listaProdutos));

    setNomeProduto('');
    setPesoProduto('');
    setValorProduto('');
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Ajuste para o teclado
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} // FlexGrow para evitar rolagem extra
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.viewmain}>
          <Image source={require('../../../assets/carrinho.png')} style={styles.imagem}/>
          <Text style={styles.textoPrincipal}>Produto</Text>

          <View style={styles.inputView}>
            <Text style={styles.text}>Peso:</Text>
            <TextInput 
              ref={pesoRef}
              keyboardType='numeric' 
              style={styles.input} 
              value={pesoProduto} 
              onChangeText={setPesoProduto}
              onSubmitEditing={() => nomeRef.current.focus()} // Move para o próximo campo
              returnKeyType="next"
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.text}>Nome do Produto:</Text>
            <TextInput 
              ref={nomeRef}
              keyboardType='default' 
              style={styles.input} 
              value={nomeProduto} 
              onChangeText={setNomeProduto}
              onSubmitEditing={() => valorRef.current.focus()} // Move para o próximo campo
              returnKeyType="next"
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.text}>Valor:</Text>
            <TextInput 
              ref={valorRef}
              keyboardType='numeric' 
              style={styles.input} 
              value={valorProduto} 
              onChangeText={setValorProduto}
              returnKeyType="done"
            />
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonGreen} onPress={irSobre}>
              <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buttonRed} onPress={irParaCarrinho}>
            <Text style={styles.buttonText}>Ver Carrinho</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
