import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native'; 
import MainInicio from './src/components/MainInicio';
import AnotarPedido from './src/components/AnotarPedido1/index';

// Criando o Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen name="Home" component={MainInicio}/> 
        <Stack.Screen name="Inicio" component={AnotarPedido}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



