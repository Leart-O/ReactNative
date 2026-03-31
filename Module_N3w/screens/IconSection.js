import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const IconSection = ({ name, label }) => (
    <View style={styles.container}>
        <MaterialCommunityIcons name={name} size={32} color={'#007aff'} />
        <Text style={styles.label}>{label}</Text>
    </View>
);



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 12,
    },
    label: {
        marginTop: 6,
        fontSize: 14,
        color: '#333',
    }
});

export default IconSection;