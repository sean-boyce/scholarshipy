import React, { Component } from 'react';
import classnames from 'classnames';
import AppHeader from './AppHeader';
import MenuDrawer from './MenuDrawer';
import './style.css';

class App extends Component {

  state = {
    menuDrawerOpen: false,
  }

  handleMenuDrawerToggle = () => {
    this.setState({menuDrawerOpen: !this.state.menuDrawerOpen});
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <AppHeader handleMenuDrawerToggle={this.handleMenuDrawerToggle} />

        <MenuDrawer menuDrawerOpen={this.state.menuDrawerOpen} handleMenuDrawerToggle={this.handleMenuDrawerToggle} />
      </div>
    );
  }
}

export default App;
