import './Committees.css';

const committeeGroups = [
  {
    title: 'General Leadership & Organizing Committee',
    gridClass: 'grid-4-cols',
    members: [
      {
        role: 'General Chair',
        name: 'Dr. Jocelyn F. Villaverde',
        affiliation: 'Bulacan State University / IEEE CTSoc'
      },
      {
        role: 'International Chair',
        name: 'TBA',
        affiliation: 'TBA'
      },
      {
        role: 'General Co-Chair',
        name: 'Dr. Jennifer C. Dela Cruz',
        affiliation: 'Mapúa University'
      },
      {
        role: 'General Co-Chair',
        name: 'Engr. Noel B. Linsangan',
        affiliation: 'Mapúa University'
      }
    ]
  },
  {
    title: 'Technical Program Committee',
    gridClass: 'grid-2-cols',
    members: [
      {
        role: 'TPC Chair',
        name: 'Dr. Gabriel Sampedro',
        affiliation: 'TBA'
      },
      {
        role: 'TPC Co-Chair',
        name: 'Dr. Mark Angelo C. Purio',
        affiliation: 'Adamson University'
      }
    ]
  },
  {
    title: 'Publication Committee',
    gridClass: 'grid-2-cols',
    members: [
      {
        role: 'Publication Chair',
        name: 'Engr. Ethyl Joy I. Badiang',
        affiliation: 'Mapúa University'
      },
      {
        role: 'Publication Co-Chair',
        name: 'Dr. Reggie P. Gustilo',
        affiliation: 'TBA'
      }
    ]
  },
  {
    title: 'Program & Logistics Committee',
    gridClass: 'grid-3-cols',
    members: [
      {
        role: 'Program Chair',
        name: 'Dr. John Paul T. Cruz',
        affiliation: 'Mapúa University'
      },
      {
        role: 'Logistics Chair',
        name: 'Dr. Analyn N. Yumang',
        affiliation: 'Mapúa University'
      },
      {
        role: 'Logistics Vice-Chair',
        name: 'Dr. Charmaine C. Paglinawan',
        affiliation: 'Mapúa University'
      }
    ]
  },
  {
    title: 'Publicity & Media Committee',
    gridClass: 'grid-4-cols',
    members: [
      {
        role: 'Chair',
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
        name: 'Glen Justine Batis',
        affiliation: 'Bulacan State University'
      },
      {
        role: 'Creatives',
        name: 'TBA',
        affiliation: 'Bulacan State University'
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
          {committeeGroups.map((group) => {
            return (
              <div className="committee-group" key={group.title}>
                <div className="committee-group-header">
                  <h3 className="group-title">{group.title}</h3>
                  <div className="group-hairline-accent" aria-hidden="true" />
                </div>

                <div
                  className={`committee-roster-grid ${group.gridClass}`}
                  role="list"
                >
                  {group.members.map((member, idx) => {
                    const isNameTba = member.name === 'TBA';
                    const isAffiliationTba = member.affiliation === 'TBA' || !member.affiliation;

                    return (
                      <div
                        className={`roster-entry ${isNameTba ? 'is-tba' : ''}`}
                        key={`${group.title}-${member.role}-${idx}`}
                        role="listitem"
                      >
                        <span className="entry-role-tag">{member.role}</span>
                        <h4 className={`entry-name ${isNameTba ? 'is-tba' : ''}`}>
                          {isNameTba ? 'TBA' : member.name}
                        </h4>
                        <p className="entry-affiliation">
                          {isAffiliationTba ? (
                            <span className="affiliation-tba">TBA</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Committees;
