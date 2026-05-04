import './Speakers.css';

const Speakers = () => {
  const speakers = [
    { name: "Dr. Jane Doe", role: "Keynote Speaker", org: "Tech University", img: "placeholder" },
    { name: "Prof. John Smith", role: "Plenary Speaker", org: "Global Research Inst.", img: "placeholder" },
    { name: "Dr. Alice Wong", role: "Keynote Speaker", org: "Future Systems", img: "placeholder" }
  ];

  return (
    <section className="section speakers-section" id="speakers">
      <div className="container">
        <h2 className="section-title">Keynote Speakers</h2>
        
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div className="glass-card speaker-card" key={index}>
              <div className="speaker-img-placeholder">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-role">{speaker.role}</p>
              <p className="speaker-org">{speaker.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
