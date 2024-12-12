import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './rsc/Screens/RegistrationScreen';
import DetailsScreen from './rsc/Screens/DetailsScreen';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Registration"
      screenOptions={{
        headerStyle: { backgroundColor: 'green' }, 
        presentation: "formSheet",
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
      <RootStack />/
    </NavigationContainer>
  );
}