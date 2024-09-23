import React from  "react"
import { TextInput, View } from "react-native"

export default function ResultImc(props){
    return(
        <View>
          <Text>{props.resultImc}</Text> 
          <Text>{props.messageResultImc}</Text> 
        </View>
    );
}