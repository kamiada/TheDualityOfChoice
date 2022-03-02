import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {  BrowserRouter as Router } from "react-router-dom"
import App from './App.js';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>

  <Router>
    <App />
  </Router>,
  </React.StrictMode>,

  document.getElementById('root')
);
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
reportWebVitals();