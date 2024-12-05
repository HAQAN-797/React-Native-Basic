import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const Lifecycledemo = () => {
  const [count,setCount]=useState(0);
  const [message,setMessage]=useState('');

  //mounting Component
  useEffect
  (
    ()=>{
    console.log("component mounted")
    //unmounting
    return()=>{ console.warn("Component Unmounted")}
       }, []
  )
  //updation
  useEffect
  ( ()=>{
    console.log(`Count updated to: ${count}`)
    console.log(`Message updated to: ${message}`)
  }, [message,count]
    
  )

  return (
    <View>
      <Text>CountL {count}</Text>
      <Text>Messag :{message}</Text>
      <Button title='increment count' onPress={()=>setCount(count+1)}/>
      <Button title='Message Updation' onPress={()=>setMessage(" Message changed")}/>
    </View>
  )
}

export default Lifecycledemo