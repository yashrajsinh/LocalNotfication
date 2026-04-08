import { View, Text } from 'react-native';
import React from 'react';
//tab nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screen
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
type Props = {};

const Tab = createBottomTabNavigator();

const TabNav = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNav;
