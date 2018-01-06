import React, { Component } from 'react';
import './style.css';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import CloseIcon from 'material-ui-icons/Close';
import IconButton from 'material-ui/IconButton';

export default class FilterDrawer extends Component {

  render() {
    return (
      <div>
        <RaisedButton
          className='FilterButton'
          label="Search Filter"
          onClick={this.props.handleFilterDrawerToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.props.filterDrawerOpen} >
          <AppBar
            title="Filter"
            iconElementLeft={<IconButton><CloseIcon /></IconButton>}
            onLeftIconButtonClick={this.props.handleFilterDrawerToggle}
          />
        </Drawer>
      </div>
    );
  }
}
