import './TrackModal.css';
import { EASYCHAIR_URL } from '../constants';

const TrackModal = ({ track, onClose }) => {
  if (!track) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-header">
          <div className="modal-icon-badge">
            <i className={`fas ${track.icon}`}></i>
          </div>
          <div>
            <span className="modal-track-num">Track {track.id}</span>
            <h3 className="modal-title">{track.title}</h3>
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-overview">{track.detailedInfo.overview}</p>

          <div className="modal-section">
            <h4><i className="fas fa-list-check"></i> Primary Topics & Research Sub-Domains</h4>
            <ul className="modal-topic-list">
              {track.detailedInfo.topics.map((topic, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-grid-details">
            <div className="modal-detail-box">
              <h4><i className="fas fa-file-signature"></i> Submission Types</h4>
              <p>{track.detailedInfo.submissionTypes}</p>
            </div>
            <div className="modal-detail-box">
              <h4><i className="fas fa-users"></i> Target Audience</h4>
              <p>{track.detailedInfo.targetAudience}</p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
          <a
            href={EASYCHAIR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-highlight"
          >
            Submit to Track {track.id} <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrackModal;
