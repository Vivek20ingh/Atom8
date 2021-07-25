import 'react-native-gesture-handler';
import React from 'react';

import {View,TouchableOpacity,Text,Button} from 'react-native'
import {connect} from 'react-redux'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';


const Reload=({text1})=> {
  
  const navigation = useNavigation();

    const dispatch = useDispatch()
    {
      return(
      <View>
        <View>
        <View style={{marginTop: 20}}>
             < Button 
             title="Reload" 
             onPress={() =>
              dispatch({type:'CHANGE_TEXT'})
             }
             />
           </View>  
         </View>
        
         
      </View>
      );
    }
  }


 const mapStateToProps=(state)=>{
      return{
          counter: state.counter,
          text1: state.text1
      }
  }
  
  export default connect(mapStateToProps)(Reload)