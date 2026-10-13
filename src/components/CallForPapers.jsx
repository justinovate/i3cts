import { useState } from 'react';
import './CallForPapers.css';
import TrackModal from './TrackModal';
import { EASYCHAIR_URL } from '../constants';

const tracks = [
  {
    id: 1,
    refCode: 'REF: TRK-01 // CONSUMER-SYS',
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
    },
    svgType: 'pcb'
  },
  {
    id: 2,
    refCode: 'REF: TRK-02 // COMP-AI',
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
    },
    svgType: 'ai'
  },
  {
    id: 3,
    refCode: 'REF: TRK-03 // COMM-NET',
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
    },
    svgType: 'comm'
  },
  {
    id: 4,
    refCode: 'REF: TRK-04 // EDTECH-PED',
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
    },
    svgType: 'edtech'
  },
  {
    id: 5,
    refCode: 'REF: TRK-05 // GRASS-ORBIT',
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
    },
    svgType: 'space'
  }
];

const renderBlueprintSvg = (type) => {
  switch (type) {
    case 'pcb':
      return (
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="track-blueprint-svg">
          <rect x="70" y="70" width="60" height="60" rx="4" strokeDasharray="3 3" />
          <circle cx="80" cy="80" r="3" fill="currentColor" />
          <text x="100" y="104" fontSize="10" fontFamily="monospace" textAnchor="middle" fill="currentColor" stroke="none">MCU-84</text>
          <line x1="60" y1="80" x2="70" y2="80" />
          <line x1="60" y1="90" x2="70" y2="90" />
          <line x1="60" y1="100" x2="70" y2="100" />
          <line x1="60" y1="110" x2="70" y2="110" />
          <line x1="130" y1="80" x2="140" y2="80" />
          <line x1="130" y1="90" x2="140" y2="90" />
          <line x1="130" y1="100" x2="140" y2="100" />
          <line x1="130" y1="110" x2="140" y2="110" />
          <path d="M60 80 L35 80 L20 65 L20 25" />
          <circle cx="20" cy="25" r="3" />
          <path d="M60 100 L40 100 L25 115 L25 170" />
          <circle cx="25" cy="170" r="3" />
          <path d="M140 80 L165 80 L180 65 L180 20" />
          <circle cx="180" cy="20" r="3" />
          <path d="M140 110 L160 110 L175 125 L175 180" />
          <circle cx="175" cy="180" r="3" />
          <path d="M90 70 L90 40 L105 25 L135 25" />
          <circle cx="135" cy="25" r="3" />
          <path d="M110 130 L110 160 L95 175 L65 175" />
          <circle cx="65" cy="175" r="3" />
          <line x1="10" y1="10" x2="25" y2="10" strokeDasharray="2 2" />
          <line x1="10" y1="10" x2="10" y2="25" strokeDasharray="2 2" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="track-blueprint-svg">
          <circle cx="35" cy="50" r="7" />
          <circle cx="35" cy="100" r="7" />
          <circle cx="35" cy="150" r="7" />
          <circle cx="95" cy="40" r="7" />
          <circle cx="95" cy="80" r="7" />
          <circle cx="95" cy="120" r="7" />
          <circle cx="95" cy="160" r="7" />
          <circle cx="165" cy="75" r="9" />
          <circle cx="165" cy="125" r="9" />
          <line x1="42" y1="50" x2="88" y2="40" strokeDasharray="2 1" />
          <line x1="42" y1="50" x2="88" y2="80" />
          <line x1="42" y1="100" x2="88" y2="40" />
          <line x1="42" y1="100" x2="88" y2="80" />
          <line x1="42" y1="100" x2="88" y2="120" />
          <line x1="42" y1="150" x2="88" y2="120" />
          <line x1="42" y1="150" x2="88" y2="160" />
          <line x1="102" y1="40" x2="156" y2="75" />
          <line x1="102" y1="80" x2="156" y2="75" />
          <line x1="102" y1="80" x2="156" y2="125" />
          <line x1="102" y1="120" x2="156" y2="75" />
          <line x1="102" y1="120" x2="156" y2="125" />
          <line x1="102" y1="160" x2="156" y2="125" />
          <rect x="20" y="20" width="160" height="160" rx="6" strokeDasharray="4 4" />
          <text x="100" y="194" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="currentColor" stroke="none">NN.TENSOR // L3-CORE</text>
        </svg>
      );
    case 'comm':
      return (
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="track-blueprint-svg">
          <line x1="70" y1="170" x2="100" y2="90" />
          <line x1="130" y1="170" x2="100" y2="90" />
          <line x1="78" y1="145" x2="122" y2="145" />
          <line x1="88" y1="120" x2="112" y2="120" />
          <line x1="100" y1="90" x2="100" y2="60" />
          <circle cx="100" cy="55" r="6" fill="currentColor" />
          <path d="M75 40 A35 35 0 0 1 125 40" strokeDasharray="4 2" />
          <path d="M55 25 A60 60 0 0 1 145 25" strokeDasharray="5 3" />
          <path d="M35 10 A85 85 0 0 1 165 10" strokeDasharray="6 4" />
          <circle cx="30" cy="90" r="5" />
          <circle cx="170" cy="85" r="5" />
          <circle cx="45" cy="140" r="4" />
          <circle cx="155" cy="135" r="4" />
          <line x1="35" y1="90" x2="95" y2="60" strokeDasharray="2 2" />
          <line x1="165" y1="85" x2="105" y2="60" strokeDasharray="2 2" />
          <line x1="30" y1="95" x2="45" y2="136" />
          <line x1="170" y1="90" x2="155" y2="131" />
          <text x="100" y="192" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="currentColor" stroke="none">FREQ: 28GHz // MIMO-6G</text>
        </svg>
      );
    case 'edtech':
      return (
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="track-blueprint-svg">
          <path d="M60 165 L140 165 L130 155 L70 155 Z" />
          <path d="M125 155 C145 140 145 100 135 80 L115 80" />
          <line x1="65" y1="125" x2="115" y2="125" strokeWidth="2" />
          <line x1="100" y1="40" x2="125" y2="70" strokeWidth="3" />
          <line x1="90" y1="30" x2="105" y2="48" strokeWidth="2" />
          <circle cx="108" cy="88" r="8" />
          <line x1="104" y1="96" x2="100" y2="116" strokeWidth="2" />
          <line x1="112" y1="96" x2="116" y2="112" strokeWidth="1.5" />
          <line x1="100" y1="116" x2="100" y2="150" strokeDasharray="3 3" />
          <path d="M30 45 A50 50 0 0 1 70 20" strokeDasharray="3 3" />
          <line x1="25" y1="45" x2="35" y2="45" />
          <line x1="70" y1="15" x2="70" y2="25" />
          <text x="100" y="192" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="currentColor" stroke="none">LAB.OPTIC // CAL-400X</text>
        </svg>
      );
    case 'space':
      return (
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className="track-blueprint-svg">
          <path d="M100 60 L135 78 L100 96 L65 78 Z" />
          <path d="M65 78 L65 125 L100 143 L100 96 Z" />
          <path d="M135 78 L135 125 L100 143 L100 96 Z" />
          <path d="M65 78 L20 60 L20 107 L65 125 Z" strokeDasharray="3 2" />
          <line x1="35" y1="66" x2="35" y2="113" />
          <line x1="50" y1="72" x2="50" y2="119" />
          <path d="M135 78 L180 60 L180 107 L135 125 Z" strokeDasharray="3 2" />
          <line x1="150" y1="72" x2="150" y2="119" />
          <line x1="165" y1="66" x2="165" y2="113" />
          <ellipse cx="100" cy="100" rx="90" ry="40" strokeDasharray="4 4" transform="rotate(-20 100 100)" />
          <circle cx="175" cy="75" r="3" fill="currentColor" />
          <text x="100" y="24" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="currentColor" stroke="none">[LAT 14.59° // LON 120.98°]</text>
          <text x="100" y="190" fontSize="8" fontFamily="monospace" textAnchor="middle" fill="currentColor" stroke="none">ORBIT: LEO-550KM // 3U-SAT</text>
        </svg>
      );
    default:
      return null;
  }
};

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
              className="topic-card interactive-track-card schematic-box stagger-reveal"
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
              {/* Corner Drafting Registration Marks */}
              <span className="corner-mark top-left"></span>
              <span className="corner-mark top-right"></span>
              <span className="corner-mark bottom-left"></span>
              <span className="corner-mark bottom-right"></span>

              {/* Blueprint Vector Watermark */}
              <div className="track-blueprint-watermark" aria-hidden="true">
                {renderBlueprintSvg(track.svgType)}
              </div>

              <div className="track-card-header">
                <span className="track-badge">Track {track.id}</span>
                <i className={`fas ${track.icon} track-icon`}></i>
              </div>

              {/* Technical Monospace Index Label */}
              <div className="track-ref-label">{track.refCode}</div>

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

        {/* Call to Action Banner */}
        <div className="cfp-cta-banner schematic-box">
          <span className="corner-mark top-left"></span>
          <span className="corner-mark top-right"></span>
          <span className="corner-mark bottom-left"></span>
          <span className="corner-mark bottom-right"></span>

          <span className="hud-mono-tag">// SUBMISSION-PORTAL</span>
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