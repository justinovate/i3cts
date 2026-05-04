import './Venue.css';

const Venue = () => {
  return (
    <section className="section venue-section" id="venue">
      <div className="container">
        <h2 className="section-title">Venue</h2>
        
        <div className="venue-grid">
          <div className="venue-info glass-card">
            <h3>Manila, Philippines</h3>
            <p>
              The 2027 International Conference on Consumer, Computing, and Communications Technology Systems will be held in the vibrant city of Manila, Philippines. Known for its rich history, diverse culture, and bustling technology sector, Manila offers an unforgettable backdrop for I3CTS.
            </p>
            <p>
              <strong>Conference Center:</strong> (TBA Placeholder) <br/>
              <strong>Address:</strong> Manila Metro Area, Philippines
            </p>
            
            <div className="venue-amenities">
              <span className="amenity"><i className="fas fa-wifi"></i> Free Wi-Fi</span>
              <span className="amenity"><i className="fas fa-parking"></i> Parking Available</span>
              <span className="amenity"><i className="fas fa-subway"></i> Near Transit</span>
            </div>
          </div>
          
          <div className="venue-map glass-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247141.2585250499!2d120.97011993427306!3d14.596495689086118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px', borderRadius: '15px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
