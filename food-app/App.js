//App.js
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const colorScheme = useColorScheme();

  return (
	<NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
	  <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
	  <Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Home" component={HomeScreen} />
		<Stack.Screen name="Details" component={DetailsScreen} />
	  </Stack.Navigator>
	</NavigationContainer>
  );
};

export default App;