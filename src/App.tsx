import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from '../src/pages/LoginPage';
import MainPage from '../src/pages/MainPage'
import UpdateCVPage from './pages/UpdateVCPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={LoginPage}></Route>
        <Route exact={true} path="/home" component={MainPage}></Route>
        <Route exact={true} path="/updateCV" component={UpdateCVPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
