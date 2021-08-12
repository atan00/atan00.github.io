import React from 'react';

import { Icon } from "@blueprintjs/core";
import linkedIn from './logo.png'

import styles from './HomePage.module.css';

class ContactBar extends React.Component {
  render() {
    return (
      <div className={styles.contactBar}>
        <a href="mailto:aytan@princeton.edu" className={styles.line}>
          <Icon icon="inbox" iconSize={Icon.MAX_SIZE} className={styles.contactIcon}/>
          <span className={styles.email}> aytan@princeton.edu </span>
        </a>
        <a href="https://linkedin.com/in/autumntan" target="_blank" rel="noopener noreferrer" className={styles.line}>
          <img src={linkedIn} alt="LinkedIn logo" width="20px" height="17px" className={styles.contactIcon} />
          <span className={styles.email}> autumntan </span>
        </a>
      </div>
    );
  }
}

export default ContactBar;
