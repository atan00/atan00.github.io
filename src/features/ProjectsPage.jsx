import React from 'react';
import { Button, Collapse } from "@blueprintjs/core";

import Entry from './Entry';

import styles from './Entries.module.css';

class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <h1 className={styles.shadow}> Projects </h1>
        </div>
        <Entry
          icon="mugshot"
          type="project"
          company="Grouper"
          tagline="Meet Your Organization"
          bullets={(
            <ul className={styles.info}>
              <li> Inspiration: As many university campuses remain closed, many student groups are forced to move operations online. Especially among
                large organizations, maintaining and building friendships and rapport within the group are incredibly more difficult. Additionally, as new members join the club, reaching out to other members will be daunting. </li>
              <li> Solution: Grouper compiles profiles of members across an organization and presents them in a clean arrangement. With the matchmaking functionality, two members are randomly paired together and
                encouraged to meet virtually. Whether matchmaking in a speed-dating style event or once a month, club members can meet new people and preserve the group's sense of community, despite a remote environment. </li>
              <li> Built with Ruby on Rails & PostgreSQL. </li>
            </ul>
          )}
        />
        <Entry
          icon="time"
          type="project"
          company="Prodo"
          tagline="Pomodoro for You"
          bullets={(
            <ul className={styles.info}>
              <li> Inspiration: The Pomodoro Technique has been a blessing for my prodictivity, ever since I first discovered the technique in my junior year of high school. Pomodoro timers that I found were clunky, busy, and
                worked poorly when I attempted to incorporate them into my workflow. </li>
              <li> Solution: Prodo is a minimal, comfortable execution of a Pomodoro timer & task tracker that is simple to adopt. Additionally, the application connects to Spotify to track user’s music and listening trends,
                both historical and recent, and recommend music suited for concentration. </li>
              <li> Built with ReactJS. </li>
            </ul>
          )}
        />
        <Entry
          icon="console"
          type="project"
          company="Linux Shell"
          tagline="Minimal, Interactive Linux Shell"
          bullets={(
            <ul className={styles.info}>
              <li> Capstone partner project for COS 217: Introduction to Programming Systems. </li>
              <li> Designed and implemented a lexical and syntactical analyzer to handle external commands, shell built-in commands, input & output redirection, and signals. If the input given was invalid, appropriate error
                handling and memory management was enforced. </li>
              <li> Built with C. </li>
            </ul>
          )}
        />
        <Entry
          icon="floppy-disk"
          type="project"
          company="Burrows-Wheeler"
          tagline="Data Compression Algorithm"
          bullets={(
            <ul className={styles.info}>
              <li> Capstone project for COS 226: Algorithms and Data Structures. </li>
              <li> Combined three algorithmic components: Burrows-Wheeler transform, move-to-front encoding, and Huffman compression. When processed by the algorithm, Moby Dick had a compression ratio of 0.347. </li>
              <li> Built with Java (most significant digit (MSD) radix sort, binary heaps & tries). </li>
            </ul>
          )}
        />
        <Entry
          icon="camera"
          type="project"
          company="Seam Carving"
          tagline="Content-Aware Image Resizing"
          bullets={(
            <ul className={styles.info}>
              <li> Project for COS 226: Algorithms and Data Structures. </li>
              <li> Implemented the seam carving technique, which preserves the most interesting features of an image, unlike traditional image resizing. Vertical and horizontal "seams" of pixels with low energy,
                or of low importance, are continually removed until the desired size is achieved. </li>
              <li> Built with Java (Djikstra's algorithm, priority queues). </li>
            </ul>
          )}
        />
      </div>
    );
  }
}

export default ProjectsPage;
