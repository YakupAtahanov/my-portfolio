import React from 'react';
import './LinksPage.css';
import links from '../Data/linksData';

export default function LinksPage() {
  return (
    <div className="links-page">
      <h2>Let’s Connect</h2>
      <div className="links-container">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            className="link-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{link.icon}</div>
            <div className="text">
              <h3>{link.title}</h3>
              <p>{link.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
