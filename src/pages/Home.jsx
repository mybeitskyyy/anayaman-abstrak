import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { provincesData } from '../data';
import ProvinceCard from '../components/ProvinceCard';

const Home = ({ favorites, toggleFav }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('Semua');

  const filteredData = provincesData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchRegion = filterRegion === 'Semua' || item.region === filterRegion;
    return matchSearch && matchRegion;
  });

  const regions = ['Semua', 'Sumatera', 'Jawa', 'Bali & Nusra', 'Kalimantan', 'Sulawesi', 'Maluku', 'Papua'];

  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>Pesona Budaya Nusantara</h1>
          <p>Temukan cerita, rasa, dan tradisi dari 38 provinsi dalam satu ensiklopedia digital yang memukau.</p>
          <div className="relative w-full max-w-lg mx-auto" role="search">
            <input
              type="text"
              className="w-full px-4 py-3 pr-10 rounded-lg border border-amber-800 bg-white/80 backdrop-blur text-amber-900 placeholder-amber-900 focus:outline-none focus:ring-0 focus:ring-amber-900"
              placeholder="Cari provinsi (misal: Bali, Aceh)..."
              aria-label="Cari provinsi"
              inputMode="search"
              enterKeyHint="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-900 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-70px', position: 'relative', zIndex: 10 }}>
        <div className="filters">
          {regions.map((region) => (
            <button
              key={region}
              className={`chip ${filterRegion === region ? 'active' : ''}`}
              onClick={() => setFilterRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>
        <div className="grid">
          {filteredData.length > 0 ? (
            filteredData.map((prov) => (
              <ProvinceCard key={prov.id} data={prov} isFav={favorites.includes(prov.id)} toggleFav={toggleFav} />
            ))
          ) : (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem' }}>
              <h3 style={{ color: '#ccc' }}>Provinsi tidak ditemukan.</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;