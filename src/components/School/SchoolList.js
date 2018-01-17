import React, { Component } from 'react';
import * as schoolActions from '../../actions/schoolActions';
// import classnames from 'classnames';
// import styles from './style.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import School from './School';
// import toastr from 'toastr';

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
    let schools = this.props.schools ? this.props.schools.map((school) => (
        <School
          key={school.id}
          school={school.name}
          population={school.type}
        />
      )) : '';
    return (
      <div className='school-list'>
        {schools}
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
