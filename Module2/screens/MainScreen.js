import React from "react";
import { Text, StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        This is the main Text
      </Text>

        <Button 
          title="Go to New Screen"
          onPress={() => navigation.navigate('new')}
        />
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
  },
  buttonContainer: {
    marginTop: 20,
  },
});


export default MainScreen;


