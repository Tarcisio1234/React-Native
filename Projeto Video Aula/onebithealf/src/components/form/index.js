import React, {useState} from  "react"
import { Text,TextInput, View, TouchableOpacity } from "react-native"
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
            <View style= {styles.form}>
                <Text style= {styles.formLabel}>Altura</Text>
                <TextInput style= {styles.input}
                onChangeText={setAltura}
                value={altura}
                placeholder="EX. 1.78"
                keyboardType="numeric"
                />

                <Text style= {styles.formLabel}>Peso</Text>
                <TextInput style= {styles.input}
                onChangeText={setPeso}
                placeholder="EX. 70"
                keyboardType="numeric"
                value={peso}
                />
                <TouchableOpacity onPress={() => valiationImc()} style={styles.bottomCalculator}><Text style={styles.textBottonCalculator}>{textButton}</Text></TouchableOpacity>
            </View>
            
            <View>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
            </View>
        </View>
    );
}