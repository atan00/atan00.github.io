import React from 'react';

import { Icon } from "@blueprintjs/core";

import styles from './HomePage.module.css';

class ContactBar extends React.Component {
  render() {
    return (
      <div className={styles.contactBar}>
        <a href="mailto:aytan@princeton.edu">
          <Icon icon="inbox" iconSize={Icon.MAX_SIZE} className={styles.contactIcon}/>
        </a>
        <span className={styles.email}> aytan@princeton.edu </span>
      </div>
    );
  }
}

export default ContactBar;
