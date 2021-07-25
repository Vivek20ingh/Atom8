import 'react-native-gesture-handler';
import React from 'react';

import {View,Button} from 'react-native'

import { useDispatch } from 'react-redux'

const Selectortext=()=> {

    const dispatch = useDispatch()

   
    {
      return(
      <View> 
        <View style={{marginTop: 20,marginBottom: 20}} >
         
          <Button title="Use Selector" onPress={() =>
              dispatch({type:'CHANGE_TEXT'})
             }/>
        </View>     
      </View>
      );
    }
  }

  export default Selectortext