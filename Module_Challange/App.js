import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import PhonesScreen from './screens/PhonesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Main') {
              iconName = focused ? 'home' : 'home-outline';
            } else{
              iconName = focused ? 'phone-portrait' : 'phone-portrait-outline';
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tabs.Screen name="Main" component={MainScreen}/>
        <Tabs.Screen name="Phones" component={PhonesScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
