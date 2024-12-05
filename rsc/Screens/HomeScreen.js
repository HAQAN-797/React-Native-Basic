import { View, Text,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();
  
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Move" onPress={() => navigation.navigate('Details')} />
        <Text>Home Screen</Text>
      </View>
    );
  
}

export default HomeScreen