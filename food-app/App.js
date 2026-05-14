import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CategoryScreen from './screens/CategoryScreen';
import AreaScreen from './screens/AreaScreen';
import AboutScreen from './screens/AboutScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomDrawerContent = (props) => {
	return (
		<View style={{ flex: 1, paddingTop: 20, backgroundColor: '#0A0A0A' }}>
			<View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#222' }}>
				<Text style={{ fontSize: 28, fontWeight: 'bold', color: '#FF6F61' }}>
					🍽️ TheMealDB
				</Text>
				<Text style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
					Explore Recipes
				</Text>
			</View>
			{props.children}
		</View>
	);
};

// Home Stack Navigator
const HomeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#1A1A1A',
					borderBottomWidth: 1,
					borderBottomColor: '#222',
				},
				headerTintColor: '#FF6F61',
				headerTitleStyle: {
					fontWeight: 'bold',
					fontSize: 18,
					color: '#FFF',
				},
				headerBackTitle: 'Back',
			}}
		>
			<Stack.Screen
				name="HomeRoot"
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Details"
				component={DetailsScreen}
				options={{
					title: 'Recipe Details',
					headerShown: true,
				}}
			/>
		</Stack.Navigator>
	);
};

// Category Stack Navigator
const CategoryStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#FF6F61',
				},
				headerTintColor: '#FFF',
				headerTitleStyle: {
					fontWeight: 'bold',
					fontSize: 18,
				},
			}}
		>
			<Stack.Screen
				name="CategoryRoot"
				component={CategoryScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Details"
				component={DetailsScreen}
				options={{
					title: 'Recipe Details',
					headerShown: true,
				}}
			/>
		</Stack.Navigator>
	);
};

// Area Stack Navigator
const AreaStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#32CD32',
				},
				headerTintColor: '#FFF',
				headerTitleStyle: {
					fontWeight: 'bold',
					fontSize: 18,
				},
			}}
		>
			<Stack.Screen
				name="AreaRoot"
				component={AreaScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Details"
				component={DetailsScreen}
				options={{
					title: 'Recipe Details',
					headerShown: true,
				}}
			/>
		</Stack.Navigator>
	);
};

// Favorites Stack Navigator
const FavoritesStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#1A1A1A',
					borderBottomWidth: 1,
					borderBottomColor: '#222',
				},
				headerTintColor: '#FF1493',
				headerTitleStyle: {
					fontWeight: 'bold',
					fontSize: 18,
					color: '#FFF',
				},
			}}
		>
			<Stack.Screen
				name="FavoritesRoot"
				component={FavoritesScreen}
				options={{
					title: '❤️ My Favorites',
				}}
			/>
			<Stack.Screen
				name="Details"
				component={DetailsScreen}
				options={{
					title: 'Recipe Details',
					headerShown: true,
				}}
			/>
		</Stack.Navigator>
	);
};

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerShown: false,
					drawerActiveTintColor: '#FF6F61',
					drawerInactiveTintColor: '#666',
					drawerStyle: {
						backgroundColor: '#0A0A0A',
						width: 280,
					},
					drawerLabelStyle: {
						fontSize: 14,
						fontWeight: '500',
					},
				}}
				drawerContent={(props) => <CustomDrawerContent {...props} />}
			>
				<Drawer.Screen
					name="Home"
					component={HomeStack}
					options={{
						drawerLabel: 'Home',
						drawerIcon: ({ color }) => (
							<Text style={{ fontSize: 20, color }}>🏠</Text>
						),
					}}
				/>
				<Drawer.Screen
					name="Categories"
					component={CategoryStack}
					options={{
						drawerLabel: 'By Category',
						drawerIcon: ({ color }) => (
							<Text style={{ fontSize: 20, color }}>🍴</Text>
						),
					}}
				/>
				<Drawer.Screen
					name="Cuisines"
					component={AreaStack}
					options={{
						drawerLabel: 'By Cuisine',
						drawerIcon: ({ color }) => (
							<Text style={{ fontSize: 20, color }}>🌍</Text>
						),
					}}
				/>
				<Drawer.Screen
					name="Favorites"
					component={FavoritesStack}
					options={{
						drawerLabel: 'My Favorites',
						drawerIcon: ({ color }) => (
							<Text style={{ fontSize: 20, color }}>❤️</Text>
						),
					}}
				/>
				<Drawer.Screen
					name="About"
					component={AboutScreen}
					options={{
						drawerLabel: 'About',
						drawerIcon: ({ color }) => (
							<Text style={{ fontSize: 20, color }}>ℹ️</Text>
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;