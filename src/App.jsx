import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Team from './pages/Team'
import Roadmap from './pages/Roadmap'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App; 
