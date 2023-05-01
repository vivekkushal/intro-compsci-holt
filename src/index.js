import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import Sort from './Sort';
import Tree from './Tree';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/sort">Sort</Link>
            </li>
            <li>
              <Link to="/">Tree</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/sort" element={<Sort />} />
          <Route path="/" element={<Tree />} />
        </Routes>
      </div>
    </Router>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
