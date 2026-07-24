import { useEffect, useRef } from 'react';
import Countdown from './Countdown';
import './Hero.css';
import conferenceLogo from '../assets/i3cts-logo.png';
import { EASYCHAIR_URL } from '../constants';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;

      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="hero" id="home" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container hero-content animate-fade-in">
        <div className="hero-logo-container">
          <img src={conferenceLogo} alt="I3CTS Official Logo" className="hero-logo" />
        </div>

        <h1 className="hero-title">
          <span className="hero-title-main">I3CTS</span> <span className="hero-title-year">2027</span>
        </h1>

        <h2 className="hero-full-title">
          INTERNATIONAL CONFERENCE ON CONSUMER, COMPUTING, & COMMUNICATIONS TECHNOLOGY SYSTEMS
        </h2>

        <p className="hero-tagline">
          Advancing Scientific Innovation & Computational Excellence
        </p>

        <div className="hero-badge">
          <i className="fas fa-calendar-alt"></i> April 8–10, 2027 • Manila, Philippines
        </div>

        <div className="hero-buttons">
          <a href={EASYCHAIR_URL} target="_blank" rel="noopener noreferrer" className="btn btn-highlight btn-lg">
            Submit Paper via EasyChair
          </a>
          <a href="#about" className="btn btn-secondary btn-lg">
            Learn More
          </a>
        </div>
        
        <Countdown />
      </div>
    </header>
  );
};

export default Hero;
