import React from 'react';
import App from './containers/AppContainer';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import School from './components/Schools/School';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route component={App} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/schools" component={School} />
        <Redirect from="*" to="/" />
      </div>
    </Router>
  )
};

export default Routes;
