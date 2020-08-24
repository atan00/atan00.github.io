import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import HomePage from './features/welcome/HomePage';
import ExperiencePage from './features/experience/ExperiencePage';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/experience" component={ExperiencePage} />
      </Switch>
    </Router>
  );
  // <Router>
  //   <Switch>
  //     <Route exact path="/" component={HomePage} />
  //     <Route path="/experience" component={ExperiencePage} />
  //   </Switch>
  // </Router>
}

export default App;