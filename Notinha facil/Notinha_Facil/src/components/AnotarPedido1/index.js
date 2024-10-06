import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';





export default function AnotarFake() {
  return (
    <View style={styles.view}>
      
      <Text style={styles.tituloPincial}>Essa é a tela de Anotar peddo</Text>
      <Text style={styles.tituloSecundadio}>Para criar uma notinha{"\n"}clique no botão abaixo</Text>
      <TouchableOpacity style={ styles.botaoInicio}><Text style={ styles.textButton}>Iniciar</Text></TouchableOpacity>
    </View>
  );
}