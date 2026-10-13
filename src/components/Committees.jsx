import './Committees.css';

const committeeGroups = [
  {
    sectionCode: 'SEC // 01',
    title: 'General Leadership & Organizing Committee',
    members: [
      {
        role: 'General Chair',
        name: 'Dr. Jocelyn Villaverde',
        affiliation: 'Bulacan State University / IEEE CTSoc'
      },
      {
        role: 'International Chair',
        name: 'TBA',
        affiliation: 'TBA'
      },
      {
        role: 'Vice General Chair',
        name: 'Engr. Noel Linsangan',
        affiliation: 'Mapúa University'
      }
    ]
  },
  {
    sectionCode: 'SEC // 02',
    title: 'Technical Program Committee',
    members: [
      {
        role: 'TPC Chair',
        name: 'Dr. Gabriel Sampedro',
        affiliation: 'TBA'
      },
      {
        role: 'TPC Co-Chair',
        name: 'Dr. Mark Purio',
        affiliation: 'Adamson University'
      }
    ]
  },
  {
    sectionCode: 'SEC // 03',
    title: 'Publication Committee',
    members: [
      {
        role: 'Publication Chair',
        name: 'Engr. Ethyl Joy I. Badiang',
        affiliation: 'Mapúa University'
      }
    ]
  },
  {
    sectionCode: 'SEC // 04',
    title: 'Publicity & Media Committee',
    members: [
      {
        role: 'Publicity Chair',
        name: 'Dave Anthony De Jesus',
        affiliation: 'Bulacan State University'
      },
      {
        role: 'Webmaster',
        name: 'Justin Andre De Leon',
        affiliation: 'Mapúa University'
      },
      {
        role: 'Social Media',
        name: 'Glenn Justin Batis',
        affiliation: 'Bulacan State University'
      },
      {
        role: 'Creatives',
        name: 'TBA',
        affiliation: 'TBA'
      }
    ]
  },
  {
    sectionCode: 'SEC // 05',
    title: 'Program & Logistics Committee',
    members: [
      {
        role: 'Program Chair',
        name: 'Dr. John Paul Cruz',
        affiliation: 'Mapúa University'
      },
      {
        role: 'Logistics',
        name: 'TBA',
        affiliation: 'TBA'
      }
    ]
  }
];

const Committees = () => {
  return (
    <section className="section committees-section" id="committees">
      <div className="container">
        <h2 className="section-title">Committees</h2>
        <p className="committees-intro-subtitle">
          The distinguished academic leaders, researchers, and technical organizers steering I3CTS 2027.
        </p>

        <div className="committee-directory">
          {committeeGroups.map((group) => (
            <div className="committee-group" key={group.sectionCode}>
              <div className="committee-group-header">
                <div className="group-header-meta">
                  <span className="group-code">{group.sectionCode}</span>
                  <h3 className="group-title">{group.title}</h3>
                </div>
                <div className="group-hairline-accent" aria-hidden="true" />
              </div>

              <div className="committee-roster-grid" role="list">
                {group.members.map((member, idx) => {
                  const isNameTba = member.name === 'TBA';
                  const isAffiliationTba = member.affiliation === 'TBA' || !member.affiliation;

                  return (
                    <div
                      className={`roster-entry ${isNameTba ? 'is-tba' : ''}`}
                      key={`${group.sectionCode}-${member.role}-${idx}`}
                      role="listitem"
                    >
                      <span className="entry-role-tag">{member.role}</span>
                      <h4 className={`entry-name ${isNameTba ? 'is-tba' : ''}`}>
                        {isNameTba ? 'TBA' : member.name}
                      </h4>
                      <p className="entry-affiliation">
                        {isAffiliationTba ? (
                          <span className="affiliation-tba">Affiliation TBA</span>
                        ) : (
                          <>
                            <i className="fas fa-landmark affiliation-icon" aria-hidden="true" />
                            <span className="affiliation-text">{member.affiliation}</span>
                          </>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committees;
