import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';


enableScreens();

import HomeScreen from './Components/HomeScreen';
import ListScreen from './Components/List';
import SearchScreen from './Components/Search/Search';
import MovieScreen from './Components/MovieScreen';
import Counter from './Components/Count'
import Countredux from './Components/Countredux';
import SearchScreen1 from './Components/Search/Screen1';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
         
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Search1" component={SearchScreen1} />
        <Stack.Screen name="Movie" component ={MovieScreen} />
        <Stack.Screen name ="Count" component={Counter}/>
        <Stack.Screen name ="Redux" component={Countredux}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;


