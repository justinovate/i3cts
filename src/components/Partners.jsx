import './Partners.css';
import updLogo from '../assets/partners/upd.png';
import pupLogo from '../assets/partners/pup.png';
import mapuaLogo from '../assets/partners/mapua.png';
import ustLogo from '../assets/partners/ust-seal.png';
import tupLogo from '../assets/partners/tup-manila.png';
import dlsuLogo from '../assets/partners/dlsu-seal.png';

const mainHost = {
  name: 'Mapúa University',
  role: 'Host Institution & General Secretariat',
  src: mapuaLogo
};

const partnerSchools = [
  {
    name: 'De La Salle University',
    role: 'Academic Partner',
    src: dlsuLogo
  },
  {
    name: 'University of Santo Tomas',
    role: 'Academic Partner',
    src: ustLogo
  },
  {
    name: 'UP Diliman',
    role: 'Academic Partner',
    src: updLogo
  },
  {
    name: 'Polytechnic University of the Philippines',
    role: 'Academic Partner',
    src: pupLogo
  },
  {
    name: 'Technological University of the Philippines',
    role: 'Academic Partner',
    src: tupLogo
  }
];

const repeatedLogos = [...partnerSchools, ...partnerSchools, ...partnerSchools];

const Partners = () => {
  return (
    <section className="section partners-section" id="partners">
      <div className="container">
        <h2 className="section-title">Host Institution & Academic Partners</h2>
        
        <div className="host-featured-card glass-card">
          <div className="host-logo-box">
            <img src={mainHost.src} alt="Mapúa University logo" className="host-logo-img" />
          </div>
          <div className="host-info">
            <span className="host-badge"><i className="fas fa-university"></i> Main Host Institution</span>
            <h3>{mainHost.name}</h3>
            <p>
              I3CTS 2027 is organized and hosted by Mapúa University in Manila, Philippines, in technical collaboration with participating academic institutions and professional engineering societies.
            </p>
          </div>
        </div>

        <p className="partners-intro">
          Participating Academic & Technical Partners across the Philippines:
        </p>

        <div className="partners-carousel" aria-label="Partner schools carousel">
          <div className="partners-track">
            {repeatedLogos.map((school, index) => (
              <div className="partner-logo-card" key={`${school.name}-${index}`}>
                <div className="partner-logo-frame">
                  <img
                    src={school.src}
                    alt={`${school.name} logo`}
                    className="partner-logo-image"
                    loading="lazy"
                  />
                </div>
                <span className="partner-logo-name">{school.name}</span>
                <span className="partner-role-tag">{school.role}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="partners-disclaimer">
          <i className="fas fa-info-circle"></i> Note: Final co-organizer affiliations and institutional partnerships are verified and updated periodically by the I3CTS steering committee.
        </p>
      </div>
    </section>
  );
};

export default Partners;
