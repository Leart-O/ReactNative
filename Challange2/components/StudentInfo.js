import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const StudentInfo = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.description}>{props.description}</Text>
                <Text style={styles.position}>{props.position}</Text>
            </View>
            <View style={styles.imageWrapper}>
                {props.image ? (
                    <Image source={props.image} style={styles.image} />
                ) : (
                    <Text style={styles.placeholderText}>Photo</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center'
    },
    infoWrapper: {
        flex: 1,
        marginRight: 15
    },  
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5
    },
    position: {
        fontSize: 14,
        color: '#888'  
    },
    imageWrapper: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: 'hidden',
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80
    },
    placeholderText: {
        fontSize: 14,
        color: '#999',
        fontWeight: 'bold'
    }
});

export default StudentInfo;