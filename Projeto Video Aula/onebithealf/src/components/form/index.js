import React from  "react"
import { Text,TextInput, View, Button } from "react-native"
import ResultImc from "./ResultImc";

export default function Form(){
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="EX. 1.78"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    placeholder="EX. 70"
                    keyboardType="numeric"
                />
            </View>
            <Button title="Calcular IMC"></Button>
            <View>
                <ResultImc messageResultImc={messageImc} ResultImc={imc} />
            </View>
        </View>
    );
}