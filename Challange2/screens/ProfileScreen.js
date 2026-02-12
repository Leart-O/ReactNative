import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import StudentInfo from "../components/StudentInfo";
import Projects from "../components/Projects";

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
            <StudentInfo 
                name = "Ana" 
                description = "Ana is a diligent student who excels in mathematics and science. She is always eager to learn new things and participates actively in class discussions"
                position = "Student"
                image = {require('../assets/img.png')}
            />
            <Projects 
                image = {require('../assets/img2.png')}
            />
        </ScrollView>
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
export default ProfileScreen;