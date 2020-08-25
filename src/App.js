import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import HomePage from './features/HomePage';
import ExperiencePage from './features/ExperiencePage';
import ProjectsPage from './features/ProjectsPage';
import AboutPage from './features/AboutPage';

import './App.css';

function App() {
  return (
    <Router basename="/">
      <ul className="nav-bar">
        <li className="nav-tab"><Link to="/projects" className="nav-link">Projects</Link></li>
        <li className="nav-tab"><Link to="/experience" className="nav-link">Experience</Link></li>
        <li className="nav-tab"><Link to="/about" className="nav-link">About Me</Link></li>
        <li className="nav-tab"><Link to="/" className="nav-link">Home</Link></li>
      </ul>
      <Route exact path="/" component={HomePage} />
      <Route path="/experience" component={ExperiencePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/about" component={AboutPage} />
    </Router>
  );
}

export default App;
