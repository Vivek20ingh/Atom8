import React from 'react';
import { Text ,View,Image, Button,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';


const MovieScreen=({route: {params},navigation}) => {

    const { item } = params;
    // item is object from Movielist.js that is pass from list.js and search.js onPress

    return(
        <SafeAreaView>
            <ScrollView>
        <View>
            <View style={{marginBottom: 20,marginTop:20}}>
                <Text style={{textAlign: 'center',fontWeight:'bold',fontSize: 20}}>{item.title}</Text>
            </View>
            <View>
            <Image
                source={{ uri: item. avatar_url}}
                style={{ width: 400, height: 400 }}/>
            </View>
            <View style={{marginTop:20}}> 
                <Text 
                style={{fontWeight:'bold',fontSize: 15}}>
                Release Year: {item.year}
                    </Text>
            </View>
            <View style={{marginTop:20}}> 
                <Text 
                style={{fontWeight:'bold',fontSize: 15}}>
                Directed by: {item.directed}
                    </Text>
            </View>
            <View style={{marginTop:30}}>

                <Button
                title="Delete"
                color="#008080"
                onPress={() => {
                    item.ping='1';
                    // changed intial value of ping from 0 to 1;
                    navigation.navigate('Home') 
                }}
                />
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default MovieScreen;