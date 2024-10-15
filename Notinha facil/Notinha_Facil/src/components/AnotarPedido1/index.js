import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';




export default function AnotarFake() {
  return (
    <View style={styles.view}>
      <Image
        source={require('../../../assets/imagem de uma pessoa.png')} style={styles.logo}
      />
      <Text style={styles.tituloPincial}>Dados do Cliente </Text>
      <Text style={styles.tituloSecundadio}>Adicione os dados do{"\n"}      cliente abaixo</Text>
      <TouchableOpacity style={ styles.botaoInicio}><Text style={ styles.textButton}>Proximo</Text></TouchableOpacity>
    </View>
  );
}