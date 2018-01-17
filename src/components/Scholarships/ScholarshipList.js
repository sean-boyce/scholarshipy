import React, { Component } from 'react';
import * as schoolActions from '../../actions/schoolActions';
// import classnames from 'classnames';
// import styles from './style.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Scholarship from './Scholarship';
import toastr from 'toastr';

class ScholarshipList extends Component {
  state = {
    // scholarships: [{
    //   id: 1,
    //   school: 'Drexel',
    //   population: '25,000'
    // }, {
    //   id: 2,
    //   school: 'Temple',
    //   population: '15,000'
    // }]
  }

  componentWillMount(nextProps) {
    this.props.schoolActions.loadSchools();
      // .then(() => {
      //   console.log("Schools loaded successfully");
      // })
      // .catch(error => {
      //   toastr.error(error);
      // });
  }

  render() {
    let scholarships = '';
    this.props.schools ?
      scholarships = this.props.schools.map((scholarship) => (
        <Scholarship
          key={scholarship.id}
          school={scholarship.name}
          population={scholarship.type}
        />
      )) : '';
    return (
      <div className='scholarship-list'>
        {scholarships}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schools: state.schools.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    schoolActions: bindActionCreators(schoolActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScholarshipList);
