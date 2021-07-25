import 'react-native-gesture-handler';


import { createStore } from 'redux';

const intialState = {
    counter: 0
}

const reducer =(state =intialState,action) =>{
    switch(action.type)
    {
        case 'INCREASE_COUNTER':
            return {counter: state.counter+1}
        case 'DECREASE_COUNTER':
            return {counter: state.counter-1}
    }
    return state
}

const store =createStore(reducer)

export default store;