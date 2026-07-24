import { useState, useEffect } from 'react';
import './Navbar.css';
import conferenceLogo from '../assets/i3cts-logo.png';
import { EASYCHAIR_URL } from '../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <img src={conferenceLogo} alt="I3CTS Logo" className="logo-image" />
          <span className="logo-text">
            <span className="logo-highlight">I3CTS</span> 2027
          </span>
        </a>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#dates" onClick={() => setMenuOpen(false)}>Dates</a>
          <a href="#cfp" onClick={() => setMenuOpen(false)}>Call for Papers</a>
          <a href="#committees" onClick={() => setMenuOpen(false)}>Committees</a>
          <a href="#partners" onClick={() => setMenuOpen(false)}>Partners</a>
          <a href="#venue" onClick={() => setMenuOpen(false)}>Venue</a>
          <a href="#speakers" onClick={() => setMenuOpen(false)}>Speakers</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          <a href={EASYCHAIR_URL} target="_blank" rel="noopener noreferrer" className="btn btn-highlight nav-btn">
            Submit Paper
          </a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
