import React from 'react';

import styles from './Entries.module.css';

class Activity extends React.Component {
  render() {
    return (
      <div className={styles.activityblock}>
        <h1 className={styles.activityname}> {this.props.name} </h1>
        <span className={styles.activityrole}> {this.props.role} </span>
      </div>
    );
  }
}

export default Activity;
