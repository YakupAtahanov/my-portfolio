import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import NavButton from './NavButton.js';

export default function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <NavButton to="/skills">Skills</NavButton>
        <NavButton to="/portfolio">Portfolio</NavButton>
        <NavButton to="/">Yakup Atahanov</NavButton>
        <NavButton to="/background">Background</NavButton>
        <NavButton to="/links">Links</NavButton>
      </nav>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}