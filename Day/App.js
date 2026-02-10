import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from './screens/TestScreen';
import MenuScreen from './screens/MenuScreen';
import StudentsScreen from './screens/StudentsScreen';

const Stack = createStackNavigator();

export default function App() {
 return (
 <NavigationContainer>
 <Stack.Navigator >
 <Stack.Screen name='Menu' component={MenuScreen} ></Stack.Screen>
 <Stack.Screen name='Test' component={TestScreen} ></Stack.Screen>
 <Stack.Screen name='Students' component={StudentsScreen} ></Stack.Screen>
 </Stack.Navigator>
 
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