import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { Provider } from 'react-redux';

import SrcCounter from '../Src/CounterApp';
import {View} from 'react-native'

import store from '../Src/store';
import DisplayCount from '../Src/Count'


const Counter =()=> {
  
    {
      return(
          <Provider store ={store}>
            <SrcCounter/>
            <View style={{marginTop: 25}}>
              <DisplayCount/>
            </View>
          </Provider>
      );
    }
  }



  
  export default Counter