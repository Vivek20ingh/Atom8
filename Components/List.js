import React from 'react';
import { Text ,View,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native';
import list from './Movielist';
import ItemView from './ItemView';

const ListScreen = ({ navigation}) => {
    return (
      <View>
        <Text>Movie Lists</Text>
        <SafeAreaView>
          <ScrollView>
            {
            list.map((l, i) => {
              // l is object at ith index in list from Movielist.js
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
   
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  };


  export default ListScreen;
