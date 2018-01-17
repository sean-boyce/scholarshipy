import React from 'react';
import App from './containers/AppContainer';
import Dashboard from './components/Dashboard/Dashboard';
import ScholarshipDetails from './components/Scholarships/ScholarshipDetails';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route component={App} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/scholarships" component={ScholarshipDetails} />
        <Redirect from="*" to="/" />
      </div>
    </Router>
  )
};

export default Routes;
