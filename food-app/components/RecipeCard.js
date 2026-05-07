import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Animated } from 'react-native';

const RecipeCard = ({ meal, onPress, style }) => {
  const scale = new Animated.Value(1);

  const onPressIn = () => Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
  const onPressOut = () => Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.card, style, { transform: [{ scale }] }]}> 
        {meal.strMealThumb ? (
          <Image source={{ uri: meal.strMealThumb }} style={styles.image} resizeMode="cover" />
        ) : null}
        <View style={styles.info}>
          <Text numberOfLines={2} style={styles.title}>{meal.strMeal}</Text>
          {meal.strCategory ? <Text style={styles.meta}>{meal.strCategory}</Text> : null}
        </View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#111',
    elevation: 3,
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.03)'
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  meta: {
    color: '#ddd',
    marginTop: 6,
  }
});

export default RecipeCard;
