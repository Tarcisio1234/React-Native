import { useState } from 'react';
import { Button, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';

export default function DadosCliente({ navigation }) {
  const [nomeCliente, setNomeCliente] = useState('');
  const [enderecoCliente, setEnderecoCliente] = useState('');

  const irSobre = () => {
    navigation.navigate("AnotarPedido1", {
      nomeCliente,
      enderecoCliente,
    });
  };

  return (
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
          value={nomeCliente}
          onChangeText={setNomeCliente}
          style={styles.input}
        />
      </View>


      <View style={styles.inputView}>
        <Text style={styles.text}>Endereço:</Text>
        <TextInput
          value={enderecoCliente}
          onChangeText={setEnderecoCliente}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.botaoInicio}>
        <Text style={styles.textButton} onPress={irSobre}>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
}
