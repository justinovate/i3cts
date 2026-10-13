import './ImportantDates.css';

const ImportantDates = () => {
  const dates = [
    { 
      label: "Paper Submission Deadline", 
      date: "Jan. 25, 2027", 
      status: "upcoming",
      refCode: "REF: MILESTONE-01 // SUBMISSION"
    },
    { 
      label: "Notification of Acceptance", 
      date: "Feb. 18, 2027", 
      status: "upcoming",
      refCode: "REF: MILESTONE-02 // NOTIFICATION"
    },
    { 
      label: "Camera Ready Paper", 
      date: "March 25, 2027", 
      status: "upcoming",
      refCode: "REF: MILESTONE-03 // CAMERA-READY"
    },
    { 
      label: "Conference Dates", 
      date: "April 8–10, 2027", 
      status: "highlight",
      refCode: "REF: MILESTONE-04 // CONVENE"
    }
  ];

  return (
    <section className="section dates-section" id="dates">
      <div className="container">
        <h2 className="section-title">Important Dates</h2>
        
        <div className="timeline">
          {dates.map((item, index) => (
            <div className={`timeline-item ${item.status} stagger-reveal`} key={index}>
              <div className="timeline-marker"></div>
              <div className="glass-card timeline-content schematic-box">
                <span className="corner-mark top-left"></span>
                <span className="corner-mark top-right"></span>
                <span className="corner-mark bottom-left"></span>
                <span className="corner-mark bottom-right"></span>
                <div className="timeline-meta hud-mono-tag">{item.refCode}</div>
                <h3 className="timeline-date">{item.date}</h3>
                <p className="timeline-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
