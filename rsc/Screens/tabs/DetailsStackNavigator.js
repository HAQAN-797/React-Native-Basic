import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';
import HaqanScreen from './HaqanScreen';

 // Import the new Haqan screen


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
