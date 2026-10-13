import './Speakers.css';

const Speakers = () => {
  const tbaSpeakers = [
    { type: "Keynote Speaker", focus: "Consumer Technology & Smart Systems" },
    { type: "Plenary Speaker", focus: "Computing Systems & Artificial Intelligence" },
    { type: "Keynote Speaker", focus: "Communications, Space & Aerospace Systems" }
  ];

  return (
    <section className="section speakers-section" id="speakers">
      <div className="container">
        <h2 className="section-title">Keynote & Plenary Speakers</h2>
        
        <div className="speakers-notice-banner">
          <i className="fas fa-bullhorn"></i>
          <p>
            The distinguished keynote and plenary speaker lineup for I3CTS 2027 is currently being finalized. Official speaker announcements and presentation topics will be published soon.
          </p>
        </div>

        <div className="speakers-grid">
          {tbaSpeakers.map((speaker, index) => (
            <div className="glass-card speaker-card speaker-tba-card" key={index}>
              <div className="speaker-img-placeholder speaker-tba-icon">
                <i className="fas fa-user-clock"></i>
              </div>
              <span className="speaker-tba-badge">To Be Announced</span>
              <h3 className="speaker-name">{speaker.type}</h3>
              <p className="speaker-org">{speaker.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
