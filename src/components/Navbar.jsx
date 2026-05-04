import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme === 'light' ? 'light-theme' : '';
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
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="logo-highlight">I3CTS</span> 2027
        </a>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#dates" onClick={() => setMenuOpen(false)}>Dates</a>
          <a href="#cfp" onClick={() => setMenuOpen(false)}>Call for Papers</a>
          <a href="#venue" onClick={() => setMenuOpen(false)}>Venue</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          <a href="https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM0ODMzP2M9MzQ4MzM%3D" target="_blank" rel="noopener noreferrer" className="btn btn-highlight nav-btn">
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
