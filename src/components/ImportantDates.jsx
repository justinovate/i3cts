import './ImportantDates.css';

const ImportantDates = () => {
  const dates = [
    { label: "Paper Submission Deadline", date: "October 15, 2026", status: "upcoming" },
    { label: "Notification of Acceptance", date: "December 20, 2026", status: "upcoming" },
    { label: "Camera-Ready Deadline", date: "January 30, 2027", status: "upcoming" },
    { label: "Conference Dates", date: "April 8–10, 2027", status: "highlight" }
  ];

  return (
    <section className="section dates-section" id="dates">
      <div className="container">
        <h2 className="section-title">Important Dates</h2>
        
        <div className="timeline">
          {dates.map((item, index) => (
            <div className={`timeline-item ${item.status}`} key={index}>
              <div className="timeline-marker"></div>
              <div className="glass-card timeline-content">
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
