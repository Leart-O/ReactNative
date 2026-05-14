import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, SafeAreaView } from 'react-native';

const AboutScreen = () => {
	const openLink = (url) => Linking.openURL(url);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<Text style={styles.appTitle}>🍽️ TheMealDB Recipe App</Text>
					<Text style={styles.version}>v1.0.0</Text>
				</View>

				<View style={styles.content}>
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>📱 About This App</Text>
						<Text style={styles.text}>
							A comprehensive recipe discovery app powered by TheMealDB API. Explore thousands of delicious meals from cuisines around the world. Save your favorites, search by category, and discover new recipes.
						</Text>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>✨ Amazing Features</Text>
						<Text style={styles.featureItem}>🏠 Home - Featured & trending meals</Text>
						<Text style={styles.featureItem}>🔍 Search - Find recipes by name</Text>
						<Text style={styles.featureItem}>🍴 Categories - Browse by cuisine type</Text>
						<Text style={styles.featureItem}>🌍 Cuisines - Explore by world region</Text>
						<Text style={styles.featureItem}>❤️ Favorites - Save & manage recipes</Text>
						<Text style={styles.featureItem}>📊 Full Details - Complete ingredient lists & instructions</Text>
						<Text style={styles.featureItem}>📺 Videos - Watch cooking tutorials on YouTube</Text>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>🔗 API Information</Text>
						<Text style={styles.text}>
							This app uses the free TheMealDB API to provide you with a vast collection of recipes. TheMealDB offers comprehensive meal data including ingredients, measurements, cooking instructions, and video tutorials.
						</Text>
						<TouchableOpacity
							style={styles.linkButton}
							onPress={() => openLink('https://www.themealdb.com/api.php')}
						>
							<Text style={styles.linkText}>Visit TheMealDB API Documentation →</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>🎨 Display Features</Text>
						<Text style={styles.featureItem}>• Beautiful dark theme design</Text>
						<Text style={styles.featureItem}>• Smooth animations & transitions</Text>
						<Text style={styles.featureItem}>• Responsive grid layouts</Text>
						<Text style={styles.featureItem}>• Quick-access sidebar navigation</Text>
						<Text style={styles.featureItem}>• Pull-to-refresh for latest meals</Text>
						<Text style={styles.featureItem}>• High-resolution recipe images</Text>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>📖 How to Use</Text>
						<Text style={styles.stepItem}><Text style={styles.stepNumber}>1.</Text> Open the app and see featured meals on home</Text>
						<Text style={styles.stepItem}><Text style={styles.stepNumber}>2.</Text> Use search to find recipes by name</Text>
						<Text style={styles.stepItem}><Text style={styles.stepNumber}>3.</Text> Browse categories or explore cuisines</Text>
						<Text style={styles.stepItem}><Text style={styles.stepNumber}>4.</Text> Tap any recipe to view full details</Text>
						<Text style={styles.stepItem}><Text style={styles.stepNumber}>5.</Text> Save favorites with the ★ button</Text>
						<Text style={styles.stepItem}><Text style={styles.stepNumber}>6.</Text> Watch videos and share recipes</Text>
					</Text>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>💡 Pro Tips</Text>
						<Text style={styles.tipItem}> Use specific ingredients for better results</Text>
						<Text style={styles.tipItem}> Check ingredient lists before shopping</Text>
						<Text style={styles.tipItem}> Watch YouTube videos for visual guides</Text>
						<Text style={styles.tipItem}> Save favorite recipes for quick access</Text>
						<Text style={styles.tipItem}> Filter by cuisine for themed cooking</Text>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>🌟 Why TheMealDB?</Text>
						<Text style={styles.text}>
							TheMealDB provides the best free recipe database with:
						</Text>
						<Text style={styles.featureItem}>✓ 1000+ meals from 100+ countries</Text>
						<Text style={styles.featureItem}>✓ Complete ingredient measurements</Text>
						<Text style={styles.featureItem}>✓ Detailed cooking instructions</Text>
						<Text style={styles.featureItem}>✓ YouTube tutorial links</Text>
						<Text style={styles.featureItem}>✓ High-quality meal images</Text>
						<Text style={styles.featureItem}>✓ Always free, no API key needed</Text>
					</View>

					<View style={[styles.section, { marginBottom: 30 }]}>
						<Text style={styles.sectionTitle}>📧 Support & Feedback</Text>
						<Text style={styles.text}>
							Have feedback or found an issue? Visit TheMealDB's contact page for support.
						</Text>
						<TouchableOpacity
							style={styles.linkButton}
							onPress={() => openLink('https://www.themealdb.com/contact.php')}
						>
							<Text style={styles.linkText}>Contact TheMealDB →</Text>
						</TouchableOpacity>
						<Text style={styles.copyright}>
							© 2024 TheMealDB Recipe App
						</Text>
						<Text style={styles.copyright}>
							Built with React Native & Expo
						</Text>
					</View>
				</View>
			</ScrollView>
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
		paddingTop: 10,
		backgroundColor: '#1A1A1A',
		borderBottomWidth: 1,
		borderBottomColor: '#222',
		alignItems: 'center',
	},
	appTitle: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#FF6F61',
		marginBottom: 4,
	},
	version: {
		fontSize: 12,
		color: '#666',
	},
	content: {
		padding: 16,
	},
	section: {
		marginBottom: 24,
		backgroundColor: '#1A1A1A',
		padding: 16,
		borderRadius: 12,
		borderLeftWidth: 4,
		borderLeftColor: '#FF6F61',
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: '700',
		color: '#FF6F61',
		marginBottom: 10,
	},
	text: {
		fontSize: 14,
		color: '#CCC',
		lineHeight: 22,
	},
	featureItem: {
		fontSize: 14,
		color: '#CCC',
		lineHeight: 24,
		marginBottom: 4,
	},
	stepItem: {
		fontSize: 14,
		color: '#CCC',
		lineHeight: 24,
		marginBottom: 6,
	},
	stepNumber: {
		fontWeight: '700',
		color: '#FF6F61',
		marginRight: 4,
	},
	tipItem: {
		fontSize: 14,
		color: '#CCC',
		lineHeight: 22,
		marginBottom: 8,
	},
	linkButton: {
		marginTop: 12,
		paddingVertical: 10,
		paddingHorizontal: 12,
		backgroundColor: '#222',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#FF6F61',
	},
	linkText: {
		color: '#FF6F61',
		fontWeight: '600',
		fontSize: 13,
	},
	copyright: {
		fontSize: 11,
		color: '#666',
		textAlign: 'center',
		marginTop: 12,
	},
});

export default AboutScreen;
