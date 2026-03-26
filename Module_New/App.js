import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import Products from './screens/Products';
import Slider from './screens/Slider';
export default function App() {
  return (
    <NavigationContainer>
      {/* <Products /> */}
      <Slider />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
