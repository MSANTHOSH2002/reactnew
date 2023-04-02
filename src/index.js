import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; 
// import My from './components/test1';  
// import {MyClass,Day as dy} from './components/test2';  

import reportWebVitals from './reportWebVitals';

import Product from './components/product';
import Header from './components/appbar'; 
import SearchAppBar from './components/appbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Header/> */} 
  <SearchAppBar/>
    <Product/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
