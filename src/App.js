import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="logo">
            <div className="logo-icon">
              <div className="scent-drop"></div>
              <div className="scent-sparkle"></div>
            </div>
            <span className="logo-text">ScentNGoo</span>
          </div>
          <button className="cta-button-header">Get Started</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1575884344532-3a93810a682d" alt="Luxury Hotel" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container mx-auto px-6 hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">
              Transform Your Business Into A 
              <span className="gradient-text"> Luxury Fragrance Empire</span>
            </h1>
            <p className="hero-subtitle">
              Generate £2,000-£5,000+ monthly passive income with our premium 10-scent perfume vending machines.
            </p>
            <div className="hero-buttons">
              <button className="cta-button-primary">Start Your Empire £4,999</button>
              <button className="cta-button-secondary">View ROI Calculator</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
