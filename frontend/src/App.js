import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

const About = lazy(() => import('./Containers/About'));
const Analysis = lazy(() => import('./Containers/Analysis'));
const Error = lazy(() => import('./Containers/Error'));
const Feed = lazy(() => import('./Containers/Feed'));
const Home = lazy(() => import('./Containers/Home'));
const Portal = lazy(() => import('./Containers/Portal'));
const Report = lazy(() => import('./Containers/Report'));
const Terms = lazy(() => import('./Containers/Terms'));

function App() {
  return (
    <div>
      <Router
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Suspense fallback={<div aria-live="polite">Loading…</div>}>
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
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
