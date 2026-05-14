import React, { useState } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	SafeAreaView,
	ActivityIndicator,
	StyleSheet,
	Image,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useFavorites } from '../hooks/useFavorites';

const FavoritesScreen = ({ navigation }) => {
	const { favorites, loading, isFavorite, toggle } = useFavorites();
	const [refreshing, setRefreshing] = useState(false);

	useFocusEffect(
		React.useCallback(() => {
			// Refetch on focus
		}, [])
	);

	const favoritesList = Object.values(favorites);

	const handleMealPress = (meal) => {
		navigation.navigate('Details', { id: meal.idMeal });
	};

	const handleRefresh = () => {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 500);
	};

	if (loading) {
		return (
			<SafeAreaView style={styles.container}>
				<ActivityIndicator size="large" color="#FF1493" style={{ marginTop: 50 }} />
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>❤️ My Favorites</Text>
				<Text style={styles.subtitle}>
					{favoritesList.length} {favoritesList.length === 1 ? 'meal' : 'meals'} saved
				</Text>
			</View>

			{favoritesList.length === 0 ? (
				<View style={styles.emptyContainer}>
					<Text style={styles.emptyEmoji}>🍽️</Text>
					<Text style={styles.emptyTitle}>No Favorites Yet</Text>
					<Text style={styles.emptySubtitle}>
						Explore recipes and add your favorites!
					</Text>
					<TouchableOpacity
						style={styles.exploreButton}
						onPress={() => navigation.navigate('Home')}
					>
						<Text style={styles.exploreText}>Explore Recipes</Text>
					</TouchableOpacity>
				</View>
			) : (
				<FlatList
					data={favoritesList}
					keyExtractor={(item) => item.idMeal}
					renderItem={({ item }) => (
						<TouchableOpacity style={styles.card} onPress={() => handleMealPress(item)}>
							<Image
								source={{ uri: item.strMealThumb }}
								style={styles.image}
							/>
							<View style={styles.info}>
								<Text style={styles.mealName} numberOfLines={2}>
									{item.strMeal}
								</Text>
								<View style={styles.tags}>
									<Text style={styles.tag}>{item.strCategory}</Text>
									<Text style={styles.tag}>{item.strArea}</Text>
								</View>
							</View>
							<TouchableOpacity
								style={styles.removeBtn}
								onPress={() => toggle(item)}
							>
								<Text style={styles.removeIcon}>✕</Text>
							</TouchableOpacity>
						</TouchableOpacity>
					)}
					contentContainerStyle={styles.listContent}
					refreshing={refreshing}
					onRefresh={handleRefresh}
					showsVerticalScrollIndicator={false}
				/>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0A0A0A',
	},
	header: {
		padding: 20,
		backgroundColor: '#FF1493',
	},
	title: {
		fontSize: 32,
		fontWeight: '700',
		color: '#FFF',
	},
	subtitle: {
		fontSize: 14,
		color: '#FFE5F0',
		marginTop: 4,
	},
	listContent: {
		padding: 12,
		paddingBottom: 20,
	},
	card: {
		flexDirection: 'row',
		backgroundColor: '#1A1A1A',
		borderRadius: 12,
		overflow: 'hidden',
		marginBottom: 12,
		elevation: 3,
		minHeight: 110,
	},
	image: {
		width: 100,
		height: 100,
	},
	info: {
		flex: 1,
		justifyContent: 'center',
		padding: 12,
	},
	mealName: {
		fontSize: 16,
		fontWeight: '600',
		color: '#FFF',
		marginBottom: 8,
	},
	tags: {
		flexDirection: 'row',
		gap: 8,
	},
	tag: {
		fontSize: 11,
		color: '#FFE5F0',
		backgroundColor: '#FF1493',
		paddingHorizontal: 8,
		paddingVertical: 3,
		borderRadius: 4,
	},
	removeBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 12,
		paddingVertical: 8,
	},
	removeIcon: {
		fontSize: 20,
		color: '#FF1493',
		fontWeight: 'bold',
	},
	emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	emptyEmoji: {
		fontSize: 60,
		marginBottom: 16,
	},
	emptyTitle: {
		fontSize: 24,
		fontWeight: '700',
		color: '#FFF',
		marginBottom: 8,
	},
	emptySubtitle: {
		fontSize: 14,
		color: '#666',
		textAlign: 'center',
		marginBottom: 24,
	},
	exploreButton: {
		backgroundColor: '#FF1493',
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
	},
	exploreText: {
		color: '#FFF',
		fontWeight: '600',
		fontSize: 14,
	},
});

export default FavoritesScreen;
