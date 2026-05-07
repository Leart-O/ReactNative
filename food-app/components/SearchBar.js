import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch, placeholder = 'Search recipes...' }) => {
  const [text, setText] = useState('');

  const submit = () => {
    if (!text) return;
    onSearch(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#AAA"
        value={text}
        onChangeText={setText}
        style={styles.input}
        returnKeyType="search"
        onSubmitEditing={submit}
      />
      <Pressable onPress={submit} style={styles.button}>
        <Text style={styles.btnText}>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'transparent'
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginRight: 8,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#FF6F61',
    borderRadius: 10,
  },
  btnText: { color: '#fff', fontWeight: '600' }
});

export default SearchBar;
