import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="account" size={64} color={'#007aff'} />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>j@gmail.com</Text>
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

export default ProfileScreen;