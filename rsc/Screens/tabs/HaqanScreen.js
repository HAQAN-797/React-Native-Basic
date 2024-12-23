// HaqanScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const HaqanScreen = ({ route }) => {
  const { message } = route.params || {}; 

  return (
    <View>
      <Text>Haqan Screen message: {message}</Text>
    </View>
  );
};

export default HaqanScreen;