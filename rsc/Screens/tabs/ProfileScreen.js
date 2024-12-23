// ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const message = "Hello from Profile!";

  const navigateToHaqan = () => {
    navigation.navigate('Haqan', { message });
  };

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Go to Haqan" onPress={navigateToHaqan} />
    </View>
  );
};

export default ProfileScreen;