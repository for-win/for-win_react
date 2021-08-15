import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import lobby from './lobby/lobby'
import Navbar from './test/Navbar';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={App}/>
    <Route path='/lobby' component={lobby}/>
    <Route path='/test' component={Navbar}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
