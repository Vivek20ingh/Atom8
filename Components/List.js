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
              if(l.ping==='0'){
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
