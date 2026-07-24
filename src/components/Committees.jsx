import './Committees.css';

const committees = [
  {
    title: 'Organizing Committee',
    entries: [
      { role: 'General Chair', name: 'TBA', affiliation: 'To be announced' },
      { role: 'Conference Co-Chair', name: 'TBA', affiliation: 'To be announced' },
      { role: 'Local Arrangements Chair', name: 'TBA', affiliation: 'To be announced' }
    ]
  },
  {
    title: 'Technical Committee',
    entries: [
      { role: 'Technical Program Chair', name: 'TBA', affiliation: 'To be announced' },
      { role: 'Track Chair - Consumer Technology', name: 'TBA', affiliation: 'To be announced' },
      { role: 'Track Chair - Education', name: 'TBA', affiliation: 'To be announced' }
    ]
  },
  {
    title: 'Publication Committee',
    entries: [
      { role: 'Publication Chair', name: 'TBA', affiliation: 'To be announced' },
      { role: 'Proceedings Editor', name: 'TBA', affiliation: 'To be announced' },
      { role: 'Submission System Coordinator', name: 'TBA', affiliation: 'To be announced' }
    ]
  }
];

const Committees = () => {
  return (
    <section className="section committees-section" id="committees">
      <div className="container">
        <h2 className="section-title">Committees</h2>
        <div className="committees-grid">
          {committees.map((committee) => (
            <div className="glass-card committee-card" key={committee.title}>
              <h3>{committee.title}</h3>
              <ul>
                {committee.entries.map((entry) => (
                  <li key={`${committee.title}-${entry.role}`}>
                    <p className="committee-role">{entry.role}</p>
                    <p className="committee-name">{entry.name}</p>
                    <p className="committee-affiliation">{entry.affiliation}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committees;
