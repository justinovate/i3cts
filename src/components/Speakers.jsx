import './Speakers.css';

const speakerTracks = [
  'Consumer Technology & Smart Systems',
  'Computing Systems & Artificial Intelligence',
  'Communications, Space & Aerospace Systems'
];

const Speakers = () => {
  return (
    <section className="section speakers-section" id="speakers">
      <div className="container">
        <h2 className="section-title">Keynote & Plenary Speakers</h2>
        
        {/* Standardized Status Notice Callout */}
        <div className="notice-callout-strip">
          <i className="fas fa-bullhorn notice-callout-icon" aria-hidden="true" />
          <p className="notice-callout-text">
            The distinguished keynote and plenary speaker lineup for I3CTS 2027 is currently being finalized. Official speaker announcements and presentation topics will be published soon.
          </p>
        </div>

        {/* Subtle Track Indicator Strip */}
        <div className="speaker-tracks-strip">
          {speakerTracks.map((track, index) => (
            <div className="speaker-track-tag" key={index}>
              <span className="speaker-track-dot" aria-hidden="true" />
              <span className="speaker-track-name">{track}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
