import React, { Component } from 'react';
// import classnames from 'classnames';
import './style.css';
// eslint-disable-next-line
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Scholarship extends Component {

  render() {
    return (
      <div className="school">
        <Card>
          <CardHeader
            title={this.props.school}
            subtitle={this.props.population}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            Scholarships offered by {this.props.school}
            <Table>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
              >
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Type</TableHeaderColumn>
                  <TableHeaderColumn>Amount</TableHeaderColumn>
                  <TableHeaderColumn>GPA</TableHeaderColumn>
                  <TableHeaderColumn>ACT</TableHeaderColumn>
                  <TableHeaderColumn>SAT</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
                stripedRows={true}
                showRowHover={true}
              >
                <TableRow>
                  <TableRowColumn>Presidential Elite Scholar</TableRowColumn>
                  <TableRowColumn>Automatic</TableRowColumn>
                  <TableRowColumn>Full</TableRowColumn>
                  <TableRowColumn>4.0</TableRowColumn>
                  <TableRowColumn>36</TableRowColumn>
                  <TableRowColumn>1600</TableRowColumn>
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
