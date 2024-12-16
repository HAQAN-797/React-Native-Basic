import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import Feather from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName='Registration'
    screenOptions={{
    headerShown:false,
    tabBarStyle:styles.tabBarLabelStyle,
    tabBarLabelStyle: styles.tabBarLabelStyle,
    tabBarActiveTintColor: '#e91e63',
    tabBarInactiveTintColor: 'gray',
  }}
    
    >
    <Tab.Screen name="Registration" component={RegistrationScreen}
      options={{
        tabBarIcon: () => (
          <MaterialIcons
          name="app-registration" size={25} color={'blue'} />
        ),
      }}
    
    />
    <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon: () => (
          <Feather name="home" size={25} color={'blue'} />
        ),
      }}
     />
    <Tab.Screen name="Details" component={DetailsScreen}
       options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
          name="account-details-outline" size={25} color={'blue'} />
        ),
      }}
     />
    <Tab.Screen name="Profile" component={ProfileScreen}
    options={{
      tabBarIcon: () => (
        <Ionicons
        name="person-outline" size={25} color={'blue'} />
      ),
    }}
    />
  </Tab.Navigator>
  )
}

export default TabNavigation 
const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 18,
    fontFamily: 'Georgia',
    fontWeight: 300,
  },
  tabBarLabelStyle: {
    fontSize: 14, // Set font size for tab labels
    fontFamily: 'Georgia', // Set font style
    fontWeight: 'bold', // Make the label bold
  },
})