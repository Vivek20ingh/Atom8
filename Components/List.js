import React from 'react';
import { Text ,View,SafeAreaView,ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import list from './Movielist';


const ListScreen = ({ navigation, route }) => {
    return (
      <View>
        <Text>Movie Lists</Text>
        <SafeAreaView>
          <ScrollView>
            {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.title}</ListItem.Title>
                <ListItem.Subtitle>{l.year}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
             ))}
   
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  };
  
  export default ListScreen;
