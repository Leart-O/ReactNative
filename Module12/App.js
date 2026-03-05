import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PostsScreen from './screens/postsScreen';
import CommentsScreen from './screens/commentsScreen';
import AlbumsScreen from './screens/albumsScreen';
import PhotosScreen from './screens/photosScreen';
import UserScreen from './screens/userScreen';
import TodosScreen from './screens/todosScreen';
import { useState } from 'react';

const screens = [PostsScreen, CommentsScreen, AlbumsScreen, PhotosScreen, UserScreen, TodosScreen];
const screenNames = ['Posts', 'Comments', 'Albums', 'Photos', 'Users', 'Todos'];

export default function App() {
  const [index, setIndex] = useState(2); 

  const next = () => setIndex((index + 1) % screens.length);
  const prev = () => setIndex((index - 1 + screens.length) % screens.length);

  const CurrentScreen = screens[index];

  return (
    <View style={styles.container}>
      <CurrentScreen />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={prev}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.screenName}>{screenNames[index]}</Text>
        <TouchableOpacity style={styles.button} onPress={next}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e8',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  screenName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388e3c',
  },
});
