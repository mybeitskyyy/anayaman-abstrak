import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
// Import icon baru: Gamepad2 (Mainan), Shirt (Baju), Image (Gambar umum)
import { MapPin, Heart, ArrowLeft, Utensils, Music, Home as HomeIcon, Share2, Search, Globe, Code, Users, Instagram, Twitter, Facebook, Mail, Menu, X, Gamepad2, Shirt } from 'lucide-react';
import { provincesData } from './data';
import './App.css';

// --- COMPONENTS ---

// 1. Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <MapPin color="#C67C4E" size={28} fill="#C67C4E" strokeWidth={1} style={{stroke:'white'}} /> NUSANTARA
        </Link>
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#2D2420" /> : <Menu size={28} color="#2D2420" />}
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Beranda</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>Tentang</Link>
          <a href="#footer" onClick={() => setIsOpen(false)}>Kontak</a>
        </div>
      </div>
    </nav>
  );
};

// 2. Footer Component
const Footer = () => (
  <footer className="footer" id="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <h3>Nusantara.</h3>
          <p style={{lineHeight:'1.6', maxWidth:'300px'}}>
            Melestarikan kekayaan budaya Indonesia dalam arsip digital yang modern. Mari jelajahi keindahan negeri.
          </p>
          <div className="social-icons">
            <Instagram size={20} /> <Twitter size={20} /> <Facebook size={20} />
          </div>
        </div>
        <div>
          <h4 style={{color:'white', marginBottom:'20px', fontFamily:'Plus Jakarta Sans'}}>Jelajah</h4>
          <Link to="/">Beranda</Link>
          <Link to="/about">Tentang Kami</Link>
        </div>
        <div>
          <h4 style={{color:'white', marginBottom:'20px', fontFamily:'Plus Jakarta Sans'}}>Hubungi Kami</h4>
          <p style={{display:'flex', gap:'10px', marginBottom:'10px'}}><Mail size={18}/> halo@nusantara.id</p>
        </div>
      </div>
      <div style={{borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'20px', textAlign:'center', fontSize:'0.9rem', color:'#888'}}>
        &copy; 2025 Nusantara Project. All Rights Reserved.
      </div>
    </div>
  </footer>
);

// 3. Card Component
const ProvinceCard = ({ data, isFav, toggleFav }) => {
  return (
    <div className="card">
      <button 
        className="fav-btn" 
        onClick={(e) => { 
          e.preventDefault(); 
          e.stopPropagation();
          toggleFav(data.id); 
        }}
      >
        <Heart size={22} fill={isFav ? "#e74c3c" : "none"} color={isFav ? "#e74c3c" : "#2D2420"} />
      </button>

      <Link to={`/provinsi/${data.slug}`} className="card-link">
        <div className="card-img-wrapper">
          <img src={data.coverImg} alt={data.name} loading="lazy" />
        </div>
        <div className="card-body">
          <span className="card-region">{data.region}</span>
          <h3>{data.name}</h3>
          <div className="card-capital">
            <MapPin size={16} /> {data.capital}
          </div>
        </div>
      </Link>
    </div>
  );
};

// 4. Home Page
const Home = ({ favorites, toggleFav }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("Semua");

  const filteredData = provincesData.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchRegion = filterRegion === "Semua" || item.region === filterRegion;
    return matchSearch && matchRegion;
  });
  const regions = ["Semua", "Sumatera", "Jawa", "Bali & Nusra", "Kalimantan", "Sulawesi", "Maluku", "Papua"];

  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>Pesona Budaya Nusantara</h1>
          <p>Temukan cerita, rasa, dan tradisi dari 38 provinsi dalam satu ensiklopedia digital yang memukau.</p>
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input type="text" className="search-bar" placeholder="Cari provinsi (misal: Bali, Aceh)..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="container" style={{marginTop: '-40px', position:'relative', zIndex:10}}>
        <div className="filters">
          {regions.map(region => (
            <button key={region} className={`chip ${filterRegion === region ? 'active' : ''}`} onClick={() => setFilterRegion(region)}>
              {region}
            </button>
          ))}
        </div>
        <div className="grid">
          {filteredData.length > 0 ? (
            filteredData.map(prov => (
              <ProvinceCard key={prov.id} data={prov} isFav={favorites.includes(prov.id)} toggleFav={toggleFav} />
            ))
          ) : (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding:'3rem' }}><h3 style={{color:'#ccc'}}>Provinsi tidak ditemukan.</h3></div>
          )}
        </div>
      </div>
    </>
  );
};

