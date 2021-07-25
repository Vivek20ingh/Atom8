import 'react-native-gesture-handler';
import React from 'react';

import {View,TouchableOpacity,Text,Button} from 'react-native'
import {connect} from 'react-redux'

import { useDispatch } from 'react-redux'


const Textthroughredux=({text1})=> {

    {
      return(
      <View>
          <Text style={{margin:20}}>Last Movie Search Updated by Redux:  {text1}</Text>
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
  
  export default connect(mapStateToProps)(Textthroughredux)