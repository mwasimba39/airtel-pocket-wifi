import React from 'react';
import './Plans.css';

export default function Plans() {
  const plans = [
    {
      name: "Basic",
      price: "TZS 10,000",
      duration: "per month",
      data: "10GB",
      speed: "4G",
      devices: "Up to 8 devices"
    },
    {
      name: "Standard",
      price: "TZS 20,000",
      duration: "per month",
      data: "20GB",
      speed: "4G",
      devices: "Up to 8 devices",
      popular: true
    },
    {
      name: "Premium",
      price: "TZS 50,000",
      duration: "Two months",
      data: "35GB",
      speed: "4G",
      devices: "Up to 8 devices"
    }
  ];

  return (
    <section id="plans" className="plans-section">
      <div className="container">
        <h2 className="section-title">Our Pocket WiFi Plans</h2>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="plan-price">
                <span className="amount">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </div>
              <ul className="plan-features">
                <li><strong>Data:</strong> {plan.data}</li>
                <li><strong>Speed:</strong> {plan.speed}</li>
                <li><strong>Devices:</strong> {plan.devices}</li>
              </ul>
              <button className="plan-button">
                Get Started
              </button>
            </div>
          ))}
        </div>
        <p className="plan-note">Fair usage policy applies</p>
      </div>
    </section>
  );
}