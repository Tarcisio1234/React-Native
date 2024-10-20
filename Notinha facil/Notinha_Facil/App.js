import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native'; 
import MainInicio from './src/components/MainInicio';
import DadosCliente from './src/components/DadosCliente/index';
import AnotarPedido1 from './src/components/AnotarPedidos1/index';
import AnotarPedido_2 from './src/components/AnotarPedidos2/index';
import AnotarPedido_3 from './src/components/AnotarPedidos3/index';
import AnotarPedido_4 from './src/components/AnotarPedidos4/index';
import AnotarPedido_5 from './src/components/AnotarPedidos5/index';
import AnotarPedido_6 from './src/components/AnotarPedidos6/index';
import AnotarPedido_7 from './src/components/AnotarPedidos7/index';

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
        <Stack.Screen name="AnotarPedido_3" component={AnotarPedido_3}/> 
        <Stack.Screen name="AnotarPedido_4" component={AnotarPedido_4}/> 
        <Stack.Screen name="AnotarPedido_5" component={AnotarPedido_5}/> 
        <Stack.Screen name="AnotarPedido_6" component={AnotarPedido_6}/> 
        <Stack.Screen name="AnotarPedido_7" component={AnotarPedido_7}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



