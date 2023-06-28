import React from 'react';
import ReactDOM from 'react-dom/client'
import { combineReducers, createStore } from "redux";
import { Provider } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';


//ADD_EXPENSE generator

// ADD_EXPENSE
const addExpense = (
    {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
  ) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuidv1(),
      description,
      note,
      amount,
      createdAt
    }
  });


  //REMOVE_EXPENSE
  const removeExpense =({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
  });

  //EDIT_EXPENSE
  const editExpense = (id, updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
  });

  //SET_TEXT_FILTER
  const setTextFilter =(text='')=>({
    type:'SET_TEXT_FILTER',
    text
  });
    


const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE': 
            return state.map((expense)=>{
                if(expense.id == action.id){
                    return {...expense, ...action.updates}
                } else {
                    return expense;
                }
            });
              
        default:
            return state
            
    }
}

const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };     
        default:
            return state;
            
    }
}
  


const store = createStore(
    combineReducers({
        expenses:expenseReducer,        
        filter:filterReducer
    })
);

const getVisibleExpenses=(expenses, {text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
}

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
    console.log(visibleExpenses);
});

store.dispatch(addExpense({description:'rent',note:'3rd month rent', amount:'2000'}));
store.dispatch(addExpense({description:'cold coffee',note:'coffee day', amount:'200'}));

//console.log(exp1.expense.id);

//store.dispatch(removeExpense({id:exp1.expense.id}));
//store.dispatch(editExpense(exp2.expense.id,{amount:220,note:'awesome cofee'}));

store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter(''));

const demoState = {
    expenses:[{
        id:'vxcvxcv',
        amount:58500,
        description:'asdsd',
        note:'',
        createdAt:0
    }],
    filter:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined,
    }
}


