import { useState } from 'react';
import './LogoBreakdown.css';
import logoBreakdownImg from '../assets/i3cts-logo-breakdown.png';

const LogoBreakdown = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className="section logo-breakdown-section" id="logo-identity">
      <div className="container">
        <h2 className="section-title">Logo Symbolism & Design Identity</h2>
        <p className="logo-breakdown-subtitle">
          The official I3CTS 2027 emblem features an interlocking triquetra node geometry representing the seamless convergence of three technological domains.
        </p>

        <div className="logo-breakdown-grid">
          <div className="logo-display-card glass-card">
            <div 
              className="logo-image-frame interactive-zoom-frame" 
              onClick={() => setIsZoomed(true)}
              role="button"
              tabIndex={0}
              title="Click to expand full breakdown diagram"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsZoomed(true);
                }
              }}
            >
              <img src={logoBreakdownImg} alt="I3CTS Logo Breakdown" className="logo-breakdown-image" />
              <div className="zoom-hover-overlay">
                <i className="fas fa-search-plus"></i>
                <span>Click to Expand</span>
              </div>
            </div>
            <div className="logo-caption">
              <span className="logo-badge"><i className="fas fa-compass"></i> Symbol Breakdown</span>
              <p>Unified tri-node architecture symbolizing continuous innovation and interdisciplinary research.</p>
            </div>
          </div>

          <div className="logo-meaning-stack">
            <div className="glass-card meaning-card">
              <div className="meaning-icon node-consumer">
                <i className="fas fa-microchip"></i>
              </div>
              <div className="meaning-content">
                <h4>1. Consumer Technology Node</h4>
                <p>The top-left arc represents smart devices, wearable biosensors, ambient electronics, and user-centered HCI interfaces.</p>
              </div>
            </div>

            <div className="glass-card meaning-card">
              <div className="meaning-icon node-computing">
                <i className="fas fa-brain"></i>
              </div>
              <div className="meaning-content">
                <h4>2. Computing Systems Node</h4>
                <p>The top-right loop signifies artificial intelligence algorithms, cloud & edge computing, cybersecurity, and high-performance processing.</p>
              </div>
            </div>

            <div className="glass-card meaning-card">
              <div className="meaning-icon node-communications">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="meaning-content">
                <h4>3. Communications Network Node</h4>
                <p>The bottom loop embodies 5G/6G wireless protocols, satellite communications, optical interconnects, and IoT network infrastructure.</p>
              </div>
            </div>

            <div className="glass-card meaning-card convergence-card">
              <div className="meaning-icon node-center">
                <i className="fas fa-infinity"></i>
              </div>
              <div className="meaning-content">
                <h4>Central Triquetra Convergence</h4>
                <p>The interlocking central core illustrates the mission of I3CTS: uniting consumer tech, computing, and communications into a single collaborative ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isZoomed && (
        <div className="lightbox-overlay" onClick={() => setIsZoomed(false)}>
          <div className="lightbox-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setIsZoomed(false)} aria-label="Close Lightbox">
              <i className="fas fa-times"></i>
            </button>
            <h3 className="lightbox-title">I3CTS Logo Symbolism Breakdown</h3>
            <div className="lightbox-image-wrapper">
              <img src={logoBreakdownImg} alt="I3CTS Logo Breakdown Full View" className="lightbox-full-image" />
            </div>
            <p className="lightbox-caption">High-resolution schematic breakdown of the I3CTS 2027 emblem mark.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LogoBreakdown;
