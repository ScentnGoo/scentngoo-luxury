import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [roiInputs, setROIInputs] = useState({
    location: 'gym',
    footTraffic: 200,
    pricePerSpray: 2,
    operatingDays: 30
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Marcus Johnson",
      business: "Elite Fitness Club Owner",
      rating: 5,
      text: "Best investment I've made! My ScentNGoo machine generates £2,800+ monthly with zero effort.",
      revenue: "£2,800/month"
    },
    {
      name: "Sarah Mitchell", 
      business: "Upscale Pub Chain",
      rating: 5,
      text: "We installed 3 machines across our venues. Revenue exceeded expectations by 180%.",
      revenue: "£8,400/month"
    },
    {
      name: "David Rodriguez",
      business: "Premium Nightclub", 
      rating: 5,
      text: "Incredible passive income! The machine pays for itself in 3 months.",
      revenue: "£3,200/month"
    }
  ];

  const calculateROI = () => {
    const dailyUsers = Math.floor(roiInputs.footTraffic * 0.15);
    const dailyRevenue = dailyUsers * roiInputs.pricePerSpray * 1.5;
    const monthlyRevenue = dailyRevenue * roiInputs.operatingDays;
    const monthlyProfit = monthlyRevenue * 0.75;
    const yearlyProfit = monthlyProfit * 12;
    const breakEvenMonths = 4999 / monthlyProfit;
    const roi = ((yearlyProfit - 4999) / 4999) * 100;

    return {
      dailyUsers,
      dailyRevenue: Math.round(dailyRevenue),
      monthlyRevenue: Math.round(monthlyRevenue),
      monthlyProfit: Math.round(monthlyProfit),
      yearlyProfit: Math.round(yearlyProfit),
      breakEvenMonths: Math.round(breakEvenMonths * 10) / 10,
      roi: Math.round(roi)
    };
  };

  const roiResults = calculateROI();

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="logo">
            <div className="logo-icon">
              <div className="scent-drop"></div>
              <div className="scent-sparkle"></div>
            </div>
            <span className="logo-text">ScentNGoo</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#opportunity" className="nav-link">Opportunity</a>
            <a href="#product" className="nav-link">Product</a>
            <a href="#invest" className="nav-link">Invest Now</a>
          </nav>
          <button className="cta-button-header" onClick={() => setShowCart(true)}>Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
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
              Perfect for pubs, clubs, gyms & indoor venues.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">625</span>
                <span className="stat-label">Sprays per 100ml</span>
              </div>
              <div className="stat">
                <span className="stat-number">10</span>
                <span className="stat-label">Premium Scents</span>
              </div>
              <div className="stat">
                <span className="stat-number">3-6</span>
                <span className="stat-label">Month ROI</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="cta-button-primary" onClick={() => setShowCart(true)}>Start Your Empire £4,999</button>
              <button className="cta-button-secondary" onClick={() => setShowROICalculator(true)}>View ROI Calculator</button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section id="opportunity" className="opportunity-section">
        <div className="container mx-auto px-6 py-20">
          <div className="section-header">
            <h2 className="section-title">The £Multi-Million Fragrance Opportunity</h2>
            <p className="section-subtitle">Tap into the booming £47 billion global fragrance market</p>
          </div>
          
          <div className="opportunity-grid">
            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1661422586023-681ea60507e2" alt="Premium Restaurant" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Premium Restaurants & Pubs</h3>
                <p>Perfect for upscale venues. Average revenue: £2,200-£3,800/month</p>
                <div className="revenue-badge">High Traffic = High Returns</div>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1637666067348-7303e7007363" alt="Fitness Center" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Elite Fitness Centers</h3>
                <p>Gym-goers love fresh scents post-workout. Average revenue: £1,800-£3,200/month</p>
                <div className="revenue-badge">Daily Recurring Users</div>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1571205019420-41cad6369e94" alt="Nightclub" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Upscale Nightclubs</h3>
                <p>Premium venues, premium prices. Average revenue: £3,500-£5,200/month</p>
                <div className="revenue-badge">Maximum Revenue Potential</div>
              </div>
            </div>
          </div>

          <div className="competitive-advantage">
            <h3>Why ScentNGoo Dominates The Competition</h3>
            <div className="advantage-grid">
              <div className="advantage-item">
                <div className="advantage-icon">10</div>
                <h4>10 Premium Scents</h4>
                <p>Double the variety of competitors. More choices = More sales</p>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">📱</div>
                <h4>Smart App Monitoring</h4>
                <p>Real-time inventory tracking. True passive income.</p>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">625</div>
                <h4>625 Sprays Per Bottle</h4>
                <p>Maximum efficiency means maximum profit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="product-section">
        <div className="container mx-auto px-6 py-20">
          <div className="product-hero">
            <div className="product-image-container">
             <div className="actual-vending-machine">
  <img src="https://imgur.com/a/WK6nyo9" alt="ScentNGoo Vending Machine" className="machine-photo" />
