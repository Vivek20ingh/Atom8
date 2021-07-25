import 'react-native-gesture-handler';
import React,{Component} from 'react';

import {View} from 'react-native'

import store from '../Src/store';
import DisplayCount from '../Src/Count'
import { Provider } from 'react-redux';


const Counter1 = ({counter}) =>
{
    return(
        <Provider store ={store}>
            <DisplayCount/>
        </Provider>
    )
}

  
  export default Counter1