import React from "react";
import {Text, StyleSheet, View, Button} from 'react-native';
import { FlatList } from "react-native-web";

const people = [
    {name: "Leart", surname: "Obertinca", birthDate: "03.01.2009"},
    {name: "Olis", surname: "Jashari", birthDate: "23.10.2007"},
    {name: "Usame", surname: "Mjekiqi", birthDate: "21.05.2008"},
    {name: "Yll", surname: "Ahmeti", birthDate: "16.05.2009"}
];

const hobbies = [
    {hobby: "Football"},
    {hobby: "Tennis"},
    {hobby: "Reading"},
    {hobby: "Coding"}
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        padding: 12,        
    },
    label: {
        fontSize: 1  2,
        color: '#888',
        marginTop: 4,
    },
    value: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    }
});

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={people}
                renderItem={({item, index}) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.label}>First Name</Text>
                            <Text style={styles.value}>{item.name}</Text>
                            <Text style={styles.label}>Last Name</Text>
                            <Text style={styles.value}>{item.surname}</Text>
                            <Text style={styles.label}>Birth Date</Text>
                            <Text style={styles.value}>{item.birthDate}</Text>
                            <Text style={styles.label}>Hobby</Text>
                            <Text style={styles.value}>{hobbies[index].hobby}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export default MainScreen;
