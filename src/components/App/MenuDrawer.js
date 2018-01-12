import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

export default class DrawerMenu extends React.Component {

  render() {
    return (
      <div>
        <Drawer open={this.props.menuDrawerOpen}>
          <AppBar
            title="Scholarshipy"
            onLeftIconButtonClick={this.props.handleMenuDrawerToggle}
          />
          <MenuItem containerElement={<Link to='/' />}>Scholarships</MenuItem>
          <MenuItem containerElement={<Link to='/schools' />}>Schools</MenuItem>
        </Drawer>
      </div>
    );
  }
}
