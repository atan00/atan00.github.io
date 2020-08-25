import React from 'react';
import { Button, Collapse, H5, Pre, Switch } from "@blueprintjs/core";

import styles from './Entries.module.css';

class Entry extends React.Component {
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
      <div style={{ width: "100%", height: "100%", margin: 0 }}>
        <div className={styles.entry}>
          <Button
            onClick={this.handleClick}
            large
            icon={this.props.icon}
            className={styles.button}
            text="More"
          />
          {
            this.props.type === 'project' ?
              <div className={styles.header}>
                <h1 className={styles.titleLong}> {this.props.company} </h1>
                <h1 className={styles.description}> {this.props.tagline} </h1>
              </div>
               :
              <div className={styles.header}>
                <h1 className={styles.title}> {this.props.company} </h1>
                <h1 className={styles.description}> {this.props.role} | {this.props.dates} </h1>
              </div>
          }
          <Collapse isOpen={this.state.isOpen} keepChildrenMounted={this.state.keepChildrenMounted}>
            {this.props.bullets}
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Entry;
