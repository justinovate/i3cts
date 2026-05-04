import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About the Conference</h2>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              The International Conference on Consumer, Computing, and Communications Technology Systems (I3CTS 2027) aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of Consumer Electronics, Computing Architecture, and Communication Technologies.
            </p>
            <p className="about-text">
              It provides a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in these fields.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="glass-card theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-microchip"></i>
              </div>
              <h3>Consumer Tech</h3>
              <p>Exploring the latest in smart devices, IoT, and consumer electronics design.</p>
            </div>
            
            <div className="glass-card theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Computing Systems</h3>
              <p>Advancements in AI, edge computing, and distributed architectures.</p>
            </div>
            
            <div className="glass-card theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Communications</h3>
              <p>Next-gen wireless networks, 6G protocols, and secure communication.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
