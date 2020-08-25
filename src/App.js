import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import HomePage from './features/welcome/HomePage';
import ExperiencePage from './features/experience/ExperiencePage';

import './App.css';

function App() {
  return (
    <Router basename="/">
      <ul className="nav-bar">
        <li className="nav-tab"><Link to="/experience" className="nav-link">Experience</Link></li>
        <li className="nav-tab"><Link to="/" className="nav-link">Home</Link></li>
      </ul>
      <Route exact path="/" component={HomePage} />
      <Route path="/experience" component={ExperiencePage} />
    </Router>
  );
}

export default App;
