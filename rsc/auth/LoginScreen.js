import { View, Text ,Button} from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title='Tabs' onPress={()=>{navigation.navigate('Home')}}/>
    </View>
  )
}

export default LoginScreen