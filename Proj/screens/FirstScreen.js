import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FirstScreen = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome to the First Screen!</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => props.navigation.navigate('Pamja2')}>
          <Text style={styles.buttonText}>Go to Second Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => props.navigation.navigate('Pamja3')}>
          <Text style={styles.buttonText}>Go to Third Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'purple' }]} onPress={() => props.navigation.navigate('Pamja4')}>
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
export default FirstScreen;