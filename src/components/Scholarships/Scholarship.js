import React, { Component } from 'react';
// import classnames from 'classnames';
import './style.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

class Scholarship extends Component {

  render() {
    return (
      <div className="scholarship">
        <Card>
          <CardHeader
            title={this.props.school}
            subtitle={this.props.population}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Scholarships offered by {this.props.school}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>

          </CardText>
        </Card>
      </div>
    );
  }
}

export default Scholarship;
