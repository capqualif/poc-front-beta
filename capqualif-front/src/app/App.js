import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

// import './Dashboard.css';

import Sign from '../components/layout/sign/Sign';
import Dashboard from '../components/layout/dashboard/Dashboard';

class App extends Component {
  render() {
    return (

    // TO DO : create a routes component as soon as more routes add up 
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>      
              <Route exact path='/' component={Sign} /> 
              <Route exact path='/dashboard' component={Dashboard} /> 
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
