import { useState } from 'react';
import './CallForPapers.css';
import TrackModal from './TrackModal';
import { EASYCHAIR_URL } from '../constants';

const tracks = [
  {
    id: 1,
    title: 'Consumer Technology & Smart Systems',
    icon: 'fa-microchip',
    shortTopics: [
      'Smart Home Architecture & IoT Platforms',
      'Wearable Biosensors & Health Monitors',
      'Human-Computer Interaction (HCI) & UX',
      'Smart Appliances & Consumer Robotics'
    ],
    detailedInfo: {
      overview: 'Track 1 focuses on hardware, embedded software, and user-centered design innovations driving next-generation consumer electronics and smart ambient environments.',
      topics: [
        'Smart Home Automation & Edge Gateway Protocols',
        'Wearable Devices, Biosensors & Personal Health Monitoring',
        'Human-Computer Interaction (HCI), AR/VR Interfaces & Usability',
        'Smart Entertainment, Audio Signal Processing & Spatial Display Systems',
        'Energy-Efficient Consumer Microelectronics & Power Management'
      ],
      submissionTypes: 'Full Research Papers (6 pages), Short Papers (4 pages), and Industry Prototypes.',
      targetAudience: 'Hardware engineers, IoT developers, embedded systems researchers, and HCI specialists.'
    }
  },
  {
    id: 2,
    title: 'Computing Systems & Artificial Intelligence',
    icon: 'fa-brain',
    shortTopics: [
      'Artificial Intelligence & Machine Learning',
      'Cloud, Edge & Fog Computing Architectures',
      'Cybersecurity, Cryptography & Privacy',
      'High-Performance & Parallel Computing'
    ],
    detailedInfo: {
      overview: 'Track 2 addresses foundational and applied computational research spanning AI algorithms, distributed systems, resilient cybersecurity, and high-performance computing.',
      topics: [
        'Deep Learning, Computer Vision & Natural Language Processing',
        'Edge Computing, Real-Time Systems & Distributed Middleware',
        'Cybersecurity Architecture, Zero-Trust Frameworks & Cryptography',
        'Quantum Algorithms, Cloud Microservices & Scalable Systems',
        'Data Mining, Big Data Analytics & Autonomous Systems'
      ],
      submissionTypes: 'Full Research Papers (6 pages), Theoretical Papers, and System Architecture Reports.',
      targetAudience: 'Computer scientists, AI researchers, cloud architects, and security practitioners.'
    }
  },
  {
    id: 3,
    title: 'Communications & Network Infrastructure',
    icon: 'fa-network-wired',
    shortTopics: [
      '5G / 6G Wireless Communication Networks',
      'Optical & Satellite Communications',
      'Wireless Sensor Networks (WSN) & IoT',
      'Software-Defined Networking (SDN) & NFV'
    ],
    detailedInfo: {
      overview: 'Track 3 explores modern telecommunication frameworks, physical layer signal processing, optical interconnects, and ultra-reliable low-latency networks.',
      topics: [
        '5G Advanced & 6G Wireless Protocols & Terahertz Communications',
        'Satellite Communications, Non-Terrestrial Networks (NTN) & Deep Space',
        'Optical Communication Systems & Photonic Switching',
        'Wireless Sensor Networks (WSN), Mesh Routing & Ad-Hoc Systems',
        'Network Function Virtualization (NFV) & Software-Defined Networking'
      ],
      submissionTypes: 'Full Research Papers (6 pages), Protocol Evaluation Papers, and Poster Papers.',
      targetAudience: 'Telecommunications engineers, network architects, and signal processing researchers.'
    }
  },
  {
    id: 4,
    title: 'Educational Technology & Engineering Pedagogy',
    icon: 'fa-graduation-cap',
    shortTopics: [
      'Technology-Enhanced Learning (TEL) Platforms',
      'STEM & Engineering Curriculum Innovation',
      'AI in Education & Adaptive Learning Systems',
      'Virtual Labs, Simulators & Remote Learning'
    ],
    detailedInfo: {
      overview: 'Track 4 centers on digital transformations in STEM and engineering education, evaluating pedagogical models, learning analytics, and immersive learning platforms.',
      topics: [
        'AI-Assisted Tutoring, Automated Grading & Adaptive Learning',
        'Remote Laboratories, VR/AR Educational Simulations & Field Work Tech',
        'Learning Analytics, Student Retention Modeling & Performance Data',
        'Curriculum Design for Emerging Engineering Disciplines & Competencies',
        'Equity, Digital Inclusion & Accessibility in STEM Education'
      ],
      submissionTypes: 'Full Papers (6 pages), Case Studies, and Innovative Demonstration Reports.',
      targetAudience: 'Engineering educators, instructional designers, academic administrators, and EdTech developers.'
    }
  },
  {
    id: 5,
    title: 'Geoscience, Remote Sensing, Aerospace and Space Systems (GRASS)',
    icon: 'fa-satellite',
    shortTopics: [
      'Earth Observation & Remote Sensing',
      'GIS & Geospatial Computing',
      'Satellite & Space Communications',
      'CubeSats, Small Satellites & Space Systems'
    ],
    detailedInfo: {
      overview: 'The proposed track aims to provide a platform for researchers, engineers, students, and practitioners working at the intersection of computing, communications, Earth observation, aerospace engineering, and space systems.',
      topics: [
        'Earth Observation and Remote Sensing',
        'Geographic Information Systems (GIS) and Geospatial Computing',
        'AI and Machine Learning for Remote Sensing and Geoscience',
        'Satellite Image and Signal Processing',
        'Satellite and Space Communications',
        'CubeSats, Small Satellites, and Nanosatellite Systems',
        'Spacecraft and Aerospace Systems Engineering',
        'Satellite Payloads, Sensors, and Instrumentation',
        'Ground Stations and Ground Segment Technologies',
        'UAVs and Remote Sensing Platforms',
        'Space-Based IoT and Sensor Networks',
        'Space Situational Awareness',
        'Navigation, Positioning, and Timing',
        'Computational Modeling for Geoscience and Space Applications',
        'Disaster Risk Reduction and Environmental Monitoring using Space Technologies',
        'Climate, Weather, and Atmospheric Applications',
        'AI, Edge Computing, and Autonomous Systems for Space Applications',
        'Emerging and Quantum Technologies for Earth and Space Systems'
      ],
      submissionTypes: 'Full Research Papers (6 pages), Mission Reports, and Technical Demonstrations.',
      targetAudience: 'Aerospace engineers, GIS specialists, remote sensing researchers, and space systems developers.'
    }
  }
];

