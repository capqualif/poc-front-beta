import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

import Sign from '../components/layout/sign/Sign';
import Dashboard from '../components/layout/dashboard/Dashboard';
import Error from '../components/layout/error/Error';

class App extends Component {
  render() {
    return (

    // TO DO : create a routes component as soon as more routes add up 
      <Provider store={store}>
        <Router>
          <section>
            <Switch>      
              <Route exact path='/' component={Sign} /> 
              <Route exact path='/dashboard' component={Dashboard} /> 
              <Route exact path='/error' component={Error} /> 
            </Switch>
          </section>
        </Router>
      </Provider>
    );
  }
}

export default App;
