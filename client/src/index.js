import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "./context/currentUser"

ReactDOM.render(
    // <BrowserRouter>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
      // </BrowserRouter>
 , document.getElementById('root')
);
{/* </BrowserRouter> */}
// 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 