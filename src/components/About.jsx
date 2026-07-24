import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About the Conference</h2>
        <p className="about-intro-subtitle">
          Fostering Interdisciplinary Breakthroughs across Computing Systems, Consumer Electronics, and Network Infrastructure.
        </p>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              The <strong>International Conference on Consumer, Computing, and Communications Technology Systems (I3CTS 2027)</strong> brings together premier academic researchers, industry scientists, and technical practitioners to share breakthroughs across hardware architectures, intelligent software systems, and next-generation telecommunications.
            </p>
            <p className="about-text">
              Hosted in Manila, Philippines, I3CTS 2027 serves as a vital peer-reviewed forum for presenting state-of-the-art research, exploring emerging industry standards, and addressing critical technical challenges facing future computational and communication ecosystems.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="glass-card theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-microchip"></i>
              </div>
              <div className="theme-card-content">
                <h3>Consumer Tech</h3>
                <p>Exploring the latest in smart devices, IoT, and consumer electronics design.</p>
              </div>
            </div>
            
            <div className="glass-card theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="theme-card-content">
                <h3>Computing Systems</h3>
                <p>Advancements in AI, edge computing, and distributed architectures.</p>
              </div>
            </div>
            
            <div className="glass-card theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="theme-card-content">
                <h3>Communications</h3>
                <p>Next-gen wireless networks, 6G protocols, and secure communication.</p>
              </div>
            </div>

            <div className="glass-card theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="theme-card-content">
                <h3>Education & Pedagogy</h3>
                <p>Digital learning platforms, STEM curriculum innovation, and AI in education.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
