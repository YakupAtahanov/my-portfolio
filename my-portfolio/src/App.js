import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
import SkillPage from './Pages/SkillPage';
import PortfolioPage from './Pages/PortfolioPage';
import BackgroundPage from './Pages/BackgroundPage';
import LinksPage from './Pages/LinksPage';

function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="skills" element={<SkillPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="background" element={<BackgroundPage />} />
          <Route path="links" element={<LinksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;