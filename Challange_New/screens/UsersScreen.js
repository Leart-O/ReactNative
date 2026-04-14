import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function UsersScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(res => setUsers(res.data.users))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.navbar}>Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Image source={{ uri: item.image }} style={styles.img} />
            <Text>{item.firstName} {item.lastName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  navbar: { fontSize: 22, fontWeight: 'bold' },
  card: { flexDirection: 'row', padding: 10, borderWidth: 1, marginBottom: 10 },
  img: { width: 50, height: 50, marginRight: 10 }
});