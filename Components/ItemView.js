import React from "react";  
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