import React from "react";  
import { View, Text, StyleSheet } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails 
                name = "Ana" 
                description = "Ana is a diligent student who excels in mathematics and science. She is always eager to learn new things and participates actively in class discussions"
                image = {require('../assets/imgs.png')}
            />
            <StudentDetails 
                name = "John" 
                description = "John is a creative student who loves art and music. He is known for his imaginative ideas and his ability to think outside the box."
                image = {require('../assets/imgs.png')}
            />
            <StudentDetails 
                name = "Maria" 
                description = "Maria is a hardworking student who is passionate about literature and writing. She has a great talent for storytelling and often helps her classmates with their writing assignments." 
                image = {require('../assets/imgs.png')}
            />
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