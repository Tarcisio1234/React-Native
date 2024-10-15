import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function MainInicio({ navigation }) {
  const irSobre = () => {
    navigation.navigate("Inicio");
  };

  return (
    <View style={styles.view}>
      <Image
        source={require('../../../assets/logo.png')} style={styles.logo}
      />
      
      <Text style={styles.tituloPincial}>Olá, seja bem vindo</Text>
      <Text style={styles.tituloSecundadio}>
        Para criar uma notinha{"\n"}clique no botão abaixo
      </Text>
      <Image source={require('../../../assets/seta.png')} style={styles.img2} />
      <TouchableOpacity style={styles.botaoInicio} onPress={irSobre}>
        <Text style={styles.textButton}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
