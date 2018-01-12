import React, { Component } from 'react';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';
// import './style.css';
import AppBar from 'material-ui/AppBar';
import NavigationExpandMoreIcon from 'material-ui-icons/ExpandMore';
import IconButton from 'material-ui/IconButton';

class AppHeader extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Scholarshipy"
          iconElementRight={<IconButton><NavigationExpandMoreIcon /></IconButton>}
          onLeftIconButtonClick={this.props.handleMenuDrawerToggle}
        />
      </div>
    );
  }
}

export default AppHeader;
