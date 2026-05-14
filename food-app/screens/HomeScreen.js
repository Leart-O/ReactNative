import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, SectionList } from 'react-native';
import { useMealsHome, useSearch } from '../hooks/useMeals';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import LoadingSkeleton from '../components/LoadingSkeleton';

const HomeScreen = ({ navigation }) => {
  const { featured, categories, trending, loading, refresh } = useMealsHome();
  const { results, loading: sLoading, search } = useSearch();

  const onOpen = (meal) => navigation.navigate('Details', { id: meal.idMeal });

  const sections = [
    {
      title: '⭐ Featured Meals',
      data: featured.filter(Boolean),
      highlighted: true,
    },
    {
      title: '🔥 Trending Now',
      data: trending,
      highlighted: false,
    },
  ];

  const ContentData = results.length > 0 ? [{ title: '🔍 Search Results', data: results, highlighted: false }] : sections;

  const renderSection = ({ section: { title, highlighted } }) => (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, highlighted && styles.highlightedTitle]}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>🍽️ Food Recipes</Text>
        <Text style={styles.subtitle}>Discover delicious meals</Text>
      </View>

      <View style={styles.searchWrap}>
        <SearchBar onSearch={search} />
      </View>

      {loading && !results.length ? (
        <View style={{ padding: 16 }}>
          <LoadingSkeleton />
          <LoadingSkeleton />
        </View>
      ) : (
        <SectionList
          sections={ContentData}
          keyExtractor={(item, index) => item.idMeal + index}
          renderItem={({ item }) => (
            <RecipeCard meal={item} onPress={() => onOpen(item)} />
          )}
          renderSectionHeader={renderSection}
          contentContainerStyle={styles.list}
          onRefresh={refresh}
          refreshing={loading}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0A0A0A' },
  header: { 
    padding: 20, 
    paddingTop: 12, 
    paddingBottom: 12,
    backgroundColor: '#1A1A1A',
    borderBottomWidth: 1,
    borderBottomColor: '#222'
  },
  title: { 
    color: '#FFF', 
    fontSize: 32, 
    fontWeight: '700',
    marginBottom: 4
  },
  subtitle: {
    color: '#999',
    fontSize: 14
  },
  searchWrap: { 
    paddingHorizontal: 16, 
    marginVertical: 12,
    paddingBottom: 8
  },
  list: { 
    padding: 16, 
    paddingBottom: 40 
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  highlightedTitle: {
    color: '#FF6F61',
    fontSize: 20,
  }
});

export default HomeScreen;
