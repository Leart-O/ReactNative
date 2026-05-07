import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useMealsHome, useSearch } from '../hooks/useMeals';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import LoadingSkeleton from '../components/LoadingSkeleton';
import BackButton from '../components/BackButton';

const HomeScreen = ({ navigation }) => {
  const { featured, categories, trending, loading, refresh } = useMealsHome();
  const { results, loading: sLoading, search } = useSearch();

  const onOpen = (meal) => navigation.navigate('Details', { id: meal.idMeal });

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        {navigation.canGoBack() ? (
          <BackButton onPress={() => navigation.goBack()} style={{ marginRight: 12 }} />
        ) : null}
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text style={styles.title}>Deluxe Recipes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchWrap}>
        <SearchBar onSearch={search} />
      </View>

      {loading ? (
        <View style={{ padding: 16 }}>
          <LoadingSkeleton />
          <LoadingSkeleton />
        </View>
      ) : (
        <FlatList
          data={sLoading ? [] : (results.length ? results : featured.concat(trending))}
          keyExtractor={(i) => i.idMeal}
          renderItem={({ item }) => (
            <RecipeCard meal={item} onPress={() => onOpen(item)} />
          )}
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
  header: { padding: 20, paddingTop: 28, flexDirection: 'row', alignItems: 'center' },
  title: { color: '#fff', fontSize: 32, fontWeight: '700' },
  searchWrap: { paddingHorizontal: 16, marginTop: 6 },
  list: { padding: 16, paddingBottom: 40 }
});

export default HomeScreen;
