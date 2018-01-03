import React, { Component } from 'react';
// import classnames from 'classnames';
// import styles from './style.css';
import Scholarship from './Scholarship';

class ScholarshipList extends Component {
  state = {
    scholarships: [{
      id: 1,
      school: 'Drexel',
      population: '25,000'
    }, {
      id: 2,
      school: 'Temple',
      population: '15,000'
    }]
  }

  render() {
    const scholarships = this.state.scholarships.map((scholarship) => (
      <Scholarship
        key={scholarship.id}
        school={scholarship.school}
        population={scholarship.population}
      />
    ));
    return (
      <div>
        {scholarships}
      </div>
    );
  }
}

export default ScholarshipList;
