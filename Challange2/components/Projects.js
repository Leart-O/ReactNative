import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Projects = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                {props.image ? (
                    <Image source={props.image} style={styles.image} />
                ) : (
                    <Text style={styles.placeholderText}>Project</Text>
                )}
            </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',    
        padding: 20,
        alignItems: 'center'
    },
    imageWrapper: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20
    },
    image: {
        width: 150,
        height: 150
    },
    placeholderText: {
        fontSize: 16,
        color: '#999',
        fontWeight: 'bold'
    }
});

export default Projects;