import { React, useState} from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import NavButton from './NavButton.js';
import DotBackground from './DotBackground';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="layout-wrapper">
      <DotBackground />
      <div className="layout">
        <nav className="navbar">
          <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavButton to="/skills">Skills</NavButton>
            <NavButton to="/portfolio">Portfolio</NavButton>
            <NavButton to="/">Yakup Atahanov</NavButton>
            <NavButton to="/background">Background</NavButton>
            <NavButton to="/links">Links</NavButton>
          </div>
        </nav>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}