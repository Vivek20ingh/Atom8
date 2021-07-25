import 'react-native-gesture-handler';
import React,{Component} from 'react';

import {View,TouchableOpacity,Text} from 'react-native'
import {connect} from 'react-redux'

const DisplayCount=({counter})=> {
    {
      return(
      <View>
          <Text style={{fontSize:40}}> Display Text</Text>
          <Text style={{fontSize: 40}}>{counter}</Text>
      </View>
      );
    }
  }


 const mapStateToProps=(state)=>{
      return{
          counter: state.counter
      }
  }
  
  export default connect(mapStateToProps)(DisplayCount)