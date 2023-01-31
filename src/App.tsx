import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConstructionPage from './ConstructionPage';

import Home from './Home';

import "./output.css"

function App() {
  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" element={<ConstructionPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
