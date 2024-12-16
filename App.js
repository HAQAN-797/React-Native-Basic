import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './rsc/Screens/DetailsScreen';
import TabNavigation from './rsc/TabNavigator/TabNavigation';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Navigation"
      screenOptions={{headerShown:false}}
    >
     <Stack.Screen name="Navigation" component={TabNavigation} />
     </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
