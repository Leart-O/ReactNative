//Food.js
// RecipeCard.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import Svg, { Path } from 'react-native-svg';
const Food = ({ recipe, onFavorite }) => {
	const openFood = () => {
		if (recipe.url) {
			Linking.openURL(recipe.url);
		}
	};
	const shareFood = () => {
		if (recipe.url) {
			Linking.openURL(
`mailto:?subject=Check%20out%20this%20recipe&body=${recipe.url}`);
		}
	};
	return (
		<View
			style={{ backgroundColor: '#FFF',
					borderRadius: 8,
					overflow: 'hidden',
					marginBottom: 16,
					shadowColor: '#000',
					shadowOffset: {
					width: 0,
					height: 2,},
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 5,}}>
			<View style={{ position: 'relative' }}>
				<Image style={{ width: '100%', 
								height: 200, 
								borderTopLeftRadius: 8, 
								borderTopRightRadius: 8 }}
					source={{ uri: recipe.image }}
					resizeMode="cover"/>
				<View style={{ position: 'absolute',
							top: 8,
							left: 8,
							backgroundColor: '#FF4081',
							paddingVertical: 4,
							paddingHorizontal: 8,
							borderRadius: 4,
							color: 'white',}}>
					<Text style={{ color: 'white' }}>
						{recipe.dishType[0]}
					</Text>
				</View>
			</View>
			<View style={{ padding: 16 }}>
				<Text style={{ fontSize: 22, 
							fontWeight: 'bold', 
							marginBottom: 8, 
							color: '#333' }}>
					{recipe.label}
				</Text>

				<View style={{ marginBottom: 8 }}>
					<Text style={{ fontWeight: 'bold', 
								color: '#757575' }}>
						Ingredients:
					</Text>
					{recipe.ingredientLines.map((ingredient, index) => (
						<Text key={index} style={{ paddingLeft: 16, 
												color: '#333' }}>
							{ingredient}
						</Text>
					))}
				</View>
				<View style={{ flexDirection: 'row', 
							justifyContent: 'space-between', 
							alignItems: 'center', 
							flexWrap: 'wrap',
							gap: 8 }}>
					<TouchableOpacity onPress={openFood} style={{ flex: 1, minWidth: '30%' }}>
						<View style={{ backgroundColor: '#FF4081',
									padding: 8,
									borderRadius: 8,
									alignItems: 'center',}}>
							<Text style={{ fontSize: 16 }}>👁️</Text>
							<Text style={{ color: 'white', 
										fontWeight: 'bold',
										fontSize: 11,
										marginTop: 4 }}>
								View
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={shareFood} style={{ flex: 1, minWidth: '30%' }}>
						<View style={{ backgroundColor: '#FF6F61',
									padding: 8,
									borderRadius: 8,
									alignItems: 'center'}}>
							<Text style={{ fontSize: 16 }}>📤</Text>
							<Text style={{ color: 'white', 
										fontWeight: 'bold',
										fontSize: 11,
										marginTop: 4 }}>
								Share
							</Text>
						</View>
					</TouchableOpacity>
					{onFavorite && (
						<TouchableOpacity onPress={onFavorite} style={{ flex: 1, minWidth: '30%' }}>
							<View style={{ backgroundColor: '#FF1493',
										padding: 8,
										borderRadius: 8,
										alignItems: 'center'}}>
								<Text style={{ fontSize: 16 }}>❤️</Text>
								<Text style={{ color: 'white', 
											fontWeight: 'bold',
											fontSize: 11,
											marginTop: 4 }}>
									Save
								</Text>
							</View>
						</TouchableOpacity>
					)}
				</View>
			</View>
		</View>
	);
};
export default Food;