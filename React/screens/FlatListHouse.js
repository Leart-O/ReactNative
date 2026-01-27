import React from "react";
import {View, Text, FlatList} from "react-native";

const Houses = [
    {house: "Shadows", color: "Blue", members: 25},
    {house: "Speedsters", color: "Red", members: 30},
    {house: "Engineers", color: "Green", members: 20},
    {house: "Hipsters", color: "Purple", members: 15},
];  

const HouseColor = {
    "Blue": "#1E90FF",
    "Red": "#FF4444",
    "Green": "#32CD32",
    "Purple": "#9370DB"
};

const styles = {
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    item: {
        padding: 15,
    },
    text: {
        fontSize: 16,
    }
};

const FlatListHouse = () => {
    return (
        <View style={styles.container}>
            <Text>List of Houses</Text>
            <FlatList
                data={Houses}
                renderItem={({item}) => (
                    <View style={[styles.item, {borderLeftColor: HouseColor[item.color]}]}>
                        <Text style={[styles.text, {color: HouseColor[item.color]}]}>
                            {item.house}
                        </Text>
                        <Text style={{fontSize: 14, color: '#666'}}>
                            {item.color} : {item.members} members
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

export default FlatListHouse;