import 'react-native-gesture-handler';
import React from 'react';


import { View,Text,StyleSheet, Button } from 'react-native';



const HomeScreen = ({ navigation }) => {
    return (
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

      </View>
    );
  };

  export  default HomeScreen;


