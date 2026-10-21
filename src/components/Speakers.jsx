import './Speakers.css';

const speakersList = [
  {
    id: 'speaker-1',
    isConfirmed: false,
    role: 'Keynote Speaker',
    name: 'To Be Announced',
    affiliation: 'Official announcement forthcoming',
    track: 'Consumer Technology & Smart Systems',
    photo: null,
    topic: ''
  },
  {
    id: 'speaker-2',
    isConfirmed: false,
    role: 'Plenary Speaker',
    name: 'To Be Announced',
    affiliation: 'Official announcement forthcoming',
    track: 'Computing Systems & Artificial Intelligence',
    photo: null,
    topic: ''
  },
  {
    id: 'speaker-3',
    isConfirmed: false,
    role: 'Keynote Speaker',
    name: 'To Be Announced',
    affiliation: 'Official announcement forthcoming',
    track: 'Communications, Space & Aerospace Systems',
    photo: null,
    topic: ''
  }
];

const Speakers = () => {
  return (
    <section className="section speakers-section" id="speakers">
      <div className="speakers-container max-w-6xl mx-auto px-6">
        <h2 className="section-title">Keynote & Plenary Speakers</h2>

        {/* 4. Top Preamble */}
        <p className="speakers-preamble">
          Additional keynote and plenary speaker announcements will be published as confirmations are finalized.
        </p>

        {/* 1. Section Architecture: Responsive 3-Column Architectural Grid */}
        <div className="speakers-grid">
          {speakersList.map((speaker) =>
            speaker.isConfirmed ? (
              /* 2. Confirmed Speaker Card Template */
              <div key={speaker.id} className="speaker-card confirmed-speaker-card">
                <div className="speaker-photo-frame">
                  {speaker.photo ? (
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="speaker-photo-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="speaker-photo-fallback">
                      <i className="fas fa-user-tie" aria-hidden="true" />
                    </div>
                  )}
                </div>

                <div className="speaker-role-tag">{speaker.role}</div>
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-affiliation">{speaker.affiliation}</p>
                <div className="speaker-track-topic">
                  {speaker.topic ? `${speaker.topic} — ` : ''}{speaker.track}
                </div>
              </div>
            ) : (
              /* 3. TBA Slot Card Template */
              <div key={speaker.id} className="speaker-card tba-speaker-card">
                <div className="speaker-photo-placeholder">
                  <svg
                    className="speaker-silhouette-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    <path d="M4.5 20.118a7.5 7.5 0 0 1 15 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.5-1.632Z" />
                  </svg>
                  <span className="speaker-placeholder-label">TBA // PENDING</span>
                </div>

                <div className="speaker-role-tag">{speaker.role}</div>
                <h3 className="speaker-name is-tba">To Be Announced</h3>
                <p className="speaker-affiliation is-tba">Official announcement forthcoming</p>
                <div className="speaker-track-topic is-tba">{speaker.track}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
