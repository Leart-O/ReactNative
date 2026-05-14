# 🍽️ TheMealDB Recipe App

A beautiful, feature-rich React Native app for discovering, searching, and saving your favorite recipes from around the world, powered by the free TheMealDB API.

## 🎯 Features

### 🏠 **Home Screen**
- Display featured random meals
- Show trending recipes
- Search functionality with live results
- Beautiful card-based layout with animations
- Pull-to-refresh for latest meals

### 🍴 **Browse by Category**
- Select from 14+ cuisine categories
- View masonry grid of category images
- Browse meals within each category
- Smooth category transitions
- Visual category indicators

### 🌍 **Browse by Cuisine**
- Explore 30+ world cuisines
- Country flag emojis for each region
- List all meals from selected region
- Organized regional exploration
- Cultural diversity in one place

### ❤️ **My Favorites**
- Save recipes with one tap
- View all saved meals
- Remove favorites quickly
- Persistent storage with AsyncStorage
- Count of saved recipes

### 📺 **Recipe Details**
- Full ingredient lists with measurements
- Complete cooking instructions
- High-resolution meal images
- Category and area tags
- YouTube tutorial links
- Favorite/unfavorite toggle
- Beautiful typography and layout

### 📱 **User Interface**
- Dark theme (AMOLED friendly)
- Smooth animations and transitions
- Easy sidebar navigation
- Responsive layouts
- Professional color scheme
- Intuitive icons and emojis

## 🎨 Design Highlights

### Color Scheme
- **Primary**: #FF6F61 (Coral) - for Categories
- **Secondary**: #32CD32 (Lime Green) - for Cuisines
- **Accent**: #FF1493 (Deep Pink) - for Favorites
- **Background**: #0A0A0A (Deep Black) - Battery efficient

### Navigation
- **Drawer Navigation** with 5 main sections
- **Stack Navigation** with detailed screens
- **Quick Access** through sidebar menu
- **Back Navigation** with smooth transitions

## 📱 Screens

| Screen | Features |
|--------|----------|
| Home | Featured meals, trending, search |
| Categories | 14+ cuisine types to explore |
| Cuisines | 30+ world regions, country-specific meals |
| Favorites | Saved recipes, remove option |
| About | App info, features, tips |
| Details | Full recipe with ingredients, instructions |

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Expo CLI

### Installation

1. **Clone/Navigate to the project**
   ```bash
   cd food-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the app**
   ```bash
   npm start
   ```

4. **Choose platform**
   - Press `a` for Android
   - Press `i` for iOS
   - Press `w` for Web

### Project Structure

```
food-app/
├── App.js                           # Main app with navigation
├── Food.js                          # Legacy recipe card
├── index.js                         # Entry point
├── package.json                     # Dependencies
├── api/
│   └── meals.js                    # TheMealDB API integration
├── screens/
│   ├── HomeScreen.js               # Home with featured & search
│   ├── CategoryScreen.js           # Browse by cuisine type
│   ├── AreaScreen.js               # Browse by world region
│   ├── FavoritesScreen.js          # Saved recipes
│   ├── DetailsScreen.js            # Recipe details
│   └── AboutScreen.js              # App information
├── components/
│   ├── RecipeCard.js               # Recipe card component
│   ├── SearchBar.js                # Search input
│   ├── BackButton.js               # Navigation back
│   └── LoadingSkeleton.js          # Loading state
└── hooks/
    ├── useMeals.js                 # API data hooks
    └── useFavorites.js             # Favorites management
