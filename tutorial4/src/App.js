import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginP from './LoginP';
import ProfileP from './ProfileP';
import ProfileD from './ProfileD';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginP />} />
        <Route path="/profile" element={<ProfileP />} />
        <Route path="/profile/:id" element={<ProfileD />} />
      </Routes>
    </Router>

  );
};

export default App;
