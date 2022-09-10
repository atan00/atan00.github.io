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
          <span className={styles.aboutDescription}> Software Engineering Intern @ PDT Partners </span>
        </div>
        <br />
        <div className={styles.aboutLine}>
          <Icon icon="edit" iconSize={Icon.MAX_SIZE} className={styles.aboutIcon}/>
          <span className={styles.aboutDescription}> Relevant Coursework </span>
          {/* <span className={styles.aboutDisclaimer}> (* for Fall 2020 courses) </span> */}
        </div>
        <br />
        <div className={styles.newLine}>
          <Course coursecode="COS217" coursename="Programming Systems" />
          <Course coursecode="COS226" coursename="Algs & Data Structures" />
          <Course coursecode="COS318" coursename="Operating Systems" />
          <Course coursecode="COS324" coursename="Intro to Machine Learning" />
          <Course coursecode="COS326" coursename="Functional Programming" />
          <Course coursecode="COS333" coursename="Adv. Programming Techniques" />
          <Course coursecode="COS340" coursename="Reasoning About Computing" />
          <Course coursecode="COS398" coursename="Deep Learning & Small Data" />
          <Course coursecode="COS432" coursename="Information Security" />
          <Course coursecode="COS445" coursename="Economics and Computing" />
          <Course coursecode="ECO310" coursename="Mathematical Microeconomics" />
          <Course coursecode="ECO362" coursename="Financial Investments" />
          <Course coursecode="ECO363" coursename="Corporate Finance" />
          <Course coursecode="ECO461" coursename="Entrepreneurial Finance" />
          <Course coursecode="MAT201" coursename="Multivariable Calculus" />
          <Course coursecode="MAT202" coursename="Linear Algebra" />
          <Course coursecode="ORF245" coursename="Fundamentals of Statistics" />
          <Course coursecode="ORF309" coursename="Probability & Stochastic Sys." />
        </div>
        <div className={styles.aboutLine}>
          <Icon icon="clean" iconSize={Icon.MAX_SIZE} className={styles.aboutIcon}/>
          <span className={styles.aboutDescription}> Organizations & Activities </span>
        </div>
        <br />
        <div className={styles.newLine}>
          <Activity name="Tiger Capital Management" role="Head of Operations, Senior Analyst" />
          <Activity name="Princeton Splash" role="Webmaster & Treasurer" />
          <Activity name="HackPrinceton / IvyHacks" role="Experience Organizer" />
        </div>
        <ContactBar />
      </div>
    );
  }
}

export default AboutPage;
