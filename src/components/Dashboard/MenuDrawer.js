import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

export default class DrawerMenu extends React.Component {

  render() {
    return (
      <div>
        <Drawer open={this.props.menuDrawerOpen}>
          <AppBar
            title="Scholarshipy"
            onLeftIconButtonClick={this.props.handleMenuDrawerToggle}
          />
          <MenuItem onClick={this.props.handleMenuDrawerToggle}>Scholarships</MenuItem>
          <MenuItem>Schools</MenuItem>
        </Drawer>
      </div>
    );
  }
}
