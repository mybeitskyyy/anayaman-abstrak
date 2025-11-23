import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <h3>Nusantara.</h3>
          <p style={{ lineHeight: '1.6', maxWidth: '300px' }}>
            Melestarikan kekayaan budaya Indonesia dalam arsip digital yang modern. Mari jelajahi keindahan negeri.
          </p>
          <div className="social-icons">
            <Instagram size={20} /> <Twitter size={20} /> <Facebook size={20} />
          </div>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '20px', fontFamily: 'Plus Jakarta Sans' }}>Jelajah</h4>
          <Link to="/">Beranda</Link>
          <Link to="/about">Tentang Kami</Link>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '20px', fontFamily: 'Plus Jakarta Sans' }}>Hubungi Kami</h4>
          <p style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><Mail size={18} /> halo@nusantara.id</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
        &copy; 2025 Nusantara Project. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;