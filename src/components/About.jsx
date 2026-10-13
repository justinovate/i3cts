import { useState, useEffect, useRef, useCallback } from 'react';
import './About.css';

const paragraphs = [
  "The International Conference on Consumer, Computing, and Communications Technology Systems is a premier academic and professional forum designed to bring together researchers, engineers, industry practitioners, and scholars. It explores and accelerates convergent innovations across five critical pillars: Computing Systems, Consumer Electronics and Technology Network Infrastructure, Educational Technology, and Space Systems.",
  "The conference centers on the rapidly evolving intersection between consumer-facing technologies, advanced computing frameworks, and next-generation communication systems. As the world shifts toward hyper-connectivity, automation, and intelligent ecosystems, this event explores how foundational computing architectures and modern communication networks (such as 5G/6G, IoT, and cloud-edge systems) power modern consumer electronics, smart environments, and data-driven applications.",
  "A key highlight of the event is a Special Session on Geoscience & Space, which examines how distributed sensor telemetry, satellite communications, and edge-computed Earth observation data integrate into broader technological frameworks. This specialized track bridges terrestrial infrastructure with space-borne systems and addresses critical challenges in remote sensing, resilient orbital communications, and environmental monitoring.",
  "Overall, the conference provides a hybrid or physical platform for presenting cutting-edge research, sharing technological breakthroughs, and discussing practical implementation challenges across these convergent domains."
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const sectionRef = useRef(null);

  // Pause auto-advancement whenever About section is scrolled out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
    setAnimKey((k) => k + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? paragraphs.length - 1 : prev - 1));
    setAnimKey((k) => k + 1);
  }, []);

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    setAnimKey((k) => k + 1);
  };

  const isPaused = !isInView || isHovered;

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About the Conference</h2>
        <p className="about-intro-subtitle">
          Promote Interdisciplinary Breakthroughs across Computing Systems, Consumer Electronics, Network Infrastructure, Education Technology and Space Systems.
        </p>

        {/* Open Editorial Stepper (No Card Container, No Made-Up Titles) */}
        <div
          className="about-stepper-open"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="About the Conference narrative stepper"
        >
          {/* Top Bar: Step Counter & Arrow Navigation */}
          <div className="stepper-header">
            <div className="stepper-header-spacer" />
            <div className="stepper-controls">
              <span className="stepper-counter" aria-live="polite">
                {String(currentIndex + 1).padStart(2, '0')} / {String(paragraphs.length).padStart(2, '0')}
              </span>

              <div className="stepper-nav-buttons">
                <button
                  type="button"
                  className="stepper-arrow-btn"
                  onClick={prevSlide}
                  aria-label="Previous paragraph"
                  title="Previous paragraph"
                >
                  <i className="fas fa-chevron-left" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="stepper-arrow-btn"
                  onClick={nextSlide}
                  aria-label="Next paragraph"
                  title="Next paragraph"
                >
                  <i className="fas fa-chevron-right" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Uniform Paragraph Content with Smooth Crossfade */}
          <div className="stepper-content-viewport">
            <div
              key={`p-${currentIndex}-${animKey}`}
              className="stepper-slide-content"
              aria-live="polite"
            >
              <p className="stepper-body-text">
                {paragraphs[currentIndex]}
              </p>
            </div>
          </div>

          {/* Bottom Progress Bars Only (No Made-Up Titles) */}
          <div className="stepper-progress-section">
            <div
              className="stepper-progress-row"
              role="tablist"
              aria-label="Paragraph progression"
            >
              {paragraphs.map((_, idx) => {
                const isActive = idx === currentIndex;
                const isCompleted = idx < currentIndex;

                return (
                  <button
                    key={`bar-${idx}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to paragraph ${idx + 1}`}
                    className={`stepper-progress-pill ${isActive ? 'is-active' : ''} ${isCompleted ? 'is-completed' : ''}`}
                    onClick={() => goToSlide(idx)}
                  >
                    <span
                      key={isActive ? `active-fill-${idx}-${animKey}` : `idle-fill-${idx}`}
                      className={`stepper-progress-fill ${
                        isActive
                          ? `active ${isPaused ? 'is-paused' : ''}`
                          : isCompleted
                          ? 'completed'
                          : ''
                      }`}
                      onAnimationEnd={() => {
                        if (isActive && !isPaused) {
                          nextSlide();
                        }
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Primary Objectives: Integrated Architectural Matrix */}
        <div className="about-objectives">
          <div className="objectives-header">
            <span className="objectives-badge">Core Mission</span>
            <h3 className="objectives-title">Primary Objectives</h3>
          </div>

          <div className="objectives-matrix" role="list">
            <div className="matrix-quadrant" role="listitem">
              <span className="matrix-index" aria-hidden="true">01</span>
              <h4 className="matrix-title">Promoting Synergy and Innovation</h4>
              <p className="matrix-body">
                To explore the convergence of Artificial Intelligence, advanced algorithms, and communications technology to drive innovation across core technical pillars.
              </p>
            </div>

            <div className="matrix-quadrant" role="listitem">
              <span className="matrix-index" aria-hidden="true">02</span>
              <h4 className="matrix-title">Bridging Academia and Industry</h4>
              <p className="matrix-body">
                To serve as a collaborative bridge where academic researchers can showcase theoretical advancements, and industry leaders can present real-world requirements, commercial applications, and market trends.
              </p>
            </div>

            <div className="matrix-quadrant" role="listitem">
              <span className="matrix-index" aria-hidden="true">03</span>
              <h4 className="matrix-title">Addressing Emerging Technological Challenges</h4>
              <p className="matrix-body">
                To tackle critical issues related to system scalability, network security, data privacy, and resource optimization in consumer technology, communication infrastructure, educational technology and space systems.
              </p>
            </div>

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
