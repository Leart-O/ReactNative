import React from "react";  
import { View, Text, StyleSheet } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails name = "Ana" />
            <StudentDetails name = "John" />
            <StudentDetails name = "Maria" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20
    }
}); 
export default StudentsScreen;