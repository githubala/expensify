console.log("apps file");

import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({description:'water bill'}));
store.dispatch(addExpense({description:'gas bill'}));

store.dispatch(setTextFilter('water'));

//console.log(store.getState());
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);

console.log(visibleExpenses);


const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<AppRouter/>);

//or

//ReactDOM.createRoot(document.getElementById('app')).render(routes);