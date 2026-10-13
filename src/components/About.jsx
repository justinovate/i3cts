import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About the Conference</h2>
        <p className="about-intro-subtitle">
          Promote Interdisciplinary Breakthroughs across Computing Systems, Consumer Electronics, Network Infrastructure, Education Technology and Space Systems.
        </p>
        
        <div className="about-grid">
          {/* Editorial Typography Column (Left) */}
          <div className="about-content">
            {/* 1. Lead Paragraph (Editorial Hook) */}
            <p className="about-lead-text">
              The International Conference on Consumer, Computing, and Communications Technology Systems is a premier academic and professional forum designed to bring together researchers, engineers, industry practitioners, and scholars. It explores and accelerates convergent innovations across five critical pillars: <span className="text-emphasis">Computing Systems</span>, <span className="text-emphasis">Consumer Electronics and Technology Network Infrastructure</span>, <span className="text-emphasis">Educational Technology</span>, and <span className="text-emphasis">Space Systems</span>.
            </p>

            {/* 2. Core Body Copy */}
            <p className="about-body-text">
              The conference centers on the rapidly evolving intersection between consumer-facing technologies, advanced computing frameworks, and next-generation communication systems. As the world shifts toward <span className="text-emphasis">hyper-connectivity, automation, and intelligent ecosystems</span>, this event explores how foundational computing architectures and modern communication networks (such as <span className="text-emphasis">5G/6G, IoT, and cloud-edge systems</span>) power modern consumer electronics, smart environments, and data-driven applications.
            </p>

            {/* 3. Special Session Feature Card */}
            <div className="about-highlight-card">
              <div className="highlight-badge-row">
                <span className="highlight-badge">
                  <i className="fas fa-satellite"></i> SPECIAL SESSION HIGHLIGHT
                </span>
              </div>
              <p className="highlight-card-text">
                A key highlight of the event is a Special Session on Geoscience & Space, which examines how distributed sensor telemetry, satellite communications, and edge-computed Earth observation data integrate into broader technological frameworks. This specialized track bridges terrestrial infrastructure with space-borne systems and addresses critical challenges in remote sensing, resilient orbital communications, and environmental monitoring.
              </p>
            </div>

            {/* 4. Conclusion Note */}
            <p className="about-conclusion-text">
              Overall, the conference provides a hybrid or physical platform for presenting cutting-edge research, sharing technological breakthroughs, and discussing practical implementation challenges across these convergent domains.
            </p>
          </div>
          
          {/* 5 Right-Column Pillar Cards */}
          <div className="about-cards">
            <div className="theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-microchip"></i>
              </div>
              <div className="theme-card-content">
                <h3>Consumer Tech</h3>
                <p>Exploring the latest in smart devices, IoT, and consumer electronics design.</p>
              </div>
            </div>
            
            <div className="theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="theme-card-content">
                <h3>Computing Systems</h3>
                <p>Advancements in AI, edge computing, and distributed architectures.</p>
              </div>
            </div>
            
            <div className="theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="theme-card-content">
                <h3>Communications</h3>
                <p>Next-gen wireless networks, 6G protocols, and secure communication.</p>
              </div>
            </div>

            <div className="theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="theme-card-content">
                <h3>Education & Pedagogy</h3>
                <p>Digital learning platforms, STEM curriculum innovation, and AI in education.</p>
              </div>
            </div>

            <div className="theme-card">
              <div className="icon-wrapper">
                <i className="fas fa-satellite"></i>
              </div>
              <div className="theme-card-content">
                <h3>Geoscience & Space (GRASS)</h3>
                <p>Remote sensing, GIS, satellite communications, CubeSats, and aerospace systems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Objectives */}
        <div className="about-objectives">
          <div className="objectives-header">
            <span className="objectives-badge">Core Mission</span>
            <h3 className="objectives-title">Primary Objectives</h3>
          </div>
          <div className="objectives-grid">
            <div className="glass-card objective-card">
              <div className="objective-icon-wrapper">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="objective-content">
                <h4>Promoting Synergy and Innovation</h4>
                <p>To explore the convergence of Artificial Intelligence, advanced algorithms, and communications technology to drive innovation across core technical pillars.</p>
              </div>
            </div>

            <div className="glass-card objective-card">
              <div className="objective-icon-wrapper">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="objective-content">
                <h4>Bridging Academia and Industry</h4>
                <p>To serve as a collaborative bridge where academic researchers can showcase theoretical advancements, and industry leaders can present real-world requirements, commercial applications, and market trends.</p>
              </div>
            </div>

            <div className="glass-card objective-card">
              <div className="objective-icon-wrapper">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="objective-content">
                <h4>Addressing Emerging Technological Challenges</h4>
                <p>To tackle critical issues related to system scalability, network security, data privacy, and resource optimization in consumer technology, communication infrastructure, educational technology and space systems.</p>
              </div>
            </div>

            <div className="glass-card objective-card">
              <div className="objective-icon-wrapper">
                <i className="fas fa-globe-americas"></i>
              </div>
              <div className="objective-content">
                <h4>Fostering Global Collaboration</h4>
                <p>To facilitate international networking, cross-border research partnerships, and knowledge exchange among multidisciplinary experts, engineers, and students.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
