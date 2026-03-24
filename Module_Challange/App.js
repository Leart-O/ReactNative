import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from './screens/MainScreen';
import PhonesScreen from './screens/PhonesScreen';
import AlbumsScreen from './screens/AlbumsScreen';
import CommentsScreen from './screens/CommentsScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#1a1a2e' }}>
      {/* HEADER */}
      <View style={styles.drawerHeader}>
        <View style={styles.avatarContainer}>
          <Ionicons name="planet-outline" size={50} color="#e94560" />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.drawerHeaderTitle}>Fetching Data</Text>
          <Text style={styles.drawerHeaderSubtitle}>
            Explore the world of data fetching
          </Text>
        </View>
      </View>

      {/* SCROLLABLE ITEMS - flex:1 is important here */}
      <DrawerContentScrollView
        {...props}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 10 }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* FOOTER */}
      <View style={{ padding: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="code-slash-outline" size={20} color="#555" />
          <Text style={{ color: '#fff', marginLeft: 5 }}>
            Built with React Navigation
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#1a1a2e',
            width: 280,
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: '600',
            marginLeft: -10,
          },
          drawerActiveTintColor: '#e94560',
          drawerInactiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#16213e',
          drawerItemStyle: {
            borderRadius: 12,
            marginHorizontal: 10,
            marginVertical: 4,
            paddingVertical: 2,
          },
          headerStyle: {
            backgroundColor: '#16213e',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Main Screen',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="globe-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Phones"
          component={PhonesScreen}
          options={{
            title: 'Phones Screen',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="phone-portrait-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
  name="Albums"
  component={() => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <Text style={{ color: 'white', fontSize: 32 }}>Albums is here!</Text>
    </View>
  )}
  options={{ title: 'Albums Screen' /* ... icon ... */ }}
/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#16213e',
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,           // ← made it round + better proportions
    borderRadius: 40,
    backgroundColor: '#e94560',
    borderWidth: 2,
    borderColor: '#e94560',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  drawerHeaderTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerHeaderSubtitle: {
    color: '#a0a0a0',
    fontSize: 14,
    marginTop: 4,
  },
});