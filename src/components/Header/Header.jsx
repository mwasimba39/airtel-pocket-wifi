import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Airtel Pocket WiFi</h1>
      </div>
      <nav>
        <a href="#features">Features</a>
        <a href="#plans">Plans</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="tel:+255759371766" className="cta-button">
        Call: +255 759 371 766
      </a>
    </header>
  );
}