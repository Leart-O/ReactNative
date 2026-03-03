import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

class AlbumsScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            albums: [],  
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/photos");
            const jsonData = await res.json();
            this.setState({ albums: jsonData });
        } catch (error) {
            console.log("Fetch error: ", error);
        }

    }

    render() {
        const { albums } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Albums</Text>
                <FlatList
                    data={albums}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item.id}</Text>
                            <Text>{item.title}</Text>
                            <Text>{item.url}</Text>
                            <Text>{item.thumbnailUrl}</Text>
                        </View>
                    )}
                />
                </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },  
    item: {
        paddingVertical: 10,
        borderBottomWidth: 1,   
        borderBottomColor: '#ccc',
    },
});
export default AlbumsScreen;