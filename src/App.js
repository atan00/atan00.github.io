import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import HomePage from './features/welcome/HomePage';
import ExperiencePage from './features/experience/ExperiencePage';

import './App.css';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={process.env.PUBLIC_URL + '/experience'} component={ExperiencePage} />
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
