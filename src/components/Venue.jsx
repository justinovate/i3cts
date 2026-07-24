import './Venue.css';

const Venue = () => {
  return (
    <section className="section venue-section" id="venue">
      <div className="container">
        <h2 className="section-title">Conference Venue</h2>
        
        <div className="venue-grid">
          <div className="venue-info glass-card">
            <h3>Diamond Hotel Philippines</h3>
            <p className="venue-description">
              I3CTS 2027 will take place in the historical heart of Manila along the scenic Manila Bay waterfront.
              Diamond Hotel Philippines provides world-class conference facilities, state-of-the-art audiovisual support,
              and convenient proximity to cultural landmarks and international transportation hubs.
            </p>
            
            <div className="venue-address-block">
              <p>
                <strong><i className="fas fa-map-marker-alt"></i> Address:</strong><br />
                Diamond Hotel Philippines<br />
                Roxas Boulevard cor. Dr. J. Quintos St., Malate<br />
                Manila, 1000 Metro Manila, Philippines
              </p>
              <p>
                <strong><i className="fas fa-plane"></i> Accessibility:</strong><br />
                Approximately 20 minutes from Ninoy Aquino International Airport (NAIA).
              </p>
            </div>

            <p>
              <a 
                href="https://maps.google.com/?q=Diamond+Hotel+Philippines+Manila" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="venue-map-link btn btn-secondary"
              >
                Open in Google Maps <i className="fas fa-external-link-alt"></i>
              </a>
            </p>
            
            <div className="venue-amenities">
              <span className="amenity"><i className="fas fa-wifi"></i> High-Speed Wi-Fi</span>
              <span className="amenity"><i className="fas fa-parking"></i> On-Site Parking</span>
              <span className="amenity"><i className="fas fa-utensils"></i> Catering & Dining</span>
              <span className="amenity"><i className="fas fa-wheelchair"></i> Accessible Venue</span>
            </div>
          </div>
          
          <div className="venue-map glass-card">
            <iframe 
              src="https://www.google.com/maps?q=Diamond+Hotel+Philippines+Manila&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px', borderRadius: '15px' }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Diamond Hotel Philippines Map Location"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
