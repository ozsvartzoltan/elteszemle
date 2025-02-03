import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Fooldal from './pages/fooldal';
import Kapcsolat from './pages/kapcsolat';
import Home from './pages';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Fooldal />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
        </Routes>
      </div>
    </Router>
  );
}
