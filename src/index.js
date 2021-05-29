import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import Home from './views/Home'
import Signin from './views/Signin'
import App from './views/App'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <Home />} />
      <Route path='/sign' render={() => <Signin />} />
      <Route path='/app' render={() => <App />} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
)
