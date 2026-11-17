import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [showPromo, setShowPromo] = useState(false);

  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-text">
          <span className="badge">NEW SEASON 2026</span>
          <h1>Welcome to Kora Apparel</h1>
          <p>
            Modern African street luxury. We blend contemporary silhouettes with 
            breathable, ethically sourced fabrics designed for everyday confidence.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn-primary">Shop Collection</Link>
            <button 
              className="btn-secondary" 
              onClick={() => setShowPromo(!showPromo)}
            >
              {showPromo ? 'Hide Welcome Offer' : 'Claim 15% Welcome Offer'}
            </button>
          </div>

          {showPromo && (
            <div className="promo-box">
              Use code <strong>KORA15</strong> at checkout or mention it on our Contact page for 15% off your first order!
            </div>
          )}
        </div>

        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" 
            alt="Kora Apparel Fashion Showcase" 
          />
        </div>
      </div>
    </section>
  );
}

export default Home;