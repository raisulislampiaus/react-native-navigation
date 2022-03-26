import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import Files from '../screen/Files'
import Signup from '../screen/Signup'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/FontAwesome";


const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: 'black',},
          tabBarInactiveTintColor: '#fff',
          tabBarActiveTintColor: 'red',
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
             <Ionicons  name="home" color={color} size={size} />
            ),
          }} 
          name="Home" 
          component={Home} 
         />
        <Tab.Screen 
           options={{
              tabBarLabel: 'setting',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons  name="settings-outline" color={color} size={size} />
              ),
            }} 
           name="Setting" 
           component={Setting} 
        />
        <Tab.Screen 
           options={{
              tabBarLabel: 'Storage',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons  name="file-tray" color={color} size={size} />
              ),
            }} 
           name="Files" 
           component={Files} 
        />
        <Tab.Screen 
           options={{
              tabBarLabel: 'Signup',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon  name="user" color={color} size={size} />
              ),
            }} 
           name="Signup" 
           component={Signup} 
        />
        
      </Tab.Navigator>
    
  );
}

