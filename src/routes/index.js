import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import Home from '../layouts/home/index';

export default function App() {
  return (
    <Router>
      <Route path='/' component={Home}></Route>
    </Router>
  );
}
