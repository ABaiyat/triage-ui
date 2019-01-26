import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/LoginContainer';
import Register from './Register/RegisterContainer';
import Navigation from './Navigation/NavigationContainer';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/register" component={() => <Register />} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
