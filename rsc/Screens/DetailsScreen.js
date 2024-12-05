import { View, Text,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const DetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button title='Push' onPress={() => navigation.push('Haqan')}/>
      <Button title='goBack' onPress={() => navigation.goBack()}/>

      
    </View>
  )
}

export default DetailsScreen