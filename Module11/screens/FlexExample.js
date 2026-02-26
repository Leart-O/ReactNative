import React from "react";
import { View, StyleSheet } from "react-native";

const FlexExample = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.square, { backgroundColor: 'red' }]} />
            <View style={[styles.square, { backgroundColor: 'green' }]} />
            <View style={[styles.square, { backgroundColor: 'blue' }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    square: {
        width: 40,
        height: 40,
        marginRight: 10,
    }
});

export default FlexExample;