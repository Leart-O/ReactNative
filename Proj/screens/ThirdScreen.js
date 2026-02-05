import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ThirdScreen = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Third Screen!</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'purple' }]} onPress={() => props.navigation.navigate('Pamja1')}>
          <Text style={styles.buttonText}>Go back to First Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => props.navigation.navigate('Pamja2')}>
          <Text style={styles.buttonText}>Go to Second Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={() => props.navigation.navigate('Pamja4')}>
          <Text style={styles.buttonText}>Go to Fourth Screen</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    },
    text: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    },
    button: {
      marginTop: 12,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
    },
});
export default ThirdScreen;