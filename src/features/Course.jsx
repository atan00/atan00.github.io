import React from 'react';

import styles from './Entries.module.css';

class Course extends React.Component {
  render() {
    return (
      <div className={styles.courseblock}>
        <h1 className={styles.coursecode}> {this.props.coursecode} </h1>
        <span className={styles.coursename}> {this.props.coursename} </span>
      </div>
    );
  }
}

export default Course;
