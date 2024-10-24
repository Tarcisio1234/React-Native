import { createStackNavigator } from '@react-navigation/stack'; 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 
import MainInicio from './src/components/MainInicio';
import DadosCliente from './src/components/DadosCliente/index';
import AnotarPedido1 from './src/components/AnotarPedidos1/index';
import Carrinho from './src/components/Carrinho/index';
// Criando o Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Home" component={MainInicio}/> 
        <Stack.Screen name="DadosCliente" component={DadosCliente}/> 
        <Stack.Screen name="AnotarPedido1" component={AnotarPedido1}/> 
        <Stack.Screen name="Carrinho" component={Carrinho}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



