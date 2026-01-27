import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from './screens/NewScreen';
import FlatListsExample from './screens/FlatListsExample';
import FlatListHouse from './screens/FlatListHouse';


 const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={MainScreen}></Stack.Screen>
        <Stack.Screen name='new' component={NewScreen}></Stack.Screen>
        <Stack.Screen name='FlatListsExample' component={FlatListsExample}></Stack.Screen>
        <Stack.Screen name='FlatListHouse' component={FlatListHouse}></Stack.Screen>
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


