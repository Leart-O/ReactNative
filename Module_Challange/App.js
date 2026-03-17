import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import PhonesScreen from './screens/PhonesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View } from 'react-native-web';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 , backgroundColor: '#1a11a2e'}}>
      <View style={styles.drawerHeader}>
        <View style={styles.avatarContainer}>
          <Ionicons name="planet-outline" size={50} color="#e94560" />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.drawerHeaderTitle}>Fetching Data</Text>
          <Text style={styles.drawerHeaderSubtitle}>Explore the world of data fetching</Text>
        </View>
        
        <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 10}}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        
        <View style={styles.drawerFooter}>
          <Ionicons name="code-slash-outline" size={20} color="#555" />
          <Text style={styles.drawerFooter}>Built with React Navigation</Text>
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
            marginHporizontal: 10,
            marginVertical: 4,
            paddingVertical: 2,
          },
          headerStyle: {
            backgroundColor: '#16213e',
            elevation: 0,
            showOpacity: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen name="Main" component={MainScreen} 
        options={{
          title: 'Main Screen',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="globe-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="Phones" component={PhonesScreen} 
        options={{
          title: 'Phones Screen',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="phone-portrait-outline" size={size} color={color} />
          ),
        }}
      />

      </Drawer.Navigator>
      {/* <Tabs.Navigator
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
      </Tabs.Navigator> */}
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
    height: 50,
    borderRadius: 50,
    backgroundColor: '#e94560',
    borderWidth: 2,
    borderColor: '#e94560',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
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