import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import GradeCalculate from './pages/GradeCalculate';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grade" element={<GradeCalculate />} />
    </Routes>
  );
};

export default App;