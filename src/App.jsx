import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LogoBreakdown from './components/LogoBreakdown';
import ImportantDates from './components/ImportantDates';
import Venue from './components/Venue';
import CallForPapers from './components/CallForPapers';
import Speakers from './components/Speakers';
import Committees from './components/Committees';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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
      <LogoBreakdown />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
