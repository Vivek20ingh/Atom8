import React, {useState,useEffect} from "react";  
import { SafeAreaView ,StyleSheet, View,Text,TextInput, TouchableOpacity,Button} from 'react-native';
import ItemView from "./ItemView"
import SearchText from "./SearchText";
import movielist from "./Movielist";

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
      <View>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home',{search: search})} />
      </View>
      <View style={styles.container}>

        <Text style>Search Movie</Text>
        
        <TextInput 
          style= {styles.textInputStyle}
          value={search}
          placeholder="search Here"
          underlineColorAndroid="transparent"
          onChangeText={
            (text) => searchFilter(text) }
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