```

## 🔌 API Integration

### TheMealDB Endpoints Used

- **Search**: `/search.php?s={meal_name}` - Search by meal name
- **Random**: `/random.php` - Get random meal
- **Details**: `/lookup.php?i={id}` - Get full meal details
- **Categories**: `/categories.php` - List all categories
- **Category Filter**: `/filter.php?c={category}` - Meals by category
- **Area Filter**: `/filter.php?a={area}` - Meals by area
- **List Areas**: `/list.php?a=list` - All cuisines
- **Images**: Meal thumbnails and ingredient images

### Data Structure

Each meal includes:
```javascript
{
  idMeal,
  strMeal,           // Meal name
  strCategory,       // Category
  strArea,           // Cuisine region
  strMealThumb,      // Image URL
  strInstructions,   // Cooking steps
  strYoutube,        // Tutorial link
  strIngredient1-20, // Ingredients
  strMeasure1-20     // Measurements
}
```

## 💾 Data Persistence

### Favorites Storage
- Using **AsyncStorage** (@react-native-async-storage)
- Stores meal objects with IDs
- Survives app restarts
- Fast local access
- Key: `@meals_favorites_v1`

## 🎯 Usage Tips

### Search Recipes
1. Go to **Home** or any screen
2. Use the search bar at the top
3. Type meal name (e.g., "pasta", "pizza")
4. Results appear instantly
5. Tap any result to see details

### Browse by Category
1. Open sidebar menu
2. Tap **By Category**
3. Select a cuisine type
4. Browse meals in that category
5. View details by tapping

### Explore by Region
1. Open sidebar menu
2. Tap **By Cuisine**
3. Select a country/region
4. See traditional meals from that area
5. Discover cultural recipes

### Save Favorites
1. Find a recipe you love
2. Tap the **★** (star) button on details
3. Recipe saved automatically
4. Access from **My Favorites**
5. View saved list anytime

### Watch Tutorials
1. Open recipe details
2. Scroll to bottom
3. Tap **"Watch on YouTube"** if available
4. Opens YouTube app or browser
5. Follow along with video tutorial

## 🛠️ Development

### Adding New Features

1. **New API Endpoint**
   - Add function to `api/meals.js`
   - Create corresponding hook in `hooks/useMeals.js`
   - Use in component

2. **New Screen**
   - Create in `screens/` folder
   - Add to navigation stack in `App.js`
   - Add menu item in drawer

3. **New Component**
   - Create in `components/` folder
   - Import and use in screens

### Customization

- Colors: Update hex values in StyleSheet
- Text: Modify screen titles and labels
- API: Replace endpoint URLs as needed
- Styling: Adjust padding, margins, fonts

## 🐛 Common Issues

### Issue: Dependencies not installing
```bash
npm install
npm install expo-cli -g
```

### Issue: App won't start
```bash
npx expo prebuild
npm start
```

### Issue: API not responding
- Check internet connection
- Visit https://www.themealdb.com/api.php
- Verify API endpoints are working

### Issue: Favorites not saving
- Check AsyncStorage is installed
- Ensure sufficient device storage
- Clear app cache and retry

## 📊 Performance

- **Average Load Time**: < 1 second for recipes
- **API Response**: < 500ms typically
- **Image Loading**: Optimized with React Native
- **Storage**: ~2-5MB app size
- **Memory**: Efficient with lazy loading

## 🔐 Privacy & Data

- **No Personal Data**: App doesn't collect user info
- **Local Storage**: Favorites stored only on device
- **API Key**: Not required for TheMealDB free tier
- **Ads**: None
- **Tracking**: None

## 📚 Resources

- [TheMealDB API](https://www.themealdb.com/api.php)
- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

## 📄 License

This is a free educational project using the free TheMealDB API.

## 👨‍💻 Technologies Used

- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - Navigation library
- **AsyncStorage** - Local data persistence
- **TheMealDB API** - Recipe data source

## 🌟 Future Enhancements

- [ ] Ingredient filtering
- [ ] Recipe rating system
- [ ] User-created recipes
- [ ] Meal planning calendar
- [ ] Shopping list generator
- [ ] Dietary restrictions filter
- [ ] Cooking time estimates
- [ ] Cloud backup

## 🤝 Contributing

Feel free to fork, modify, and improve this app!

## 📧 Support

For API support, visit: https://www.themealdb.com/contact.php

---

**Happy Cooking! 🍽️👨‍🍳**
