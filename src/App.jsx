import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Team from './pages/Team'
import RoadmapCabled from './pages/RoadmapCabled'
import Roadmap from './pages/Roadmap'
import Thanks from './pages/Thanks'



const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/roadmap" element={<RoadmapCabled />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/roadmap_test" element={<Roadmap />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App; 
