import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import BackButton from '../components/BackButton';
import { lookupMeal } from '../api/meals';
import { useFavorites } from '../hooks/useFavorites';

function parseIngredients(meal) {
  const items = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const mea = meal[`strMeasure${i}`];
    if (ing && ing.trim()) items.push({ ingredient: ing, measure: mea || '' });
  }
  return items;
}

const DetailsScreen = ({ route, navigation }) => {
  const { id } = route.params || {};
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toggle, isFavorite } = useFavorites();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    lookupMeal(id).then((m) => {
      if (mounted) setMeal(m);
    }).catch((e) => setError(String(e))).finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [id]);

  if (loading) return <View style={[styles.center, { flex: 1 }]}><ActivityIndicator size="large" color="#FF6F61"/></View>;
  if (!meal) return <View style={styles.center}><Text style={{ color: '#fff' }}>Meal not found</Text></View>;

  const ingredients = parseIngredients(meal);

  const onOpenYoutube = () => {
    if (meal.strYoutube) Linking.openURL(meal.strYoutube);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.hero} />
      <View style={styles.backWrap}>
        <BackButton onPress={() => navigation.goBack()} />
        <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.homeBtn}>
          <Text style={styles.homeBtnText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>{meal.strMeal}</Text>
        <TouchableOpacity onPress={() => toggle(meal)} style={styles.favBtn}>
          <Text style={{ color: '#fff' }}>{isFavorite(meal.idMeal) ? '★' : '☆'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.tag}>{meal.strCategory}</Text>
        <Text style={styles.tag}>{meal.strArea}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {ingredients.map((it, ix) => (
          <View key={ix} style={styles.ingredientRow}>
            <Text style={styles.ingredient}>{it.ingredient}</Text>
            <Text style={styles.measure}>{it.measure}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.instructions}>{meal.strInstructions}</Text>
      </View>

      {meal.strYoutube ? (
        <TouchableOpacity style={styles.youtube} onPress={onOpenYoutube}>
          <Text style={styles.youtubeText}>Watch on YouTube</Text>
        </TouchableOpacity>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0A0A' },
  backWrap: { position: 'absolute', top: 42, left: 12, zIndex: 30, flexDirection: 'row', alignItems: 'center' },
  homeBtn: {
    marginLeft: 8,
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' },
  center: { justifyContent: 'center', alignItems: 'center' },
  hero: { width: '100%', height: 300 },
  heading: { color: '#fff', fontSize: 24, fontWeight: '700', flex: 1 },
  headerRow: { flexDirection: 'row', padding: 16, alignItems: 'center' },
  favBtn: { padding: 10, borderRadius: 10, backgroundColor: '#FF6F61' },
  metaRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 8 },
  tag: { color: '#ddd', padding: 6, backgroundColor: '#111', marginRight: 8, borderRadius: 8 },
  section: { padding: 16 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 8 },
  ingredientRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomColor: '#111', borderBottomWidth: 1 },
  ingredient: { color: '#fff' },
  measure: { color: '#bbb' },
  instructions: { color: '#ddd', lineHeight: 20 },
  youtube: { margin: 16, padding: 14, backgroundColor: '#c4302b', borderRadius: 12, alignItems: 'center' },
  youtubeText: { color: '#fff', fontWeight: '700' }
});

export default DetailsScreen;
