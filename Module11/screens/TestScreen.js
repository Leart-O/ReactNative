import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestScreen = () => {
 return (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 <Text style={styles.text}>Test Screen</Text>
 </View>
 ); 

}

const styles = StyleSheet.create({
 text: {
 fontSize: 30,

 },
});
export default TestScreen;
