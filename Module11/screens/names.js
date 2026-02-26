import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import data from "../assets/data.json";

const names = () => {
    return (
        <View >
        <Text>Names</Text>
        <FlatList
            data={data}
            renderItem={({item})=>{
                return (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.bio}</Text>
                    </View>
                )
            }}></FlatList>
               </View> 
    );
}

export default names;