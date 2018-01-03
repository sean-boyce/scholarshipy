import React, { Component } from 'react';
import classnames from 'classnames';
// import { Link } from 'react-router-dom';
import './style.css';
import AppHeader from './AppHeader';
import ScholarshipList from '../Scholarship/ScholarshipList';

class App extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <AppHeader />

        <ScholarshipList />
      </div>
    );
  }
}

export default App;
