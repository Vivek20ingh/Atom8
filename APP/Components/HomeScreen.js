import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import SearchText from './Search/SearchText';

import Reload from './Search/TextApp'
import Textthroughredux from './Search/ChangeTextbyRedux'
import { View,Text,Button,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import store1 from './Search/store';
import TextThroughUseSelectortext from './Search/changeTextbyuseselector';


const HomeScreen = ({ navigation }) => {
 
  const[text,Searhtext]=useState(SearchText.text1);

  const fetchSettings =() =>{
   Searhtext(SearchText.text1)
  }

  useEffect(() => { const unsubscribe = navigation.addListener("focus",()=>{

    fetchSettings() })
    return unsubscribe;
    
    },[navigation])
    
    return (
      
      <SafeAreaView style={{ functionflex: 1}}>
         <ScrollView>
          <View>
             <Text testID='welcome'>Get Your Movie</Text>

           <View style={{marginTop:40}} > 
             <Button
             title="List"
             onPress={() =>
             navigation.navigate('List') }
           />
           </View>
           
           <View style={{marginTop: 20}}>
             < Button 
             title="Search" 
             onPress={() =>
             navigation.navigate('Search') }
             />
           </View>

           <View style={{marginTop: 20}}>
             < Button 
             title="Search1" 
             onPress={() =>
             navigation.navigate('Search1') }
             />
           </View>

           <View style={{marginTop: 20}}>
             < Button 
             title="Counter" 
             onPress={() =>
             navigation.navigate('Count') }
             />
           </View>

           <View style={{marginTop: 20}}>
             < Button 
             title="Counter2" 
             onPress={() =>
             navigation.navigate('Redux') }
             />
           </View>
           
           <View style={{margin:20}}>
             <Text>Last Movie Search Updated by Hook:   {text}</Text>
           </View>
           <Provider store={store1}>
             <Textthroughredux/>
             <TextThroughUseSelectortext/>
           </Provider>
           </View>
         </ScrollView>
       </SafeAreaView>
    );
  };

  export  default HomeScreen;


