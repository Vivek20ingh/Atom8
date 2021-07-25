import React, {useState,useEffect} from "react";  
import { SafeAreaView ,StyleSheet, View,Text,TextInput, TouchableOpacity,Button} from 'react-native';
import ItemView from "../ItemView";
import SearchText from "./SearchText";
import movielist from "../Movielist";
import { Provider } from 'react-redux';
import store from './store';
import Textthroughredux from './TextApp'
import Selectortext from "./TextAppSelector";

import { useSelector, useDispatch } from 'react-redux'


const SearchScreen=({navigation,text1}) => {

  const [filterdData,setfilterdData]= useState([]);
  const [masterData,setmasterData]= useState([]);
  const [search,setsearch]= useState('')

  useEffect(() =>{
   fetchPosts();
    return()=>{
    }
  },[])


  const fetchPosts =() =>{
    setfilterdData(movielist);
    setmasterData(movielist);
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
      SearchText.text=text;
    }else{
      setfilterdData(masterData);
      setsearch(text);
    }
  }
  return(
    
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <Provider store={store}>
        <Textthroughredux/>
         <Selectortext/>
      </Provider>
        <Text style>Search Movie</Text>
        
        <TextInput 
          style= {styles.textInputStyle}
          value={search}
          placeholder="search Here"
          underlineColorAndroid="transparent"
          onChangeText={
            (text) => searchFilter(text)
            // dispatch({type:'CHANGE_TEXT'})
           }
            
          />
             {
            filterdData.map((movie, index) => {
              if(movie.display==='true'){
                return (<TouchableOpacity  onPress={() =>{
                navigation.navigate('Movie',{ 
                  movie: movie
                }) 
                }}>
                  <ItemView  movie={movie}/>
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
