import React from 'react';
import './PricePage.css';

export default function PricePage() {
  return (
    <section className="price-page" id="pricing">
      <div className="container">
        <div className="price-card">
          {/* Image Card at Top */}
          <div className="device-image-card">
            <img 
              src="/images/pocket.png" 
              alt="Airtel Pocket WiFi Device" 
              className="device-img"
            />
          </div>

          {/* Pricing Info Below */}
          <div className="pricing-info">
            <h2>Airtel Pocket WiFi Device</h2>
            
            <div className="price-tag">
              <span className="price">50,000 TZS</span>
              <span className="offer">Special Offer</span>
            </div>

            <div className="included-offer">
              <h3>Includes FREE 20GB for 1 month!</h3>
              <ul>
                <li>✔ High-speed 4G LTE</li>
                <li>✔ Connect up to 10 devices</li>
                <li>✔ Portable & lightweight</li>
                <li>✔ 10+ hours battery life</li>
              </ul>
            </div>

            {/* <div className="action-buttons">
              <button className="primary-btn">Order Now</button>
              <a href="tel:+255759371766" className="secondary-btn">
                Call: +255 759 371 766
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}