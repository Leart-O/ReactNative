import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class PostsScreen extends React.Component {
  constructor(){
    super();
    this.state = {
        posts: [],  
    }
  }

    async componentDidMount() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await res.json();
            this.setState({ posts: jsonData });
        } catch (error) {
            console.log("Fetch error: ", error);
        }

    }

    render() {
        const { posts } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Posts</Text>
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item.id}</Text>
                            <Text>{item.title}</Text>
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
export default PostsScreen;