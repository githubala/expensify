console.log("apps file");

import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers/AppRouter";



const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<AppRouter/>);

//or

//ReactDOM.createRoot(document.getElementById('app')).render(routes);