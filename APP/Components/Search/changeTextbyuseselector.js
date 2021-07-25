import 'react-native-gesture-handler';
import React from 'react';

import {View,TouchableOpacity,Text,Button} from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

const TextThroughUseSelectortext=()=> {

    const dispatch = useDispatch()

  const mytext=useSelector((state)=>{
    return state.text1
  })
    
    {
      return(
      <View> 
        <View style={{margin: 20}} >
         <Text>Last Movie Updated by UseSelector: {mytext}</Text>
        </View>     
      </View>
      );
    }
  }

  export default TextThroughUseSelectortext