#!/usr/bin/env node

# 🍽️ START HERE - TheMealDB Recipe App Installation Guide

## 🚀 Quick Installation (Less than 5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the App
```bash
npm start
```

### Step 3: Choose Your Platform
```
Press 'a' for Android
Press 'i' for iOS
Press 'w' for Web
```

### Step 4: Enjoy!
- Scan QR code with Expo Go app, OR
- Use Android/iOS emulator, OR
- Use web browser

**That's it! You're ready! 🎉**

---

## 📱 What You Can Do Immediately

### After the app loads:
1. ✅ See featured recipes on home screen
2. ✅ Search for any meal (try "pasta", "chicken", etc.)
3. ✅ Browse recipes by category (Pizza, Seafood, etc.)
4. ✅ Explore world cuisines (Italian, Indian, Mexican, etc.)
5. ✅ Save favorite recipes
6. ✅ View complete recipes with instructions
7. ✅ Watch YouTube cooking tutorials

---

## 🎯 First Actions to Take

### Action 1: Search
1. Look for search bar at top
2. Type a meal name (e.g., "pizza")
3. See instant results
4. Tap any result to view full recipe

### Action 2: Browse Categories
1. Open sidebar menu (swipe left or tap ≡)
2. Tap "By Category"
3. Select any cuisine type
4. Browse all meals in that category

### Action 3: Explore Regions
1. Open sidebar menu
2. Tap "By Cuisine"
3. Select any country
4. See traditional meals from that region

### Action 4: Save Favorites
1. View any recipe
2. Tap ⭐ (star) button
3. Recipe saved automatically
4. Access from "My Favorites" anytime

---

## 🛠️ Troubleshooting

