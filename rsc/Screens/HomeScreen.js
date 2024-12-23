import { View, Text, Button } from 'react-native'
import React from 'react'
import SCREENS from '../Screens';

const HomeScreen = ({navigation}) => {
 
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
      title='Register Screens'
      onPress={()=>{navigation.navigate(SCREENS.REGISTRATIONSCREEN)}}
      />
    </View>
  )
}

export default HomeScreen