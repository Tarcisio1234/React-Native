import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native'; 
import MainInicio from './src/components/MainInicio';
import DadosCliente from './src/components/DadosCliente/index';
import AnotarPedido1 from './src/components/AnotarPedidos1/index';
import AnotarPedido_2 from './src/components/AnotarPedidos2/index'

// Criando o Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Home" component={MainInicio}/> 
        <Stack.Screen name="DadosCliente" component={DadosCliente}/> 
        <Stack.Screen name="AnotarPedido1" component={AnotarPedido1}/> 
        <Stack.Screen name="AnotarPedido_2" component={AnotarPedido_2}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



