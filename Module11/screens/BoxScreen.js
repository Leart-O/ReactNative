import React from "react";
import { View, Text, StyleSheet } from "react-native";

// const BoxScreen = () => {
//   return <Text>Box Screen</Text>
// };

// const styles = StyleSheet.create({});   

const BoxScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Box Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
});
export default BoxScreen;