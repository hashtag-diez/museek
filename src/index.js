import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import Home from './views/Home'
import Signin from './views/Signin'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <Home />} />
      <Route path='/sign' render={() => <Signin />} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
