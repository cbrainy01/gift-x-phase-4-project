import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
// import { CurrentUserProvider } from "./context/currentUser"
// import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.render(
    <Router>
     {/* <CurrentUserProvider> */}
      <App />
     {/* </CurrentUserProvider> */}
     </Router>
 , document.getElementById('root')
);
{/* </BrowserRouter> */}
// 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 