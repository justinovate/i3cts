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
        {/* Header & Monospace Eyebrow */}
        <div className="registration-header">
          <span className="registration-eyebrow">
            CONFERENCE ADMISSION // REGISTRATION TIERS
          </span>
          <h2 className="section-title registration-title">Registration Fees</h2>
          <p className="registration-subtitle">
            Official registration rates for authors, researchers, students, and attendees.
          </p>
        </div>

        {/* Tables Container */}
        <div className="registration-tables-grid">
          {/* Table 1: Authors & Presenters */}
          <div className="registration-table-block">
            <div className="table-block-header">
              <div className="table-title-meta">
                <span className="table-code">TIER // 01</span>
                <h3 className="table-heading">Authors & Presenters</h3>
              </div>
              <span className="table-subheading">Full Paper Registration</span>
            </div>

            <div className="table-responsive-wrapper">
              <table className="fee-matrix-table">
                <thead>
                  <tr>
                    <th scope="col" className="col-category">Category / Tier</th>
                    <th scope="col" className="col-ieee">
                      <div className="th-content">
                        <span>IEEE Member</span>
                        <span className="ieee-highlight-tag">Discounted</span>
                      </div>
                    </th>
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
          <div className="registration-table-block">
            <div className="table-block-header">
              <div className="table-title-meta">
                <span className="table-code">TIER // 02</span>
                <h3 className="table-heading">Attendees & Listeners</h3>
              </div>
              <span className="table-subheading">Non-Presenting Delegates</span>
            </div>

            <div className="table-responsive-wrapper">
              <table className="fee-matrix-table">
                <thead>
                  <tr>
                    <th scope="col" className="col-category">Category / Tier</th>
                    <th scope="col" className="col-ieee">
                      <div className="th-content">
                        <span>IEEE Member</span>
                        <span className="ieee-highlight-tag">Discounted</span>
                      </div>
                    </th>
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

        {/* Footnote / Disclaimer Policy */}
        <div className="registration-footnote">
          <div className="footnote-icon">
            <i className="fas fa-info-circle" aria-hidden="true" />
          </div>
          <p className="footnote-text">
            <strong>* Registration Note:</strong> Covers conference kit, access to all technical sessions, coffee breaks, and official certificates of participation unless otherwise noted (e.g., Student Listener excludes banquet admission).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
