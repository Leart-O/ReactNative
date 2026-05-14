import React, { useState } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
	StyleSheet,
	Image,
	SafeAreaView,
} from 'react-native';
import { useCategories, useFilterByCategory } from '../hooks/useMeals';

const CategoryScreen = ({ navigation }) => {
	const { categories, loading: catsLoading } = useCategories();
	const { meals, loading: mealsLoading, filter } = useFilterByCategory();
	const [selectedCategory, setSelectedCategory] = useState(null);

	const handleCategorySelect = async (category) => {
		setSelectedCategory(category.strCategory);
		await filter(category.strCategory);
	};

	const handleMealPress = (meal) => {
		navigation.navigate('Details', { id: meal.idMeal });
	};

	if (catsLoading) {
		return (
			<SafeAreaView style={styles.container}>
				<ActivityIndicator size="large" color="#FF6F61" style={{ marginTop: 50 }} />
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>🍴 Categories</Text>
				<Text style={styles.subtitle}>Explore by cuisine type</Text>
			</View>

			{!selectedCategory ? (
				<FlatList
					data={categories}
					keyExtractor={(item) => item.idCategory}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.categoryCard}
							onPress={() => handleCategorySelect(item)}
						>
							<Image
								source={{ uri: item.strCategoryThumb }}
								style={styles.categoryImage}
							/>
							<View style={styles.categoryOverlay} />
							<Text style={styles.categoryName}>{item.strCategory}</Text>
							<Text style={styles.categoryCount}>(Browse)</Text>
						</TouchableOpacity>
					)}
					numColumns={2}
					columnWrapperStyle={styles.columnWrapper}
					contentContainerStyle={styles.listContent}
					showsVerticalScrollIndicator={false}
				/>
			) : (
				<View style={styles.mealList}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => setSelectedCategory(null)}
					>
						<Text style={styles.backIcon}>‹ Back</Text>
					</TouchableOpacity>
					<Text style={styles.categoryTitle}>{selectedCategory} Meals</Text>

					{mealsLoading ? (
						<ActivityIndicator size="large" color="#FF6F61" />
					) : (
						<FlatList
							data={meals}
							keyExtractor={(item) => item.idMeal}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={styles.mealCard}
									onPress={() => handleMealPress(item)}
								>
									<Image
										source={{ uri: item.strMealThumb }}
										style={styles.mealImage}
									/>
									<View style={styles.mealInfo}>
										<Text style={styles.mealName} numberOfLines={2}>
											{item.strMeal}
										</Text>
									</View>
								</TouchableOpacity>
							)}
							contentContainerStyle={styles.mealListContent}
							showsVerticalScrollIndicator={false}
						/>
					)}
				</View>
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
		backgroundColor: '#FF6F61',
	},
	title: {
		fontSize: 32,
		fontWeight: '700',
		color: '#FFF',
	},
	subtitle: {
		fontSize: 14,
		color: '#FFE5E0',
		marginTop: 4,
	},
	columnWrapper: {
		justifyContent: 'space-between',
		paddingHorizontal: 8,
	},
	listContent: {
		padding: 12,
	},
	categoryCard: {
		flex: 1,
		height: 180,
		borderRadius: 12,
		overflow: 'hidden',
		marginBottom: 12,
		marginHorizontal: 4,
	},
	categoryImage: {
		width: '100%',
		height: '100%',
	},
	categoryOverlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
	categoryName: {
		position: 'absolute',
		bottom: 12,
		left: 12,
		right: 12,
		fontSize: 16,
		fontWeight: '700',
		color: '#FFF',
	},
	categoryCount: {
		position: 'absolute',
		bottom: 0,
		left: 12,
		fontSize: 12,
		color: '#FFE5E0',
	},
	mealList: {
		flex: 1,
		paddingHorizontal: 12,
	},
	backButton: {
		paddingVertical: 12,
		paddingHorizontal: 12,
		marginTop: 8,
		backgroundColor: '#222',
		borderRadius: 8,
		alignSelf: 'flex-start',
	},
	backIcon: {
		fontSize: 16,
		color: '#FF6F61',
		fontWeight: '600',
	},
	categoryTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: '#FFF',
		marginTop: 12,
		marginBottom: 12,
	},
	mealListContent: {
		paddingBottom: 20,
	},
	mealCard: {
		flexDirection: 'row',
		backgroundColor: '#1A1A1A',
		borderRadius: 10,
		overflow: 'hidden',
		marginBottom: 10,
		elevation: 3,
	},
	mealImage: {
		width: 100,
		height: 100,
	},
	mealInfo: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 12,
		paddingVertical: 8,
	},
	mealName: {
		fontSize: 15,
		fontWeight: '600',
		color: '#FFF',
	},
});

export default CategoryScreen;
