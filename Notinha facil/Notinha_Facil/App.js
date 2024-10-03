import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainInicio from './src/components/MainInicio';

export default function App() {
  return (
    <View style={styles.container}>
      <MainInicio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F3E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
