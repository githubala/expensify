
console.log("redux");
import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from "redux";
import { Provider } from 'react-redux';

const store = createStore ((state = { count:0}, action) =>{
    // if(action.type === 'INCREMENT'){
    //     return {
    //         count: state.count+1
    //     };
    // }else{
    //     return state;
    // }
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy =  typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count+incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count-1
            }; 
        case 'RESET':
            return {
                count: 0
        };     
        default:
            return state;
    }
    console.log('running');
    return state
});

//console.log(store.getState());

//Actions - than an object that gets sent to the store
//i would like to increment the 

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

    store.dispatch({
        type:'INCREMENT',
        incrementBy:5
    });

    

    store.dispatch({
        type:'DECREMENT'
    });
    //now here below i called the unsubscribe after the the store.dispatch will not get executed
    unsubscribe();    

    store.dispatch({
        type:'INCREMENT'
    });



//const store = 
//https://github.com/sudheerj/reactjs-interview-questions

//https://programmingfields.com/use-redux-react-redux-in-react-js-with-example/