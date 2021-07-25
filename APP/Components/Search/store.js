import 'react-native-gesture-handler';
import SearchText from './SearchText';


import { createStore } from 'redux';

const intialState = {
    counter: 0,
    text1: SearchText.text
}

const reducer =(state =intialState,action) =>{
    switch(action.type)
    {
        case 'CHANGE_TEXT':
        {
            return{
                text1: SearchText.text,
                counter: state.counter+1
            }
        }
    }
    return state
}

const store =createStore(reducer)

export default store;