import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import FlexExample from './screens/FlexExample';
import Names from './screens/names';
import PostScreen from './screens/PostScreen';
export default function App() {
  return (
    <PostScreen />

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
