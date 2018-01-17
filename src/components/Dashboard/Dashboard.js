import React, { Component } from 'react';
import './style.css';

import FilterDrawer from './FilterDrawer';
import SchoolList from '../School/SchoolList';

export default class Dashboard extends Component {

  state = {
    filterDrawerOpen: false
  }

  handleFilterDrawerToggle = () => {
    this.setState({filterDrawerOpen: !this.state.filterDrawerOpen});
  }

  render() {
    return (
      <div>
        <FilterDrawer filterDrawerOpen={this.state.filterDrawerOpen} handleFilterDrawerToggle={this.handleFilterDrawerToggle} />

        <SchoolList />
      </div>
    )
  }
}
