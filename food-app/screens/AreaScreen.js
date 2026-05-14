import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import { filterByArea } from '../api/meals';
import { useFilterByArea } from '../hooks/useMeals';

const AreaScreen = ({ navigation }) => {
	const [areas, setAreas] = useState([]);
	const [areasLoading, setAreasLoading] = useState(true);
	const { meals, loading: mealsLoading, filter } = useFilterByArea();
	const [selectedArea, setSelectedArea] = useState(null);

	useEffect(() => {
		const loadAreas = async () => {
			try {
				const response = await fetch(
					'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
				);
				const data = await response.json();
				setAreas(data.meals || []);
			} catch (error) {
				console.error('Error loading areas:', error);
			} finally {
				setAreasLoading(false);
			}
		};
		loadAreas();
	}, []);

	const handleAreaSelect = async (area) => {
		setSelectedArea(area.strArea);
		await filter(area.strArea);
	};

	const handleMealPress = (meal) => {
		navigation.navigate('Details', { id: meal.idMeal });
	};

	if (areasLoading) {
		return (
			<SafeAreaView style={styles.container}>
				<ActivityIndicator size="large" color="#FF6F61" style={{ marginTop: 50 }} />
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>🌍 Cuisines</Text>
				<Text style={styles.subtitle}>Explore cuisines by region</Text>
			</View>

			{!selectedArea ? (
				<FlatList
					data={areas}
					keyExtractor={(item) => item.strArea}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.areaCard}
							onPress={() => handleAreaSelect(item)}
						>
							<View style={styles.areaEmoji}>
								<Text style={styles.areaEmojiText}>
									{getEmojiByArea(item.strArea)}
								</Text>
							</View>
							<View style={styles.areaContent}>
								<Text style={styles.areaName}>{item.strArea}</Text>
								<Text style={styles.areaSubtitle}>Tap to explore</Text>
							</View>
							<Text style={styles.arrow}>›</Text>
						</TouchableOpacity>
					)}
					contentContainerStyle={styles.listContent}
					showsVerticalScrollIndicator={false}
				/>
			) : (
				<View style={styles.mealList}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => setSelectedArea(null)}
					>
						<Text style={styles.backIcon}>‹ Back</Text>
					</TouchableOpacity>
					<Text style={styles.areaTitle}>{selectedArea} Cuisine</Text>

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
									<View style={styles.mealThumb}>
										<Text style={styles.mealIndex}>
											{meals.indexOf(item) + 1}
										</Text>
									</View>
									<View style={styles.mealInfo}>
										<Text style={styles.mealName} numberOfLines={2}>
											{item.strMeal}
										</Text>
									</View>
									<Text style={styles.mealArrow}>›</Text>
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

const getEmojiByArea = (area) => {
	const emojiMap = {
		Italian: '🇮🇹',
		Indian: '🇮🇳',
		Mexican: '🇲🇽',
		Japanese: '🇯🇵',
		Chinese: '🇨🇳',
		American: '🇺🇸',
		British: '🇬🇧',
		French: '🇫🇷',
		Spanish: '🇪🇸',
		Thai: '🇹🇭',
		Greek: '🇬🇷',
		Turkish: '🇹🇷',
		Canadian: '🇨🇦',
		Philippine: '🇵🇭',
		Malaysian: '🇲🇾',
		Vietnamese: '🇻🇳',
		Portuguese: '🇵🇹',
		Irish: '🇮🇪',
		Jamaican: '🇯🇲',
		Brazilian: '🇧🇷',
		Russian: '🇷🇺',
		Polish: '🇵🇱',
		Croatian: '🇭🇷',
		Korean: '🇰🇷',
		Moroccan: '🇲🇦',
		Egyptian: '🇪🇬',
		Ukrainian: '🇺🇦',
		Dutch: '🇳🇱',
		Norwegian: '🇳🇴',
		Tunisian: '🇹🇳',
		Unknown: '🍽️',
	};
	return emojiMap[area] || '🍽️';
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0A0A0A',
	},
	header: {
		padding: 20,
		backgroundColor: '#32CD32',
	},
	title: {
		fontSize: 32,
		fontWeight: '700',
		color: '#FFF',
	},
	subtitle: {
		fontSize: 14,
		color: '#E0FFD0',
		marginTop: 4,
	},
	listContent: {
		padding: 12,
		paddingBottom: 20,
	},
	areaCard: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#1A1A1A',
		borderRadius: 12,
		padding: 14,
		marginBottom: 10,
		elevation: 2,
	},
	areaEmoji: {
		width: 50,
		height: 50,
		borderRadius: 10,
		backgroundColor: '#222',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 12,
	},
	areaEmojiText: {
		fontSize: 28,
	},
	areaContent: {
		flex: 1,
	},
	areaName: {
		fontSize: 16,
		fontWeight: '600',
		color: '#FFF',
	},
	areaSubtitle: {
		fontSize: 12,
		color: '#999',
		marginTop: 2,
	},
	arrow: {
		fontSize: 20,
		color: '#32CD32',
		marginLeft: 8,
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
		color: '#32CD32',
		fontWeight: '600',
	},
	areaTitle: {
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
		alignItems: 'center',
		backgroundColor: '#1A1A1A',
		borderRadius: 10,
		padding: 12,
		marginBottom: 10,
		elevation: 2,
	},
	mealThumb: {
		width: 50,
		height: 50,
		borderRadius: 8,
		backgroundColor: '#32CD32',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 12,
	},
	mealIndex: {
		fontSize: 18,
		fontWeight: '700',
		color: '#000',
	},
	mealInfo: {
		flex: 1,
	},
	mealName: {
		fontSize: 15,
		fontWeight: '600',
		color: '#FFF',
	},
	mealArrow: {
		fontSize: 20,
		color: '#32CD32',
		marginLeft: 8,
	},
});

export default AreaScreen;
