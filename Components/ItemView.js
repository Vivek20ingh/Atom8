import React, {useState,useEffect} from "react";  
import { TouchableOpacity,Alert} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'



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
  export default ItemView;