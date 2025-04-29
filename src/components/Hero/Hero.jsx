import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Super-Fast Portable WiFi Anywhere</h1>
        <p>Stay connected with Airtel's high-speed 4G network in your pocket</p>
        <div className="hero-buttons">
          <a href="#plans" className="btn-primary">View Plans</a>
          <a href="#contact" className="btn-secondary">Get Started</a>
        </div>
      </div>
    </section>
  );
}