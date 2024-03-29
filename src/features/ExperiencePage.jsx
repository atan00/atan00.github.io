import React from 'react';

import Entry from './Entry';
import ContactBar from './ContactBar'

import styles from './Entries.module.css';

class ExperiencePage extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <h1 className={styles.shadow}> Work Experience </h1>
        </div>
        <Entry
          icon="desktop"
          company="PDT Partners"
          role="Software Engineering Intern"
          dates="June 2022 - August 2022"
          bullets={null}
        />
        <Entry
          icon="form"
          company="Meta"
          role="Software Engineering Intern"
          dates="August 2021 - November 2021"
          bullets={(
              <ul className={styles.info}>
                <li> Optimized daily workflows for thousands of employees by automating hours‐long manual processes and improving visibility of previously‐obscure data. </li>
                <li> Pioneered an in‐demand suite of ”Pro Forms Management” features for an internal productivity tool with Hack, React, and GraphQL. </li>
                <li> Supported my team by tackling incoming bug reports, fielding product questions, and establishing ownership of the ”Pro Forms Management” features. </li>
              </ul>
          )}
        />
        <Entry
          icon="desktop"
          company="PDT Partners"
          role="Software Engineering Intern"
          dates="June 2021 - August 2021"
          bullets={null}
        />
        <Entry
          icon="trending-up"
          company="Public Comps"
          role="Full Stack Developer"
          dates="June 2020 - Present"
          bullets={(
            <ul className={styles.info}>
              <li> Build fresh benchmarking and visualization features for a Software as a Service (SaaS)-focused web application using Ruby on Rails and React Redux. </li>
              <li> Revamp UX and design aesthetic across a customer-facing Rails web application to improve user engagement and expose powerful, but underused, tools. </li>
            </ul>
          )}
        />
        <Entry
          icon="barcode"
          company="State Farm"
          role="Software Engineering Intern"
          dates="June 2020 - July 2020"
          bullets={(
            <ul className={styles.info}>
              <li> Migrated complex on-premise services to the cloud through a creative exploration and customization of AWS, Docker, and Kubernetes. </li>
              <li> Built a Java tool that expedited the underwriting process by 50% through the consolidation of required documents and automation of alert emails. </li>
            </ul>
          )}
        />
        <Entry
          icon="globe"
          company="State Farm"
          role="Software Engineering Intern"
          dates="June 2019 - July 2019"
          bullets={(
            <ul className={styles.info}>
              <li> Built and rigorously tested impactful RESTful web services with the Java Spring Framework as part of an effort to internalize customer relations, which would save the organization around $63,000/month. </li>
              <li> Designed 3 layers of application programming interfaces APIs to support the reformation of the mobile platform. </li>
              <li> Committed 2000+ lines of code throughout internship. </li>
            </ul>
          )}
        />
        <Entry
          icon="database"
          company="State Farm"
          role="Software Engineering Intern"
          dates="June 2018 - July 2018"
          bullets={(
            <ul className={styles.info}>
              <li> Developed application programming interfaces APIs and web services with Python and Django as part of transformation towards a modern data network within the organization. </li>
              <li> Created an extensive Proof of Concept with Flask frameworks. </li>
              <li> Committed 1000+ lines of code throughout internship. </li>
            </ul>
          )}
        />
        <ContactBar />
      </div>
    );
  }
}

export default ExperiencePage;
