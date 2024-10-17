import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';




export default function DadosCliente({ navigation }) {
  const irSobre = () => {
    navigation.navigate("AnotarPedido1");
  };

  
  return (
    
    <View style={styles.view}>
      <Image
        source={require('../../../assets/imagem de uma pessoa.png')} style={styles.logo}
      />
      <Text style={styles.tituloPincial}>Dados do Cliente </Text>
      <Text style={styles.tituloSecundadio}>Adicione os dados do{"\n"}cliente abaixo</Text>

      <Text style={styles.titulosTextBox}>Nome:</Text>
      <TextInput keyboardType='default'style={styles.input} />

      <Text style={styles.titulosTextBox}>Endereço:</Text>
      <TextInput keyboardType='default' style={styles.input}/>
      <TouchableOpacity style={ styles.botaoInicio}><Text style={ styles.textButton} onPress={irSobre}>Proximo</Text></TouchableOpacity>
    </View>
  );
}