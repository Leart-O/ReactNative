import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PostsScreen from './screens/fetchdata';
import AlbumsScreen from './screens/newfetch';

export default function App() {
  return (
    <View style={styles.container}>
      <AlbumsScreen />
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
