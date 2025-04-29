import React from 'react';
import './Features.css';
import { FaWifi, FaBolt, FaShieldAlt, FaUserFriends } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaWifi className="feature-icon" />,
      title: "High-Speed 4G",
      description: "Enjoy blazing-fast internet speeds anywhere"
    },
    {
      icon: <FaBolt className="feature-icon" />,
      title: "Long Battery Life",
      description: "Up to 10 hours of continuous usage"
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Secure Connection",
      description: "Password-protected WiFi network"
    },
    {
      icon: <FaUserFriends className="feature-icon" />,
      title: "Multi-Device",
      description: "Connect up to 10 devices simultaneously"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Airtel Pocket WiFi?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}