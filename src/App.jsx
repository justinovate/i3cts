import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImportantDates from './components/ImportantDates';
import Venue from './components/Venue';
import CallForPapers from './components/CallForPapers';
import Speakers from './components/Speakers';
import Committees from './components/Committees';
// import Partners from './components/Partners';
// import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.section-title, .about-intro-subtitle, .about-lead-text, .about-body-text, .about-highlight-card, .about-meta-card, .timeline-item, .cfp-intro, .topic-card, .speakers-notice-banner, .speaker-card, .committee-card, .venue-info, .venue-map'
    );

    targets.forEach((el) => {
      el.classList.add('scroll-reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            setTimeout(() => {
              entry.target.classList.remove('scroll-reveal', 'is-visible');
            }, 800);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ImportantDates />
      <CallForPapers />
      <Speakers />
      <Committees />
      <Venue />
      {/* Temporarily commented out until details are finalized */}
      {/* <Partners /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
