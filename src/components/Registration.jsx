import './Registration.css';

const authorFees = [
  {
    category: 'Local Professional / Author',
    ieee: { currency: 'PHP', amount: '15,000' },
    nonIeee: { currency: 'PHP', amount: '18,000' }
  },
  {
    category: 'International Professional / Author',
    ieee: { currency: 'USD', amount: '400' },
    nonIeee: { currency: 'USD', amount: '500' }
  },
  {
    category: 'Local Student Author',
    ieee: { currency: 'PHP', amount: '12,000' },
    nonIeee: { currency: 'PHP', amount: '15,000' }
  },
  {
    category: 'International Student Author',
    ieee: { currency: 'USD', amount: '300' },
    nonIeee: null
  }
];

const attendeeFees = [
  {
    category: 'Student Listener',
    condition: 'Excludes Banquet',
    ieee: { currency: 'PHP', amount: '5,000' },
    nonIeee: { currency: 'PHP', amount: '5,000' }
  },
  {
    category: 'Professional Listener',
    condition: null,
    ieee: { currency: 'PHP', amount: '10,000' },
    nonIeee: { currency: 'PHP', amount: '12,000' }
  }
];

const renderPrice = (fee) => {
  if (!fee) {
    return <span className="price-dash" aria-label="Not Applicable">—</span>;
  }
  return (
    <span className="price-tag">
      <span className="currency-code">{fee.currency}</span>
      <span className="currency-amount">{fee.amount}</span>
    </span>
  );
};

const Registration = () => {
  return (
    <section className="section registration-section" id="registration">
      <div className="container registration-container">
        {/* Main Section Header */}
        <div className="registration-header">
          <h2 className="section-title registration-title">Registration Fees</h2>
          <p className="registration-subtitle">
            Official registration rates for authors, researchers, students, and attendees.
          </p>
        </div>

        {/* Tables Container */}
        <div className="registration-tables-grid">
          {/* Table 1: Authors & Presenters */}
          <div className="registration-table-block">
            <h3 className="table-heading">Authors & Presenters</h3>

            <div className="table-responsive-wrapper">
              <table className="fee-matrix-table">
                <thead>
                  <tr>
                    <th scope="col" className="col-category">Category / Tier</th>
                    <th scope="col" className="col-ieee">IEEE Member</th>
                    <th scope="col" className="col-non-ieee">Non-IEEE Member</th>
                  </tr>
                </thead>
                <tbody>
                  {authorFees.map((row, idx) => (
                    <tr key={idx} className="fee-row">
                      <td className="cell-category">
                        <span className="tier-name">{row.category}</span>
                      </td>
                      <td className="cell-ieee">
                        {renderPrice(row.ieee)}
                      </td>
                      <td className="cell-non-ieee">
                        {renderPrice(row.nonIeee)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: Attendees & Listeners */}
          <div className="registration-table-block mt-table-block">
            <h3 className="table-heading">Attendees & Listeners</h3>

            <div className="table-responsive-wrapper">
              <table className="fee-matrix-table">
                <thead>
                  <tr>
                    <th scope="col" className="col-category">Category / Tier</th>
                    <th scope="col" className="col-ieee">IEEE Member</th>
                    <th scope="col" className="col-non-ieee">Non-IEEE Member</th>
                  </tr>
                </thead>
                <tbody>
                  {attendeeFees.map((row, idx) => (
                    <tr key={idx} className="fee-row">
                      <td className="cell-category">
                        <span className="tier-name">{row.category}</span>
                        {row.condition && (
                          <span className="tier-condition">({row.condition})</span>
                        )}
                      </td>
                      <td className="cell-ieee">
                        {renderPrice(row.ieee)}
                      </td>
                      <td className="cell-non-ieee">
                        {renderPrice(row.nonIeee)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
