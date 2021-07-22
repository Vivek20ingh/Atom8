import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import SearchText from './SearchText';

import { View,Text,Button,SafeAreaView,ScrollView} from 'react-native';


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
      <SafeAreaView style={{flex: 1}}>
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
           
           <View style={{margin:20}}>
             <Text>Last Movie Search:   {text}</Text>
           </View>

           </View>
         </ScrollView>
       </SafeAreaView>
    );
  };

  export  default HomeScreen;


