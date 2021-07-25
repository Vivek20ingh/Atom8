// import 'react-native-gesture-handler';
// import React,{Component} from 'react';
// import { Provider } from 'react-redux';

// import {View} from 'react-native'

// import store from './store';
// import SearchScreen from './Search';


// const SearchScreen1 =()=> {
  
//     {
//       return(
          
//             <View style={{marginTop: 25}}>
//               <SearchScreen/>
//             </View>
         
//       );
//     }
//   }



  
//   export default SearchScreen1

import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { Provider } from 'react-redux';

import SrcCounter from '../../Src/CounterApp';
import {View} from 'react-native'

import store from '../../Src/store';
import DisplayCount from '../../Src/Count'
import SearchScreen from './Search';
import store1 from './store';


const Counter =()=> {
  
    {
      return(
          <Provider store ={store}>
            <SrcCounter/>
            <View style={{marginTop: 25}}>
              <DisplayCount/>
              <SearchScreen/>
            </View>
          </Provider>
      );
    }
  }



  
  export default Counter