import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Portal from './Containers/Portal';
import About from './Containers/About';
import Analysis from './Containers/Analysis';
import Home from './Containers/Home';
import Feed from './Containers/Feed';
import Report from './Containers/Report';
import Error from './Containers/Error';

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
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Helmet>
        <meta name="og:site_name" content="Green Drive Thru" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Green Drive Thru" />
        <meta name="og:description" content="ESG 報告書顧問與整合行銷、國內 ESG 趨勢分析平台以及 ESG 教育培訓等" />
        <mate name="og:url" content="https://greendrivethrough.com.tw/" />
        <meta name="og:image" content="https://greendrivethrough.com.tw/og.png" data-react-helmet="true"/>
        <meta name="og:image:width" content="800" />
        <meta name="og:image:height" content="600" />
        <meta name="og:locale" content="us" />
      </Helmet>
    </div>
  );
}

export default App;
