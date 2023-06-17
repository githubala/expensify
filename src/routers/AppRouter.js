import React from "react";
import { BrowserRouter, Route, Routes, NavLink, Navigate} from "react-router-dom";
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
                <NavLink to="/" >Dashboard </NavLink>
                <NavLink to="/contact">contact us </NavLink>
                <NavLink to="/expense">expenses</NavLink>
            </header>
}

function AppRouter () {
    return (
        <BrowserRouter>
           <div>
               <Header/>
           <Routes>            
               <Route path="/" element={<HomePage/>}/>
               <Route path="/contact" element={<ContactPage/>}/>
               <Route path="/expense" element={<Expense/>}/>
               <Route path="*" element={<Navigate to="/" />} />
           </Routes>  
           </div>      
        </BrowserRouter>
    )
        
}

export default AppRouter;

//ReactDOM.render(<p>this is my boilerplate</p>, document.getElementById('app'));
// const routes =(
//      <BrowserRouter>
//         <div>
//             <Header/>
//         <Routes>            
//             <Route path="/" element={<HomePage/>}/>
//             <Route path="/contact" element={<ContactPage/>}/>
//             <Route path="/expense" element={<Expense/>}/>
//             <Route path="*" element={<Navigate to="/" />} />
//         </Routes>  
//         </div>      
//      </BrowserRouter>
// );
//In the above code we have to use <Switch> tage instead of <Routes> for the react-router v5 and path="*" is not required for the unmatched url