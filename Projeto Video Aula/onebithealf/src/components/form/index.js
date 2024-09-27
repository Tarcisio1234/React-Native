import React, {useState} from  "react"
import { Text,TextInput, View, Button } from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

const[altura, setAltura] = useState(null)
const[peso, setPeso] = useState(null)
const[messageImc, setMessageImc] = useState("preencha o peso e altura")
const[imc, setImc] = useState(null)
const[textButton, setTextButton] = useState("Calcular")


function imcCalculator(){
    const imcValue = (peso / (altura * altura)).toFixed(2);
    return setImc(imcValue);
}

function valiationImc(){
    if(peso != null && altura != null){
        imcCalculator()
        setAltura(null)
        setPeso(null)
        setMessageImc("Seu IMC é igual: ")
        setTextButton("Calcular novamente")
        return
    }
    else{
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
    }
}

    return (
        <View style={styles.formContext}>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setAltura}
                value={altura}
                placeholder="EX. 1.78"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                onChangeText={setPeso}
                placeholder="EX. 70"
                keyboardType="numeric"
                value={peso}
                />
            </View>
            <Button onPress={() =>valiationImc()} title={textButton}></Button>
            <View>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
            </View>
        </View>
    );
}