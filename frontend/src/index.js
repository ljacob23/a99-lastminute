import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavigationBar, App, Users } from './components'

ReactDOM.render(
  <Router>
    <NavigationBar />

    <Routes>
      <Route path="/" element = {<App />} />
      <Route path="/users" element = {<Users />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);