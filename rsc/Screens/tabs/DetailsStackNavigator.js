import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 // Import the new Haqan screen
import DetailsScreen from './HaqanScreen';
import HaqanScreen from './HaqanScreen';

const DetailsStack = createNativeStackNavigator();

const DetailsStackNavigator = () => {
  return (
    <DetailsStack.Navigator screenOptions={{ headerShown: true }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} />
      <DetailsStack.Screen name="Haqan" component={HaqanScreen} />
    </DetailsStack.Navigator>
  );
};

export default DetailsStackNavigator;
