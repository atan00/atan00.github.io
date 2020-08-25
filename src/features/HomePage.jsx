import React from 'react';

import styles from './HomePage.module.css';

import ContactBar from './ContactBar'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}> Hi, my name is </h1>
        <div className={styles.wrapper}>
          <h1 className={styles.shadow}> Autumn. </h1>
        </div>
        <h1 className={styles.description}> A girl who codes, creates, learns, journals, photographs, and dreams ... </h1>
        <ContactBar />
      </div>
    );
  }
}

export default HomePage;
