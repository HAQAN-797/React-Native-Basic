import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './rsc/Screens/RegistrationScreen';
import DetailsScreen from './rsc/Screens/DetailsScreen';

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Registration"
      screenOptions={{
        headerStyle: { backgroundColor: 'green' },
      }}
    >
     <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />

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