import React, {useState,useEffect} from "react";  
import { SafeAreaView ,StyleSheet, View,Text,TextInput} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from 'react-native-elements'

import list from "./Movielist";


const SearchScreen=() => {

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

  const ItemView = ({item}) =>{
    return(
     
     <ListItem>
     <Avatar source={{uri: item.avatar_url}} />
       <ListItem.Content>
       <ListItem.Title>{item.title}</ListItem.Title>
       <ListItem.Subtitle>{item.year}</ListItem.Subtitle>
     </ListItem.Content>
     </ListItem>
     

    )
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
        <FlatList
         data={filterdData}
         keyExtractor={(item,index) => index.toString()}
        
        renderItem={ItemView}
        />
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
