import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';

import "./output.css"

function App() {
  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
