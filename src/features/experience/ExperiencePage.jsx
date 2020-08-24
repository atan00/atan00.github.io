import React from 'react';

import styles from './ExperiencePage.module.css';

class ExperiencePage extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <h1 className={styles.shadow}> Work Experience </h1>
        </div>
        <div>
          <h1 className={styles.title}> Public Comps </h1>
          <h1 className={styles.description}> Full Stack Development Intern | June 2020 - Present </h1>
          <ul className={styles.info}>
            <li> a </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ExperiencePage;
