import './CallForPapers.css';

const CallForPapers = () => {
  return (
    <section className="section cfp-section" id="cfp">
      <div className="container">
        <h2 className="section-title">Call for Papers</h2>
        <p className="cfp-intro">
          I3CTS 2027 invites original, unpublished research papers on all aspects of Consumer Technologies, Computing, and Communications.
        </p>
        
        <div className="cfp-topics-grid">
          <div className="glass-card topic-card">
            <h4>Track 1: Consumer Technology</h4>
            <ul>
              <li>Smart Home Systems</li>
              <li>Wearable Devices</li>
              <li>Human-Computer Interaction</li>
              <li>Entertainment Systems</li>
            </ul>
          </div>
          <div className="glass-card topic-card">
            <h4>Track 2: Computing Systems</h4>
            <ul>
              <li>Artificial Intelligence & ML</li>
              <li>Cloud & Edge Computing</li>
              <li>Cybersecurity</li>
              <li>Quantum Computing</li>
            </ul>
          </div>
          <div className="glass-card topic-card">
            <h4>Track 3: Communications</h4>
            <ul>
              <li>5G/6G Networks</li>
              <li>Optical Communications</li>
              <li>Wireless Sensor Networks</li>
              <li>Satellite Communication</li>
            </ul>
          </div>
        </div>

        <div className="cfp-cta">
          <p>Ready to submit your paper?</p>
          <a href="https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM0ODMzP2M9MzQ4MzM%3D" target="_blank" rel="noopener noreferrer" className="btn btn-highlight btn-lg">
            Submit via EDAS
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