const CallForPapers = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <section className="section cfp-section" id="cfp">
      <div className="container">
        <h2 className="section-title">Call for Papers & Submission Tracks</h2>
        <p className="cfp-intro">
          I3CTS 2027 invites original, high-quality research papers across five core thematic tracks.
          Click on any track card below to view extended sub-topics and submission guidelines.
        </p>

        {/* Tracks Grid */}
        <div className="cfp-topics-grid">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="topic-card interactive-track-card"
              onClick={() => setSelectedTrack(track)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedTrack(track);
                }
              }}
            >
              <div className="track-card-header">
                <span className="track-badge">Track {track.id}</span>
                <i className={`fas ${track.icon} track-icon`}></i>
              </div>
              <h4>{track.title}</h4>
              <ul className="track-topics-preview">
                {track.shortTopics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              <div className="track-card-footer">
                <span className="click-more-hint">
                  Click for full track details <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Open 2-Column Split: Guidelines & Templates */}
        <div className="cfp-split-container">
          {/* Left: Guidelines */}
          <div className="cfp-guidelines-column">
            <div className="column-title-box">
              <i className="fas fa-file-invoice column-icon"></i>
              <h3>Submission Guidelines</h3>
            </div>
            <p className="guidelines-desc">
              All submitted papers must represent original, unpublished research work formatted according to standard IEEE proceedings standards.
            </p>

            <ul className="guidelines-list">
              <li>
                <div className="list-icon-bullet"><i className="fas fa-check"></i></div>
                <div>
                  <strong>Originality & Integrity</strong>
                  <p>Submissions must not be currently under review or published in any other journal or conference.</p>
                </div>
              </li>
              <li>
                <div className="list-icon-bullet"><i className="fas fa-check"></i></div>
                <div>
                  <strong>Formatting Standard</strong>
                  <p>Papers must follow the standard double-column IEEE format (6-page limit for full papers).</p>
                </div>
              </li>
              <li>
                <div className="list-icon-bullet"><i className="fas fa-check"></i></div>
                <div>
                  <strong>Double-Blind Review</strong>
                  <p>Peer review is conducted by an international technical committee using a double-blind process.</p>
                </div>
              </li>
            </ul>

            <div className="template-notice-pill">
              <i className="fas fa-exclamation-circle"></i>
              <span><strong>Note:</strong> All placeholder and guidance text must be removed from your paper prior to final submission.</span>
            </div>
          </div>

          {/* Right: Paper Templates */}
          <div className="cfp-templates-column">
            <div className="column-title-box">
              <i className="fas fa-download column-icon"></i>
              <h3>Paper Templates</h3>
            </div>

            <div className="template-cards-stack">
              {/* MS Word Option */}
              <div className="resource-row">
                <div className="resource-brand word">
                  <i className="fas fa-file-word"></i>
                </div>
                <div className="resource-info">
                  <h4>Microsoft Word (.docx)</h4>
                  <p>Standard double-column MS Word template.</p>
                </div>
                <div className="resource-downloads">
                  <a 
                    href="/templates/conference-template-letter.docx" 
                    download="conference-template-letter.docx"
                    className="download-pill"
                    title="Download US Letter format"
                  >
                    Letter <i className="fas fa-download"></i>
                  </a>
                  <a 
                    href="/templates/conference-template-a4.docx" 
                    download="conference-template-a4.docx"
                    className="download-pill"
                    title="Download A4 format"
                  >
                    A4 <i className="fas fa-download"></i>
                  </a>
                </div>
              </div>

              {/* LaTeX Option */}
              <div className="resource-row">
                <div className="resource-brand latex">
                  <i className="fas fa-file-code"></i>
                </div>
                <div className="resource-info">
                  <h4>LaTeX Package</h4>
                  <p>IEEEtran class files & bibliography starter.</p>
                </div>
                <div className="resource-downloads">
                  <a 
                    href="/templates/conference-latex-template.zip" 
                    download="conference-latex-template.zip"
                    className="download-pill"
                  >
                    Template ZIP <i className="fas fa-download"></i>
                  </a>
                  <a 
                    href="https://mirrors.mit.edu/CTAN/macros/latex/contrib/IEEEtran/IEEEtran_HOWTO.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-pill link-pill"
                  >
                    Guide <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              {/* Overleaf Cloud Option */}
              <div className="resource-row">
                <div className="resource-brand overleaf">
                  <i className="fas fa-leaf"></i>
                </div>
                <div className="resource-info">
                  <h4>Overleaf Online</h4>
                  <p>Edit directly in your browser with Overleaf.</p>
                </div>
                <div className="resource-downloads">
                  <a 
                    href="https://www.overleaf.com/gallery/tagged/ieee-official" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="download-pill overleaf-pill"
                  >
                    Open Overleaf <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="ieee-link-subtle">
              Templates courtesy of <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Publishing Portal <i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="cfp-cta-banner">
          <h3>Ready to Submit Your Research?</h3>
          <p>Standard submission window is open. Submit your paper via EasyChair below.</p>
          <a href={EASYCHAIR_URL} target="_blank" rel="noopener noreferrer" className="btn btn-highlight btn-lg">
            Submit Paper via EasyChair <i className="fas fa-paper-plane"></i>
          </a>
        </div>
      </div>

      {selectedTrack && (
        <TrackModal track={selectedTrack} onClose={() => setSelectedTrack(null)} />
      )}
    </section>
  );
};

export default CallForPapers;