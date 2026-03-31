import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const SettingsScreen = () => { 
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="cog" size={64} color={'#007aff'} />
            <Text style={styles.name}>Settings</Text>
            <Text style={styles.email}>Manage your preferences</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    name: {
        marginTop: 12,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {    
        marginTop: 4,
        fontSize: 16,
        color: '#666',
    }
});

export default SettingsScreen;