</div>
              </div>
            </div>
            <div className="product-content">
              <h2 className="product-title">The ScentNGoo Luxury Vending System</h2>
              <p className="product-description">
                State-of-the-art technology meets premium design. Our machines create an experience 
                that customers crave and pay premium prices for.
              </p>
              <div className="roi-calculator">
                <h3>Your ROI Breakdown</h3>
                <div className="roi-grid">
                  <div className="roi-item">
                    <span className="roi-label">Initial Investment</span>
                    <span className="roi-value">£4,999</span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">Annual Profit</span>
                    <span className="roi-value">£28,600+</span>
                  </div>
                </div>
                <button className="roi-calc-button" onClick={() => setShowROICalculator(true)}>
                  Calculate Your Custom ROI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="invest" className="investment-section">
        <div className="investment-background">
          <img src="https://images.unsplash.com/photo-1550859746-2f021fc95994" alt="Investment" className="investment-bg" />
          <div className="investment-overlay"></div>
        </div>
        <div className="container mx-auto px-6 py-20">
          <div className="investment-content">
            <h2 className="investment-title">Start Your Fragrance Empire Today</h2>
            <div className="investment-package">
              <div className="package-header">
                <h3>Complete Business Package</h3>
                <div className="price">
                  <span className="currency">£</span>
                  <span className="amount">4,999</span>
                </div>
              </div>
              <div className="investment-cta">
                <button className="invest-button" onClick={() => setShowCart(true)}>Secure Your Machine Now - £4,999</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      {showROICalculator && (
        <div className="modal-overlay" onClick={() => setShowROICalculator(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>ROI Calculator</h2>
              <button className="close-btn" onClick={() => setShowROICalculator(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="calculator-results">
                <h3>Your Projected Results</h3>
                <div className="results-grid">
                  <div className="result-item">
                    <span className="result-label">Monthly Profit:</span>
                    <span className="result-value">£{roiResults.monthlyProfit}</span>
                  </div>
                  <div className="result-item highlight">
                    <span className="result-label">Annual Profit:</span>
                    <span className="result-value">£{roiResults.yearlyProfit}</span>
                  </div>
                </div>
                <button className="invest-now-btn" onClick={() => {setShowROICalculator(false); setShowCart(true);}}>
                  Invest Now - £4,999
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div className="modal-content cart-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Complete Your Purchase</h2>
              <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="cart-item">
                <div className="item-details">
                  <h3>ScentNGoo Premium Vending Machine</h3>
                  <p>Complete business package with everything you need</p>
                </div>
                <div className="item-price">
                  <span className="price-amount">£4,999</span>
                </div>
              </div>
              <div className="payment-form">
                <h3>Contact Information</h3>
                <div className="form-grid">
                  <input type="text" placeholder="Full Name" className="form-input" />
                  <input type="email" placeholder="Email Address" className="form-input" />
                </div>
                <button className="checkout-btn">Proceed to Payment - £4,999</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-6 py-12">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <div className="logo-icon">
                  <div className="scent-drop"></div>
                  <div className="scent-sparkle"></div>
                </div>
                <span className="logo-text">ScentNGoo</span>
              </div>
              <p>Transforming businesses into luxury fragrance empires.</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📧 scentngoo@gmail.com</p>
              <p>🌐 www.scentngoo.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
