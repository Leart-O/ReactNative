import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CommentsScreen = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Comments</Text>
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8f5e8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#388e3c',
  },
  item: {
    backgroundColor: '#f9fbe7',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 5,
    borderLeftColor: '#ff5722',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2e7d32',
  },
  email: {
    fontSize: 14,
    color: '#558b2f',
    marginBottom: 10,
  },
  body: {
    fontSize: 14,
    color: '#1b5e20',
  },
});

export default CommentsScreen;