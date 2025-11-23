import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MapPin, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="container nav-content px-[15px]">
                <Link to="/" className="logo">
                    <MapPin color="#C67C4E" size={28} fill="#C67C4E" strokeWidth={1} style={{ stroke: 'white' }} /> NUSANTARA
                </Link>
                <button
                    className="mobile-menu-btn"
                    aria-expanded={isOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} color="#2D2420" /> : <Menu size={28} color="#2D2420" />}
                </button>
                <div id="primary-navigation" className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `no-underline font-semibold transition-all py-2 rounded-full ${
                                isActive ? 'text-amber-900' : 'text-amber-900/50'
                            }`
                        }
                    >
                        Beranda
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `no-underline font-semibold transition-all py-2 rounded-full ${
                                isActive ? 'text-amber-900' : 'text-amber-900/50'
                            }`
                        }
                    >
                        Tentang
                    </NavLink>
                    {/* <a href="#footer" onClick={() => setIsOpen(false)}>Kontak</a> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;