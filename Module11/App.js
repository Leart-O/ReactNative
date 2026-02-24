import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BoxScreen from "./screens/BoxScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from './screens/MainScreen';
import TestScreen from './screens/TestScreen';
import ExersiseScreen from './screens/ExerciseScreen';
import MenuScreen from '../Day/screens/MenuScreen';

const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Box: BoxScreen,
    Test: TestScreen,
    Exercise: ExersiseScreen,
    Students: StudentsScreen,
    Profile: ProfileScreen,
    MenuScreen: MenuScreen
  }
);

const App = createAppContainer(navigator);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
