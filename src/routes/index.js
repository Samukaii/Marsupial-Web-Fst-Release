import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from '../layouts/home';

export default function App() {
  return (
    <Router>
      <Route path='/' component={Home}></Route>
    </Router>
  );
}
