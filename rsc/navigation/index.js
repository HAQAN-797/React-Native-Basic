import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import SCREENS from '../Screens';
import HomeScreen from '../Screens/HomeScreen';
import RegistrationScreen from '../Screens/tabs/RegistrationScreen';
import ProfileScreen from '../Screens/tabs/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from '../auth/LoginScreen';
import IntroScreen from '../Screens/Intro/IntroScreen';
import DetailsStackNavigator from '../Screens/tabs/DetailsStackNavigator';
import IntroTabScreen from '../Screens/Intro/IntroTabScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabStack = createNativeStackNavigator();


const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.LOGINSCREEN} component={LoginScreen} />
      <Stack.Screen name={SCREENS.HOMESCREEN} component={TabNavigator} />
      <Stack.Screen name={SCREENS.INTROSCREEN} component={IntroScreen} />

    </Stack.Navigator>
  );
};

const StackTabNavigation = () => {
  return (
    <TabStack.Navigator initialRouteName={SCREENS.REGISTRATIONSCREEN} screenOptions={{ headerShown: false }}>
      <TabStack.Screen name={SCREENS.REGISTRATIONSCREEN} component={RegistrationScreen} />
      <TabStack.Screen name={SCREENS.INTROSCREENTAB} component={IntroTabScreen} />
    </TabStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.REGISTRATIONSCREEN}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      
      <Tab.Screen
        name={SCREENS.REGISTRATIONSCREEN}
        component={StackTabNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="app-registration" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
  name={SCREENS.DETAILSCREEN}
  component={DetailsStackNavigator}
  options={{
    tabBarStyle: { display: 'none' }, // Ensure the tab bar is hidden
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="account-details-outline" size={25} color={color} />
    ),
  }}
/>

      <Tab.Screen
        name={SCREENS.PROFILESCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={25} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
    height: 60,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default StackNavigation; // Export both StackNavigation and TabNavigator if required
