console.log("apps file");

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
//import Counter from "./playground/counter";

const HomePage = () => {
    return <p> home page</p>
}
const ContactPage = () => {
    return <p> contact page</p>
}
const Expense = () => {
    return <p> Expense page</p>
}

const Header = () => {
    return <header> 
                <h2>
                Expensify
                </h2>
                <NavLink to="/">Dashboard </NavLink>
                <NavLink to="/contact">contact us </NavLink>
                <NavLink to="/expense">expenses</NavLink>
            </header>
}

//ReactDOM.render(<p>this is my boilerplate</p>, document.getElementById('app'));
const routes =(
     <BrowserRouter>
        <div>
            <Header/>
        <Routes>            
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/expense" element={<Expense/>}/>
            <Route path="*" element={<div>page is not found</div>} />
        </Routes>  
        </div>      
     </BrowserRouter>
);
//In the above code we have to use <Switch> tage instead of <Routes> for the react-router v5 and path="*" is not required for the unmatched url


const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(routes);

//or

//ReactDOM.createRoot(document.getElementById('app')).render(routes);