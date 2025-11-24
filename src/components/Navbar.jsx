import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MapPin, Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastY = useRef(window.scrollY || 0);
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'dark' : false;
    });
    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    useEffect(() => {
        const onScroll = () => {
            if (isOpen) {
                setHidden(false);
                lastY.current = window.scrollY || 0;
                return;
            }
            const y = window.scrollY || 0;
            const goingDown = y > lastY.current;
            const farEnough = y > 80;
            setHidden(goingDown && farEnough);
            lastY.current = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [isOpen]);
    return (
        <nav className={`navbar ${hidden ? 'navbar-hidden' : ''}`}>
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
                    <NavLink
                        to="/favorit"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `no-underline font-semibold transition-all py-2 rounded-full ${
                                isActive ? 'text-amber-900' : 'text-amber-900/50'
                            }`
                        }
                    >
                        Favorit
                    </NavLink>
                    {/* <a href="#footer" onClick={() => setIsOpen(false)}>Kontak</a> */}
                    <NavLink
                        to="/peta"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `no-underline font-semibold transition-all py-2 rounded-full ${
                                isActive ? 'text-amber-900' : 'text-amber-900/50'
                            }`
                        }
                    >
                        Peta
                    </NavLink>
                    <button
                        className="btn"
                        aria-label="Toggle tema"
                        onClick={() => setDark((v) => !v)}
                        style={{ padding: '8px 14px', borderRadius: '999px' }}
                    >
                        {dark ? <Sun size={18} /> : <Moon size={18} />}
                        {dark ? 'Terang' : 'Gelap'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
