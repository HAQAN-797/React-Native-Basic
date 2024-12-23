import { View, Text,Button } from 'react-native'
import React from 'react'
import SCREENS from '../index';

const RegistrationScreen = ({navigation}) => {
  return (
    <View>
      <Text>RegistrationScreen</Text>
      <Button
      title='Intro Screens'
      onPress={()=>{navigation.navigate(SCREENS.INTROSCREEN)}}
      />
        <Button
      title='Intro Tab Screens'
      onPress={()=>{navigation.navigate(SCREENS.INTROSCREENTAB)}}
      />
    </View>
  )
}

export default RegistrationScreen