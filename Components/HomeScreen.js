import 'react-native-gesture-handler';
import React from 'react';



import { View,Text,Button,StyleSheet,TextInput } from 'react-native';




const HomeScreen = ({ navigation }) => {
 
  const [textInputValue, setTextInputValue] = React.useState('');
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

        <View style={{margin:20}}>
          <Text >{textInputValue}</Text>
        </View>

        <View>
        <TextInput 
          style= {styles.textInputStyle}
          value={textInputValue}
          underlineColorAndroid="transparent"
          onChangeText={text => setTextInputValue(text)}
	        placeholder="Insert your text!"
          />
        </View>
      </View>
    );
  };

  const styles =StyleSheet.create({
    textInputStyle:{
      height: 50,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: 'white'
    }
  });

  export  default HomeScreen;


