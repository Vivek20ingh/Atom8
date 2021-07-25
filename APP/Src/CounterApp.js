import 'react-native-gesture-handler';
import React,{Component} from 'react';

import {View,TouchableOpacity,Text} from 'react-native'
import {connect} from 'react-redux'

import { useDispatch } from 'react-redux'

const SrcCounter=({counter})=> {

   
    const dispatch = useDispatch()
    {
      return(
      <View>
        <View>
          <TouchableOpacity onPress={()=> dispatch({type:'INCREASE_COUNTER'})}>
            <Text style={{fontSize: 20}}>Increase</Text>
          </TouchableOpacity>       
            <Text style={{fontSize: 20}}>{counter}</Text>
          <TouchableOpacity onPress={()=> dispatch({type:'DECREASE_COUNTER'})}>
            <Text style={{fontSize: 20}}>Decrease</Text>
          </TouchableOpacity>             
         </View>
         
      </View>
      );
    }
  }


 const mapStateToProps=(state)=>{
      return{
          counter: state.counter
      }
  }
  
  export default connect(mapStateToProps)(SrcCounter)