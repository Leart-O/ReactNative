import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Swiper from 'react-native-swiper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.navbar}>Home</Text>

      <View style={styles.slider}>
        <Swiper autoplay>
          <View style={styles.slide}><Text>Slide 1</Text></View>
          <View style={styles.slide}><Text>Slide 2</Text></View>
          <View style={styles.slide}><Text>Slide 3</Text></View>
        </Swiper>
      </View>

      <Button title="Users" onPress={() => navigation.navigate('Users')} />
      <Button title="Posts" onPress={() => navigation.navigate('Posts')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  navbar: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  slider: { height: 150, marginBottom: 20 },
  slide: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd' }
});