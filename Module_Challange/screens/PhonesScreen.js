import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import phonesData from '../phones.json';

export default function PhonesScreen() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // Since it's local, we can set it directly
    setPhones(phonesData);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : (
        <Text>No image available</Text>
      )}
      <Text style={styles.name}>{item.name}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Stock: {item.stock}</Text>
      <Text>Description: {item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Phones</Text>
        </View>

        {phones.map((item) => (
          <View key={item.id.toString()} style={styles.item}>
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.image} />
            ) : (
              <Text>No image available</Text>
            )}
            <Text style={styles.name}>{item.name}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Stock: {item.stock}</Text>
            <Text>Description: {item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scroll: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});