import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import HomePage from './features/homepage/HomePage';
import ExperiencePage from './features/experience/ExperiencePage';


import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/experience" component={ExperiencePage} />
    </Router>
  );
}

export default App;
