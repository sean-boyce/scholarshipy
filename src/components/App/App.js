import React, { Component } from 'react';
import classnames from 'classnames';
// import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './style.css';

class App extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <Dashboard />
      </div>
    );
  }
}

export default App;
