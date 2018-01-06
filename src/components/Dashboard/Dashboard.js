import React, { Component } from 'react';
import './style.css';

import AppHeader from './AppHeader';
import ScholarshipList from '../Scholarships/ScholarshipList';
import MenuDrawer from './MenuDrawer';
import FilterDrawer from './FilterDrawer';

export default class Dashboard extends Component {

  state = {
    menuDrawerOpen: false,
    filterDrawerOpen: false
  }

  handleMenuDrawerToggle = () => {
    this.setState({menuDrawerOpen: !this.state.menuDrawerOpen});
  }

  handleFilterDrawerToggle = () => {
    this.setState({filterDrawerOpen: !this.state.filterDrawerOpen});
  }

  render() {
    return (
      <div>
        <AppHeader handleMenuDrawerToggle={this.handleMenuDrawerToggle} />

        <MenuDrawer menuDrawerOpen={this.state.menuDrawerOpen} handleMenuDrawerToggle={this.handleMenuDrawerToggle} />

        <FilterDrawer filterDrawerOpen={this.state.filterDrawerOpen} handleFilterDrawerToggle={this.handleFilterDrawerToggle} />

        <ScholarshipList />
      </div>
    )
  }
}
