import { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from './styles';

export default function DadosCliente({ navigation }) {
  const [nomeCliente, setNomeCliente] = useState('');
  const [enderecoCliente, setEnderecoCliente] = useState('');

  const nomeRef = useRef(null);
  const enderecoRef = useRef(null);

  const irSobre = () => {
    navigation.navigate("AnotarPedido1", {
      nomeCliente,
      enderecoCliente,
    });
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 3} 
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.view}>
          <Image
            source={require('../../../assets/imagem de uma pessoa.png')}
            style={styles.logo}
          />
          <Text style={styles.tituloPincial}>Dados do Cliente</Text>
          <Text style={styles.tituloSecundadio}>Adicione os dados do{"\n"}cliente abaixo</Text>

          <View style={styles.inputView}>
            <Text style={styles.text}>Nome:</Text>
            <TextInput
              ref={nomeRef} // Referência para o TextInput de nome
              value={nomeCliente}
              onChangeText={setNomeCliente}
              style={styles.input}
              onSubmitEditing={() => enderecoRef.current.focus()} // Move para o próximo campo
              returnKeyType="next"
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.text}>Endereço:</Text>
            <TextInput
              ref={enderecoRef} // Referência para o TextInput de endereço
              value={enderecoCliente}
              onChangeText={setEnderecoCliente}
              style={styles.input}
              returnKeyType="done"
            />
          </View>

          <TouchableOpacity style={styles.botaoInicio} onPress={irSobre}>
            <Text style={styles.textButton}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
