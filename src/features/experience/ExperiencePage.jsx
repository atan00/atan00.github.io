import React from 'react';
import { Button, Collapse, H5, Pre, Switch } from "@blueprintjs/core";

import styles from './ExperiencePage.module.css';

class ExperiencePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      keepChildrenMounted: false,
    };
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <h1 className={styles.shadow}> Work Experience </h1>
        </div>
        <div style={{ width: "100%", height: "100%", margin: 0 }}>
            <Button onClick={this.handleClick}>{this.state.isOpen ? "Hide" : "Show"} build logs</Button>
            <Collapse isOpen={this.state.isOpen} keepChildrenMounted={this.state.keepChildrenMounted}>
                <Pre>
                    [11:53:30] Finished 'typescript-bundle-blueprint' after 769 ms
                    <br />
                    [11:53:30] Starting 'typescript-typings-blueprint'...
                    <br />
                    [11:53:30] Finished 'typescript-typings-blueprint' after 198 ms
                    <br />
                    [11:53:30] write ./blueprint.css
                    <br />
                    [11:53:30] Finished 'sass-compile-blueprint' after 2.84 s
                </Pre>
            </Collapse>
        </div>
        <div>
          <div className={styles.headline}>
            <h1 className={styles.title}> Public Comps </h1>
            <h1 className={styles.description}> Full Stack Development Intern | June 2020 - Present </h1>
          </div>
          <ul className={styles.info}>
            <li> Build fresh benchmarking and visualization features for a Software as a Service (SaaS)-focused web application using Ruby on Rails and React Redux. </li>
            <li> Revamp UX and design aesthetic across a customer-facing Rails web application to improve user engagement and expose powerful, but underused, tools. </li>
          </ul>
        </div>
        <div>
          <h1 className={styles.title}> State Farm </h1>
          <h1 className={styles.description}> Software Engineering Intern | June 2020 - July 2020 </h1>
          <ul className={styles.info}>
            <li> Migrated complex on-premise services to the cloud through a creative exploration and customization of AWS, Docker, and Kubernetes. </li>
            <li> Built a Java tool that expedited the underwriting process by 50% through the consolidation of required documents and automation of alert emails. </li>
          </ul>
        </div>
        <div>
          <h1 className={styles.title}> State Farm </h1>
          <h1 className={styles.description}> Software Engineering Intern | June 2019 - July 2019 </h1>
          <ul className={styles.info}>
            <li> Built impactful RESTful web services with the Java Spring Framework. </li>
            <li> Designed 3 layers of application programming interfaces APIs to support the reformation of the mobile platform. </li>
          </ul>
        </div>
        <div>
          <h1 className={styles.title}> State Farm </h1>
          <h1 className={styles.description}> Software Engineering Intern | June 2018 - July 2018 </h1>
          <ul className={styles.info}>
            <li> Developed application programming interfaces APIs and web services with Python and Django as part of transformation towards a modern data network within the organization. </li>
            <li> Designed 3 layers of application programming interfaces APIs to support the reformation of the mobile platform. </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ExperiencePage;
