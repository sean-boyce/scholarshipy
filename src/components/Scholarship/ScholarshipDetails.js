import React, { Component } from 'react';
// import classnames from 'classnames';
import './style.css';
import {Card, CardHeader, CardText} from 'material-ui/Card';
// import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
// import FlatButton from 'material-ui/FlatButton';

class ScholarshipDetails extends Component {

  render() {
    return (
      <div className='scholarship-details'>
        <Card>
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default ScholarshipDetails;
