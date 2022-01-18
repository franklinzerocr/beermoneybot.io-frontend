import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App; 
