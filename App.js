import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListadoAnimales from './components/listadoAnimales';

export default function App() {
  return (
    <View style={styles.container}>
      <ListadoAnimales />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5EEE7',
  },
});
