import React from 'react';
import { Icon } from "@blueprintjs/core";

import Entry from './Entry';
import ContactBar from './ContactBar'

import styles from './Entries.module.css';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <h1 className={styles.shadow}> About Me </h1>
        </div>
        <div className={styles.aboutLine}>
          <Icon icon="learning" iconSize={Icon.MAX_SIZE} className={styles.aboutIcon}/>
          <span className={styles.aboutDescription}> CS @ Princeton (Class of 2023)</span>
        </div>
        <br />
        <div className={styles.aboutLine}>
          <Icon icon="code" iconSize={Icon.MAX_SIZE} className={styles.aboutIcon}/>
          <span className={styles.aboutDescription}> Full Stack Intern @ Public Comps </span>
        </div>
        <br />
        <div className={styles.aboutLine}>
          <Icon icon="map-marker" iconSize={Icon.MAX_SIZE} className={styles.aboutIcon}/>
          <span className={styles.aboutDescription}> Quarantining @ Dallas, TX </span>
        </div>
        <br />  
        <ContactBar />
      </div>
    );
  }
}

export default AboutPage;
