import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import HomePage from './components/layouts/HomePage';
import Registration from './components/userDetails/Registration';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Registration formToShow="register" />} />
          <Route path="/login" element={<Registration formToShow="login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
