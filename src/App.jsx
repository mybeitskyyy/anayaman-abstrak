import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProvinceDetail from './pages/ProvinceDetail';
import About from './pages/About';

const App = () => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('nusantaraFavs');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => { localStorage.setItem('nusantaraFavs', JSON.stringify(favorites)); }, [favorites]);
  const toggleFav = (id) => { setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])); };

  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 300px)' }}>
        <Routes>
          <Route path="/" element={<Home favorites={favorites} toggleFav={toggleFav} />} />
          <Route path="/provinsi/:slug" element={<ProvinceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="container" style={{ padding: '100px', textAlign: 'center' }}><h2>404 - Halaman Hilang</h2></div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;