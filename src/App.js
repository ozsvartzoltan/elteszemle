import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';
import Fooldal from './pages/fooldal';
import Kapcsolat from './pages/kapcsolat';
import Home from './pages';
import Layout from './components/Layout';

export default function App() {
  return (
    <HeroUIProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Fooldal />} />
            <Route path="/kapcsolat" element={<Kapcsolat />} />
          </Routes>
        </Layout>
      </Router>
    </HeroUIProvider>
  );
}
