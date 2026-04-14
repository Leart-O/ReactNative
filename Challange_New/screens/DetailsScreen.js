import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default function DetailsScreen({ route }) {
  const { id } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!user) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.img} />
      <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
      <Text>{user.email}</Text>
      <Text>{user.address.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  img: { width: 100, height: 100 },
  name: { fontSize: 20, fontWeight: 'bold' }
});