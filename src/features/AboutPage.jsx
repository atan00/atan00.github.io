import React from 'react';
import { Icon } from "@blueprintjs/core";

import ContactBar from './ContactBar';
import Course from './Course';
import Activity from './Activity';

import styles from './Entries.module.css';

class AboutPage extends React.Component {
  // <div className={styles.aboutLine}>
  //   <Icon icon="clean" iconSize={Icon.MAX_SIZE} className={styles.aboutIcon}/>
  //   <span className={styles.aboutDescription}> Avid ... </span>
  // </div>
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
          <Icon icon="edit" iconSize={Icon.MAX_SIZE} className={styles.aboutIcon}/>
          <span className={styles.aboutDescription}> Relevant Coursework </span>
          <span className={styles.aboutDisclaimer}> (* for Fall 2020 courses) </span>
        </div>
        <br />
        <div className={styles.newLine}>
          <Course coursecode="COS226" coursename="Algs & Data Structures" />
          <Course coursecode="COS217" coursename="Programming Systems" />
          <Course coursecode="COS340" coursename="Reasoning About Computing" />
          <Course coursecode="COS318" coursename="Operating Systems*" />
          <Course coursecode="COS326" coursename="Functional Programming*" />
          <Course coursecode="MAT201" coursename="Multivariable Calculus" />
          <Course coursecode="MAT202" coursename="Linear Algebra" />
          <Course coursecode="ECO362" coursename="Financial Investments*" />
          <Course coursecode="ECO310" coursename="Mathematical Microeconomics" />
          <Course coursecode="ORF245" coursename="Fundamentals of Statistics" />
        </div>
        <div className={styles.aboutLine}>
          <Icon icon="clean" iconSize={Icon.MAX_SIZE} className={styles.aboutIcon}/>
          <span className={styles.aboutDescription}> Organizations & Activities </span>
        </div>
        <br />
        <div className={styles.newLine}>
          <Activity name="Tiger Capital Management" role="Senior Analyst @ I&E (Previously @ TMT)" />
          <Activity name="Princeton Splash" role="Webmaster & Treasurer" />
          <Activity name="HackPrinceton / IvyHacks" role="Experience Organizer" />
        </div>
        <ContactBar />
      </div>
    );
  }
}

export default AboutPage;
