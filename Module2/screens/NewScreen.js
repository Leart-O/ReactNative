import React from "react";
import { Text, StyleSheet, View } from 'react-native';


const NewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        This is the new screen
      </Text>
      <Text style={styles.subText}>
        Welcome here!
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
});


export default NewScreen;
