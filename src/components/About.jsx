import { useState, useEffect, useRef } from 'react';
import './About.css';

const chapters = [
  { id: 'chapter-overview', num: '01', label: 'OVERVIEW' },
  { id: 'chapter-convergence', num: '02', label: 'CONVERGENCE' },
  { id: 'chapter-special-session', num: '03', label: 'SPECIAL SESSION' },
  { id: 'chapter-scope', num: '04', label: 'SCOPE' },
];

const About = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapterRefs = useRef([]);

  // Scroll spy via IntersectionObserver to track the active reading block
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = chapterRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveChapter(index);
            }
          }
        });
      },
      {
        rootMargin: '-15% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    chapterRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToChapter = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About the Conference</h2>
        <p className="about-intro-subtitle">
          Promote Interdisciplinary Breakthroughs across Computing Systems, Consumer Electronics, Network Infrastructure, Education Technology and Space Systems.
        </p>

        {/* Open Editorial Canvas Layout (No Cards / No Slides) */}
        <div className="editorial-layout">
          {/* Left Column: Sticky Chapter Index Rail */}
          <aside className="editorial-rail" aria-label="Reading chapters">
            <div className="editorial-sticky-nav">
              <div className="editorial-nav-header">
                <span className="editorial-nav-title">READING INDEX</span>
                <span className="editorial-nav-dot" />
              </div>

              <nav className="editorial-nav-list">
                {chapters.map((ch, idx) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => scrollToChapter(ch.id)}
                    className={`editorial-nav-item ${activeChapter === idx ? 'is-active' : ''}`}
                    aria-current={activeChapter === idx ? 'true' : 'false'}
                  >
                    <span className="nav-item-indicator" aria-hidden="true" />
                    <span className="nav-item-num">{ch.num}</span>
                    <span className="nav-item-divider">//</span>
                    <span className="nav-item-label">{ch.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Column: Editorial Reading Flow */}
          <main className="editorial-reading-flow">
            {/* 01 // OVERVIEW */}
            <article
              id="chapter-overview"
              ref={(el) => (chapterRefs.current[0] = el)}
              className={`editorial-block ${activeChapter === 0 ? 'is-focal' : ''}`}
            >
              <div className="editorial-block-tag">
                <span className="tag-num">01</span>
                <span className="tag-divider">//</span>
                <span className="tag-label">OVERVIEW</span>
              </div>
              <p className="editorial-text-overview">
                The International Conference on Consumer, Computing, and Communications Technology Systems is a premier academic and professional forum designed to bring together researchers, engineers, industry practitioners, and scholars. It explores and accelerates convergent innovations across five critical pillars: <strong className="text-emphasis">Computing Systems</strong>, <strong className="text-emphasis">Consumer Electronics and Technology Network Infrastructure</strong>, <strong className="text-emphasis">Educational Technology</strong>, and <strong className="text-emphasis">Space Systems</strong>.
              </p>
            </article>

            {/* 02 // CONVERGENCE */}
            <article
              id="chapter-convergence"
              ref={(el) => (chapterRefs.current[1] = el)}
              className={`editorial-block ${activeChapter === 1 ? 'is-focal' : ''}`}
            >
              <div className="editorial-block-tag">
                <span className="tag-num">02</span>
                <span className="tag-divider">//</span>
                <span className="tag-label">CONVERGENCE & ECOSYSTEMS</span>
              </div>
              <p className="editorial-text-convergence">
                The conference centers on the rapidly evolving intersection between consumer-facing technologies, advanced computing frameworks, and next-generation communication systems. As the world shifts toward <strong className="text-emphasis">hyper-connectivity, automation, and intelligent ecosystems</strong>, this event explores how foundational computing architectures and modern communication networks (such as <strong className="text-emphasis">5G/6G, IoT, and cloud-edge systems</strong>) power modern consumer electronics, smart environments, and data-driven applications.
              </p>
            </article>

            {/* 03 // SPECIAL SESSION */}
            <article
              id="chapter-special-session"
              ref={(el) => (chapterRefs.current[2] = el)}
              className={`editorial-block ${activeChapter === 2 ? 'is-focal' : ''}`}
            >
              <div className="editorial-block-tag">
                <span className="tag-num">03</span>
                <span className="tag-divider">//</span>
                <span className="tag-label">SPECIAL SESSION FEATURE</span>
              </div>
              <div className="editorial-text-special">
                <p>
                  A key highlight of the event is a Special Session on <strong className="text-emphasis">Geoscience & Space</strong>, which examines how distributed sensor telemetry, satellite communications, and edge-computed Earth observation data integrate into broader technological frameworks. This specialized track bridges terrestrial infrastructure with space-borne systems and addresses critical challenges in remote sensing, resilient orbital communications, and environmental monitoring.
                </p>
              </div>
            </article>

            {/* 04 // SCOPE */}
            <article
              id="chapter-scope"
              ref={(el) => (chapterRefs.current[3] = el)}
              className={`editorial-block ${activeChapter === 3 ? 'is-focal' : ''}`}
            >
              <div className="editorial-block-tag">
                <span className="tag-num">04</span>
                <span className="tag-divider">//</span>
                <span className="tag-label">PLATFORM SCOPE</span>
              </div>
              <p className="editorial-text-scope">
                Overall, the conference provides a hybrid or physical platform for presenting cutting-edge research, sharing technological breakthroughs, and discussing practical implementation challenges across these convergent domains.
              </p>
            </article>
          </main>
        </div>

        {/* Primary Objectives */}
        <div className="about-objectives">
          <div className="objectives-header">
            <span className="objectives-badge">Core Mission</span>
            <h3 className="objectives-title">Primary Objectives</h3>
          </div>
          <div className="objectives-matrix" role="list">
            {/* Quadrant 01 */}
            <div className="matrix-quadrant" role="listitem">
              <span className="matrix-index" aria-hidden="true">01</span>
              <h4 className="matrix-title">Promoting Synergy and Innovation</h4>
              <p className="matrix-body">
                To explore the convergence of Artificial Intelligence, advanced algorithms, and communications technology to drive innovation across core technical pillars.
              </p>
            </div>

            {/* Quadrant 02 */}
            <div className="matrix-quadrant" role="listitem">
              <span className="matrix-index" aria-hidden="true">02</span>
              <h4 className="matrix-title">Bridging Academia and Industry</h4>
              <p className="matrix-body">
                To serve as a collaborative bridge where academic researchers can showcase theoretical advancements, and industry leaders can present real-world requirements, commercial applications, and market trends.
              </p>
            </div>

            {/* Quadrant 03 */}
            <div className="matrix-quadrant" role="listitem">
              <span className="matrix-index" aria-hidden="true">03</span>
              <h4 className="matrix-title">Addressing Emerging Technological Challenges</h4>
              <p className="matrix-body">
                To tackle critical issues related to system scalability, network security, data privacy, and resource optimization in consumer technology, communication infrastructure, educational technology and space systems.
              </p>
            </div>

            {/* Quadrant 04 */}
            <div className="matrix-quadrant" role="listitem">
              <span className="matrix-index" aria-hidden="true">04</span>
              <h4 className="matrix-title">Fostering Global Collaboration</h4>
              <p className="matrix-body">
                To facilitate international networking, cross-border research partnerships, and knowledge exchange among multidisciplinary experts, engineers, and students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
