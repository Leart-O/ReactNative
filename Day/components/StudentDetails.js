import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const StudentDetails = (props) => {
   
    return(
        
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.imgWrapper}>
                    <Image source={props.image} style={styles.img}/>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    cardWrapper: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 15,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3
    },
    imgWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        backgroundColor: '#e0e0e0'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    infoWrapper: {
        flex: 1,
        padding: 15,
        justifyContent: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
        color: '#333'
    }
});


export default StudentDetails;

