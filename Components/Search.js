import React, {useState,useEffect} from "react";  
import { SafeAreaView ,StyleSheet, View,Text,TextInput, TouchableOpacity,Alert} from 'react-native';
import ItemView from "./ItemView"

import list from "./Movielist";

const SearchScreen=({navigation}) => {

  const [filterdData,setfilterdData]= useState([]);
  const [masterData,setmasterData]= useState([]);
  const [search,setsearch]= useState('')

  useEffect(() =>{
   fetchPosts();
    return()=>{

    }
  },[])

  const fetchPosts =() =>{
    setfilterdData(list);
    setmasterData(list);
  }

  const searchFilter =(text) =>{
    if(text)
    {
        const newData = masterData.filter((item)=>{
        const itemData= item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textdata= text.toUpperCase();
        return itemData.indexOf(textdata) > -1;
      });
      setfilterdData(newData);
      setsearch(text);
    }else{
      setfilterdData(masterData);
      setsearch(text);
    }
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Search Movie</Text>
        <TextInput 
          style= {styles.textInputStyle}
          value={search}
          placeholder="search Here"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text) }
          />
             {
            filterdData.map((l, i) => {
              // l is object at ith index in list(filterData) from Movielist.js
              // filterdata is list of movie of search character from list
              if(l.ping==='0'){
                //checking value of varialbe ping of object l is 0 or 1;

                return (<TouchableOpacity  onPress={() =>{
                navigation.navigate('Movie',{ 
                 item: l
                }) 
                }}>

                  <ItemView  item={l}/>
                </TouchableOpacity>)
              }
            })}
      </View>
    </SafeAreaView>
  );
};

const styles =StyleSheet.create({
  container:{
    backgroundColor: 'white',
  },
  itemStyle:{
    padding: 10
  },
  textInputStyle:{
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white'
  }
});




  export default SearchScreen;
