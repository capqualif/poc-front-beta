import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Sign from './components/layout/sign/Sign';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Sign} /> 
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;