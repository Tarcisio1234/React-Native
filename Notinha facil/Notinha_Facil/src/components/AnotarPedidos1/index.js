import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';


export default function DadosCliente() {
    const irPara = () => {
        navigation.navigate("AnotarPedido_2");
      };
    return (
        <View style={styles.viewmain}>
            <Image
                source={require('../../../assets/carrinho.png')} style={styles.imagem}
            />
            <Text style ={styles.textoPrincipal}>Produto</Text>
            <View style={styles.inputView}>
                <Text style={styles.text}>Peso:</Text>
                <TextInput keyboardType='numeric' style={styles.input} />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>Nome do Produto:</Text>
                <TextInput keyboardType='default' style={styles.input} />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>Valor:</Text>
                <TextInput keyboardType='numeric' style={styles.input} />
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.buttonGreen}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGreen}>
                    <Text style={styles.buttonText} onPress={irPara}>Proximo</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonRed}>
                <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>

        </View>
    );

}
