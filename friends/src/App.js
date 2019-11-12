import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Authentican Friends App</h1>
        <div className='nav'>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/protected'>Friends List</NavLink>
          <NavLink to ='/'>Log Out</NavLink>
        </div>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;