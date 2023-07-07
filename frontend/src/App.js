import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Portal from './Containers/Portal';
import About from './Containers/About';
import Analysis from './Containers/Analysis';
import Home from './Containers/Home';
import Feed from './Containers/Feed';
import Report from './Containers/Report';
import Error from './Containers/Error';
import Terms from './Containers/Terms'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/portal" element={<Portal />} />
          <Route path="/about" element={<About />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/report" element={<Report />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
