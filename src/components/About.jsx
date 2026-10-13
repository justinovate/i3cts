import { useState, useEffect, useRef, useCallback } from 'react';
import './About.css';

const slides = [
  {
    id: 1,
    title: 'Overview',
    badge: 'PILLAR OVERVIEW',
    icon: 'fas fa-layer-group',
    content: (
      <>
        The International Conference on Consumer, Computing, and Communications Technology Systems is a premier academic and professional forum designed to bring together researchers, engineers, industry practitioners, and scholars. It explores and accelerates convergent innovations across five critical pillars: <strong className="text-emphasis">Computing Systems</strong>, <strong className="text-emphasis">Consumer Electronics and Technology Network Infrastructure</strong>, <strong className="text-emphasis">Educational Technology</strong>, and <strong className="text-emphasis">Space Systems</strong>.
      </>
    ),
  },
  {
    id: 2,
    title: 'Convergence',
    badge: 'CONVERGENT ECOSYSTEMS',
    icon: 'fas fa-network-wired',
    content: (
      <>
        The conference centers on the rapidly evolving intersection between consumer-facing technologies, advanced computing frameworks, and next-generation communication systems. As the world shifts toward <strong className="text-emphasis">hyper-connectivity, automation, and intelligent ecosystems</strong>, this event explores how foundational computing architectures and modern communication networks (such as <strong className="text-emphasis">5G/6G, IoT, and cloud-edge systems</strong>) power modern consumer electronics, smart environments, and data-driven applications.
      </>
    ),
  },
  {
    id: 3,
    title: 'Special Session',
    badge: 'SPECIAL SESSION FEATURE',
    icon: 'fas fa-satellite',
    content: (
      <>
        A key highlight of the event is a Special Session on <strong className="text-emphasis">Geoscience & Space</strong>, which examines how distributed sensor telemetry, satellite communications, and edge-computed Earth observation data integrate into broader technological frameworks. This specialized track bridges terrestrial infrastructure with space-borne systems and addresses critical challenges in remote sensing, resilient orbital communications, and environmental monitoring.
      </>
    ),
  },
  {
    id: 4,
    title: 'Platform Scope',
    badge: 'ACADEMIC & PROFESSIONAL SCOPE',
    icon: 'fas fa-globe-americas',
    content: (
      <>
        Overall, the conference provides a hybrid or physical platform for presenting cutting-edge research, sharing technological breakthroughs, and discussing practical implementation challenges across these convergent domains.
      </>
    ),
  },
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
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setAnimKey((k) => k + 1);
  }, []);

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    setAnimKey((k) => k + 1);
  };

  const isPaused = !isInView || isHovered;

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About the Conference</h2>
        <p className="about-intro-subtitle">
          Promote Interdisciplinary Breakthroughs across Computing Systems, Consumer Electronics, Network Infrastructure, Education Technology and Space Systems.
        </p>

        {/* Centered Single-Focus Story Stepper Card */}
        <div
          className="about-stepper-container"
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
          <div className="about-stepper-card">
            {/* Top Bar: Badge, Step Indicator & Arrow Navigation */}
            <div className="stepper-header">
              <span className="stepper-badge">
                <i className={currentSlide.icon} aria-hidden="true" />
                <span>{currentSlide.badge}</span>
              </span>

              <div className="stepper-controls">
                <span className="stepper-counter" aria-live="polite">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
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

            {/* Active Paragraph Content with Smooth Crossfade */}
            <div className="stepper-content-viewport">
              <div
                key={`slide-${currentIndex}-${animKey}`}
                className="stepper-slide-content"
                aria-live="polite"
              >
                <p className="stepper-body-text">
                  {currentSlide.content}
                </p>
              </div>
            </div>

            {/* Bottom Progress Bars & Quick Nav Pills */}
            <div className="stepper-progress-section">
              <div
                className="stepper-progress-row"
                role="tablist"
                aria-label="Story paragraph progress"
              >
                {slides.map((slide, idx) => {
                  const isActive = idx === currentIndex;
                  const isCompleted = idx < currentIndex;

                  return (
                    <button
                      key={`pill-${slide.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
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

              {/* Progress Labels */}
              <div className="stepper-labels-row">
                {slides.map((slide, idx) => (
                  <button
                    key={`label-${slide.id}`}
                    type="button"
                    className={`stepper-label-btn ${idx === currentIndex ? 'is-active' : ''}`}
                    onClick={() => goToSlide(idx)}
                  >
                    <span className="stepper-label-num">{idx + 1}.</span>
                    <span className="stepper-label-name">{slide.title}</span>
                  </button>
                ))}
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
