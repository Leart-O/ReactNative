import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class PostScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            post: []
        }
    }
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.setState({ post: jsonData });
    }

    render() {
        const { posts } = this.state;
        return (
            <View>
                <Text>Posts</Text>
                <FlatList
                    keyExtractor={item => item.id}
                    data={posts} renderItem={({ item }) => (
                        <View>
                            <Text>{item.id}</Text>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                ></FlatList>
            </View>
        );
    }
}

export default PostScreen;