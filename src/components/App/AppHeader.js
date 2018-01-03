import React, { Component } from 'react';
import classnames from 'classnames';
// import { Link } from 'react-router-dom';
import './style.css';
import AppBar from 'material-ui/AppBar';
import NavigationExpandMore from 'material-ui-icons/ExpandMore';
import IconButton from 'material-ui/IconButton';

class AppHeader extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <AppBar
          title="Scholarshipy"
          iconElementRight={<IconButton><NavigationExpandMore /></IconButton>}
        />
      </div>
    );
  }
}

export default AppHeader;
