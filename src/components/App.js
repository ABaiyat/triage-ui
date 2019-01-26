import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/LoginContainer';
import Register from './Register/RegisterContainer';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/register" component={() => <Register />} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
