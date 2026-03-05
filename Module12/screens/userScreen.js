import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UserScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.username}>@{item.username}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
      <Text style={styles.website}>{item.website}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users</Text>
      <FlatList
        data={users}
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2e7d32',
  },
  username: {
    fontSize: 16,
    color: '#558b2f',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    marginBottom: 5,
    color: '#1b5e20',
  },
  phone: {
    fontSize: 14,
    marginBottom: 5,
    color: '#1b5e20',
  },
  website: {
    fontSize: 14,
    color: '#1b5e20',
  },
});

export default UserScreen;