// 5. Detail Page
const ProvinceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = provincesData.find(p => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!data) return <div className="container" style={{padding:'5rem'}}>Provinsi tidak ditemukan.</div>;

  return (
    <div>
      <div className="detail-header">
        <img src={data.coverImg} alt={data.name} className="detail-cover" />
        <div className="detail-overlay"></div>
        <div className="header-content">
          <button onClick={() => navigate(-1)} className="btn" style={{background:'rgba(255,255,255,0.2)', backdropFilter:'blur(4px)', color:'white', marginBottom:'1.5rem', border:'1px solid rgba(255,255,255,0.3)'}}>
            <ArrowLeft size={18} /> Kembali
          </button>
          <div style={{textTransform:'uppercase', letterSpacing:'2px', fontWeight:'600', marginBottom:'10px', color:'#D4AF37'}}>{data.region}</div>
          <h1>{data.name}</h1>
          <p><MapPin size={20} color="#D4AF37" fill="#D4AF37" /> {data.capital}, Indonesia</p>
        </div>
      </div>

      <div className="container content-wrapper">
        <main>
          {/* Sekilas Pandang */}
          <div className="article-card">
            <h2 className="section-title" style={{marginTop:0}}><Globe size={28}/> Sekilas Pandang</h2>
            <p className="article-text">{data.story}</p>
            <p className="article-text">{data.desc}</p>
          </div>

          {/* FEATURE: RUMAH ADAT VISUAL */}
          <div className="article-card">
            <h2 className="section-title"><HomeIcon size={28}/> Rumah Adat</h2>
            <div className="house-card-visual">
              <img src={data.details.house.img} alt={data.details.house.name} />
              <div className="house-info">
                <h3>{data.details.house.name}</h3>
                <p>{data.details.house.desc}</p>
              </div>
            </div>
          </div>

          {/* FEATURE: PAKAIAN ADAT */}
          <div className="article-card">
            <h2 className="section-title"><Shirt size={28}/> Pakaian Adat</h2>
            <div className="clothing-container">
              <img src={data.details.clothing.img} alt={data.details.clothing.name} className="clothing-img" />
              <div className="clothing-text">
                <h3>{data.details.clothing.name}</h3>
                <p>{data.details.clothing.desc}</p>
              </div>
            </div>
          </div>

          {/* Kuliner */}
          <div className="article-card">
            <h2 className="section-title"><Utensils size={28}/> Kuliner Legendaris</h2>
            <div className="food-grid">
              {data.details.food.map((item, idx) => (
                <div key={idx} className="item-card">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <strong style={{display:'block', fontSize:'1.1rem', color:'var(--primary)'}}>{item.name}</strong>
                    <small style={{color:'#666', lineHeight:'1.4', display:'block'}}>{item.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURE: PERMAINAN NUSANTARA */}
          <div className="article-card">
            <h2 className="section-title"><Gamepad2 size={28}/> Permainan Tradisional</h2>
            <div className="games-grid">
              {data.details.games.map((game, idx) => (
                <div key={idx} className="game-card">
                  <strong>{game.name}</strong>
                  <p>{game.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Seni & Tradisi */}
          <div className="article-card">
            <h2 className="section-title"><Music size={28}/> Seni & Tradisi</h2>
            <div style={{display:'grid', gap:'15px'}}>
              {data.details.arts.map((art, idx) => (
                <div key={idx} style={{display:'flex', gap:'15px', alignItems:'center', borderBottom:'1px dashed #eee', paddingBottom:'15px'}}>
                  <div style={{background:'var(--primary)', color:'white', width:'40px', height:'40px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>{idx + 1}</div>
                  <div><strong style={{fontSize:'1.1rem'}}>{art.name}</strong><p style={{color:'#666', fontSize:'0.95rem', margin:0}}>{art.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h3>Info Singkat</h3>
            {/* Update akses data.details.house.name karena house sekarang object */}
            <div className="info-row"><div className="info-icon"><HomeIcon size={20}/></div><div><small style={{color:'#999', fontSize:'0.7rem'}}>RUMAH ADAT</small><strong style={{display:'block'}}>{data.details.house.name}</strong></div></div>
            <div className="info-row"><div className="info-icon"><MapPin size={20}/></div><div><small style={{color:'#999', fontSize:'0.7rem'}}>IBUKOTA</small><strong style={{display:'block'}}>{data.capital}</strong></div></div>
            <div style={{marginTop:'2rem', textAlign:'left'}}><h4 style={{marginBottom:'10px', fontSize:'1rem'}}>Destinasi Populer</h4><div style={{display:'flex', flexWrap:'wrap', gap:'8px'}}>{data.details.tourism.map((t, i) => (<span key={i} style={{background:'#F5F5F5', padding:'6px 12px', borderRadius:'6px', fontSize:'0.85rem', color:'#555'}}>{t}</span>))}</div></div>
            <button className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'2rem'}}><Share2 size={18} /> Bagikan</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

// 6. About Page
const About = () => (
  <div className="container" style={{paddingTop: '8rem'}}>
    <div style={{textAlign:'center', marginBottom:'4rem'}}>
      <h1 style={{fontSize:'3.5rem', marginBottom:'1rem'}}>Tentang Nusantara</h1>
      <p style={{fontSize:'1.2rem', color:'#777', maxWidth:'700px', margin:'0 auto'}}>Sebuah inisiatif digital untuk merayakan keberagaman budaya Indonesia.</p>
    </div>
    <div style={{ maxWidth: '900px', margin: '0 auto 6rem' }}>
      <div className="article-card">
        <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Globe size={32} color="var(--accent)" /> Misi Kami</h2>
        <p className="article-text">Indonesia adalah zamrud khatulistiwa dengan ribuan pulau dan budaya. <strong>Nusantara Project</strong> hadir untuk mendokumentasikan kekayaan kuliner, seni, dan tradisi dari Sabang sampai Merauke.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="article-card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Code color="var(--secondary)"/> Teknologi</h3>
          <ul style={{ marginLeft: '20px', color: '#555', lineHeight:'1.8' }}><li>React JS + Vite</li><li>React Router Dom 6</li><li>Lucide Icons</li><li>Modern Glassmorphism CSS</li></ul>
        </div>
        <div className="article-card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Users color="var(--secondary)" /> Tim Creator</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>Dibuat dengan passion untuk budaya dan teknologi.</p>
          <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', borderBottom:'1px solid', fontWeight:'bold', display:'inline-block', marginTop:'10px' }}>Gabung Komunitas</a>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN APP ---
const App = () => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('nusantaraFavs');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => { localStorage.setItem('nusantaraFavs', JSON.stringify(favorites)); }, [favorites]);
  const toggleFav = (id) => { setFavorites(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]); };

  return (
    <Router>
      <Navbar />
      <div style={{minHeight: 'calc(100vh - 300px)'}}>
        <Routes>
          <Route path="/" element={<Home favorites={favorites} toggleFav={toggleFav} />} />
          <Route path="/provinsi/:slug" element={<ProvinceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="container" style={{padding:'100px', textAlign:'center'}}><h2>404 - Halaman Hilang</h2></div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;