### Problem: `npm install` fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force
# Try again
npm install
```

### Problem: App won't start
**Solution:**
```bash
# Clear Expo cache
npm start -- --clear
# Or
rm -rf node_modules
npm install
npm start
```

### Problem: No recipes showing
**Solution:**
- Check internet connection
- Pull down to refresh
- Wait 5-10 seconds
- Try search with different keyword

### Problem: Favorites not saving
**Solution:**
- Check device storage isn't full
- Force close app
- Reopen and try again
- Check AsyncStorage is working

### Problem: Can't see animations
**Solution:**
- Use latest Expo Go app
- Update to latest Node.js
- Try on physical device
- Disable performance settings

---

## 🎓 How to Navigate

### Opening Sidebar Menu
- **Method 1**: Swipe from left edge of screen
- **Method 2**: Tap ≡ (hamburger icon) in top left
- **Method 3**: Tap app logo/title area

### Main Menu Items
```
🏠 Home           - Featured & search recipes
🍴 By Category    - Browse 14+ cuisine types
🌍 By Cuisine     - Explore 30+ world regions
❤️ My Favorites   - Saved recipes
ℹ️ About          - App info & help
```

### Going Back
- Tap `‹ Back` button
- Use device back button (Android)
- Swipe from edge (iOS)
- Tap home icon (when available)

---

## 📱 Screen Guide

### Home Screen
```
┌─────────────────────────┐
│ 🍽️ Food Recipes        │ ← Header
│ Discover delicious...   │
├─────────────────────────┤
│ [Search Bar]            │ ← Search
│ 🔍 Search Food Recipe   │
├─────────────────────────┤
│ ⭐ Featured Meals       │ ← Section
│ 🔥 Trending Now         │
│ [Recipe Cards...]       │
└─────────────────────────┘
```

### Category Screen
```
┌─────────────────────────┐
│ 🍴 Categories           │
├─────────────────────────┤
│ [Pizza]  [Seafood]      │ ← 2-column grid
│ [Pasta]  [Soup]         │
│ [Meat]   [Breakfast]    │
└─────────────────────────┘
```

### Favorites Screen
```
┌─────────────────────────┐
│ ❤️ My Favorites (3)     │
├─────────────────────────┤
│ [Meal Image] [Pizza]  ✕ │ ← Meal cards
│ [Meal Image] [Pasta]  ✕ │
│ [Meal Image] [Curry]  ✕ │
└─────────────────────────┘
```

---

## 💡 Pro Tips

### Search Tips
- Use single word: "chicken" not "chicken recipes"
- Use English names: "pasta" works, "pâtes" might not
- Try specific dishes: "pizza", "biryani", "tacos"
- Works best with exact meal names

### Category Tips
- Start with familiar category
- Browse all meals available
- Mix and match different types
- Compare similar meals

### Region Tips
- Explore countries you're interested in
- Discover traditional authentic recipes
- Learn about world cuisines
- Try something new regularly

### Favorites Tips
- Save recipes you plan to cook
- Organize by meal type
- Reference while shopping
- Build personal cookbook

### General Tips
- Pull down to refresh recipes
- Watch YouTube tutorials
- Check ingredients before shopping
- Follow instructions carefully
- Enjoy and experiment!

---

## 📋 Checklist - First Time

### Installation Phase
- [ ] Run `npm install`
- [ ] Run `npm start`
- [ ] Choose platform
- [ ] App loads successfully
- [ ] See featured meals

### Exploration Phase
- [ ] Try searching a meal
- [ ] Browse a category
- [ ] Explore a region
- [ ] View recipe details
- [ ] Save to favorites

### Comfort Phase
- [ ] Find favorite meal type
- [ ] Build favorites collection
- [ ] Know how to navigate
- [ ] Understand all sections
- [ ] Ready to cook!

---

## 🎨 Understanding the Design

### Color Meanings
```
🟠 Coral (#FF6F61)    → Categories section
🟢 Green (#32CD32)    → Cuisines section
💗 Pink (#FF1493)     → Favorites section
⚫ Black (#0A0A0A)    → Dark background
⚪ White (#FFFFFF)    → Text
```

### Emoji Icons
```
🏠 Home          → Home screen
🍴 Category      → Category browse
🌍 Cuisine       → World regions
❤️ Favorites     → Saved recipes
ℹ️ About         → Info screen
🔍 Search        → Search action
⭐ Star          → Save recipe
📺 Video         → YouTube link
✕ X              → Remove/close
```

---

## 📊 What's Inside

### Features
```
✅ Browse 1000+ recipes
✅ Search by meal name
✅ Filter by 14+ categories
✅ Explore 30+ world regions
✅ Save favorite recipes
✅ View complete recipes
✅ Watch YouTube tutorials
✅ Beautiful dark theme
✅ Smooth animations
✅ Fast performance
```

### Content
```
Meals:        1000+ recipes
Categories:   14+ cuisine types
Regions:      30+ world areas
Ingredients:  500+ varieties
Videos:       YouTube links
Images:       High resolution
```

### Quality
```
Performance:  Fast loading
Security:     No tracking
Privacy:      Local storage only
Free:         100% free
Support:      Documentation
```

---

## 🌐 API Information

### TheMealDB
- **Source**: https://www.themealdb.com/api.php
- **Cost**: FREE (no API key needed)
- **Meals**: 1000+
- **Categories**: 14+
- **Regions**: 30+
- **Reliability**: Always available
- **Documentation**: Complete

---

## 📚 Documentation Files

Read these for more info:
```
README.md              - Complete guide
QUICK_START.md         - Quick reference
SIDEBAR_GUIDE.md       - Feature walkthrough
IMPLEMENTATION_REPORT  - Technical details
CHANGES_SUMMARY.md     - What's new
```

---

## 🎯 Next Steps After Installation

### Day 1: Get Familiar
- [ ] Explore a few categories
- [ ] Try searching different meals
- [ ] Save 5 favorite recipes
- [ ] Watch a tutorial video
- [ ] Browse a cuisine region

### Day 2: Discover More
- [ ] Find recipes by ingredient
- [ ] Explore unfamiliar cuisines
- [ ] Save more favorites
- [ ] Plan a meal
- [ ] Share with friends

### Day 3: Cook!
- [ ] Select a recipe
- [ ] Gather ingredients
- [ ] Follow instructions
- [ ] Enjoy your meal
- [ ] Rate & save for future

---

## ⚡ Command Reference

### Basic Commands
```bash
# Install dependencies
npm install

# Start development server
npm start

# Clear cache and restart
npm start -- --clear

# Run on specific platform
npm start                 # Shows menu
npm run android          # Android directly
npm run ios              # iOS directly
npm run web              # Web directly

# Clean everything and reinstall
rm -rf node_modules
npm install
npm start
```

---

## 🚨 Emergency Fixes

### If anything goes wrong:

1. **Restart the app**
   ```bash
   # Stop: Ctrl+C
   # Start: npm start
   ```

2. **Clear cache**
   ```bash
   npm start -- --clear
   ```

3. **Reinstall everything**
   ```bash
   rm -rf node_modules
   rm package-lock.json
   npm install
   npm start
   ```

4. **Check Node version**
   ```bash
   node --version    # Should be v14+
   npm --version     # Should be v6+
   ```

---

## ✅ Verification Checklist

### App Working Correctly If:
- [ ] App starts without errors
- [ ] See featured meals on home
- [ ] Search returns results
- [ ] Categories load and respond
- [ ] Regions display properly
- [ ] Favorites save correctly
- [ ] Images load properly
- [ ] No console errors
- [ ] Animations run smooth
- [ ] Sidebar opens/closes

---

## 📞 Need Help?

### Common Resources
- **This File**: You're reading it!
- **README.md**: Detailed documentation
- **QUICK_START.md**: Quick reference
- **SIDEBAR_GUIDE.md**: Feature guide
- **About Screen**: In-app help

### Online Help
- TheMealDB: https://www.themealdb.com
- React Native: https://reactnative.dev
- Expo: https://docs.expo.dev
- React Navigation: https://reactnavigation.org

---

## 🎊 You're Ready!

### To Start Cooking:
1. ✅ Complete installation above
2. ✅ Explore the app
3. ✅ Find recipes you love
4. ✅ Save favorites
5. ✅ Start cooking!

**Enjoy 1000+ delicious recipes!** 🍽️👨‍🍳

---

**Last Updated**: 2024
**Version**: 1.0.0
**Status**: Ready to use ✅
