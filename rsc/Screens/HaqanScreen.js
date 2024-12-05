import { View, Text ,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const HaqanScreen = () => {
const navigation = useNavigation();
  return (
    <View>
            <Button title='Pop' onPress={() => navigation.pop()}/>
            <Button title='popToTop' onPress={() => navigation.popToTop()}/>
    </View>
  )
}
export default HaqanScreen