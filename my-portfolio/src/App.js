import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
import SkillPage from './Pages/SkillPage';
import PortfolioPage from './Pages/PortfolioPage';

// Dummy pages. I will create it later in /Pages folder.
const Background = () => <div>Background</div>;
const Links = () => <div>Links</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="skills" element={<SkillPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="background" element={<Background />} />
          <Route path="links" element={<Links />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;