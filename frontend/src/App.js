import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlaces'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route >
        <Route path='/places/new' exact>
          <NewPlace />
        </Route >
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App

