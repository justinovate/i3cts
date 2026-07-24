import './Footer.css';
import conferenceLogo from '../assets/i3cts-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-header">
            <img src={conferenceLogo} alt="I3CTS Logo" className="footer-logo-image" />
            <h3 className="footer-logo">I3CTS 2027</h3>
          </div>
          <p>International Conference on Consumer, Computing, and Communications Technology Systems.</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#dates">Important Dates</a></li>
            <li><a href="#cfp">Call for Papers</a></li>
            <li><a href="#committees">Committees</a></li>
            <li><a href="#partners">Partner Schools</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Manila, Philippines</p>
          <p>April 8–10, 2027</p>
          <p>info@i3cts2027.org</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2027 I3CTS Conference. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
