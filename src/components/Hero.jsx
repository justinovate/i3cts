import { useEffect, useRef } from 'react';
import Countdown from './Countdown';
import './Hero.css';

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
        <div className="hero-badge">April 8–10, 2027 • Manila, Philippines</div>
        <h1 className="hero-title">
          International Conference on <br />
          <span className="text-gradient">Consumer, Computing, and Communications</span> <br />
          Technology Systems (I3CTS)
        </h1>
        <p className="hero-tagline">
          Advancing Innovation in Consumer and Communication Technologies
        </p>
        
        <div className="hero-buttons">
          <a href="https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM0ODMzP2M9MzQ4MzM%3D" target="_blank" rel="noopener noreferrer" className="btn btn-highlight btn-lg">
            Submit Paper via EDAS
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
