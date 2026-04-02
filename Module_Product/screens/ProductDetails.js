import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import data from "../data/data.json";

const ProductDetails = () => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={data}
                keyExtractor={(item) => (item.id ? item.id.toString() : item.name)}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Image source={{ uri: item.image }} style={styles.img} />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.category}>{item.category}</Text>
                            <Text style={styles.desc}>{item.description}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: { flex: 1, padding: 14, backgroundColor: '#f2f4f7' },
    cardContainer: {
        width: "100%",
        minHeight: 150,
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    img: {
        width: 100,
        height: "90%",
        borderRadius: 10,
        marginTop: 10,
    },
    textContainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
        width: "60%",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    category: {
        fontSize: 14,
        color: "#22D4FF",
    },
    desc: {
        fontStyle: "italic",
    },
    price: {
        fontWeight: "bold",
        marginTop: 10,
        backgroundColor: "#384053",
        color: "#fff",
        borderRadius: 100,
        paddingHorizontal: 5,
        width: 45,
        textAlign: 'center',
    }
});

export default ProductDetails;
