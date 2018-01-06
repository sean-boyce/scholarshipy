import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import School from './components/Schools/School';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/school" component={School} />
      </div>
    </Router>
  )
};

export default Routes;
