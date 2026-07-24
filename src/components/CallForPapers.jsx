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
  }
];

const CallForPapers = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <section className="section cfp-section" id="cfp">
      <div className="container">
        <h2 className="section-title">Call for Papers & Submission Tracks</h2>
        <p className="cfp-intro">
          I3CTS 2027 invites original, high-quality research papers across four core thematic tracks.
          Click on any track card below to view extended sub-topics and submission guidelines.
        </p>

        <div className="cfp-topics-grid">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="glass-card topic-card interactive-track-card"
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

        <div className="glass-card submission-guidelines">
          <h3><i className="fas fa-file-invoice"></i> General Submission Guidelines</h3>
          <ul>
            <li>All submitted papers must represent original, unpublished work not under review elsewhere.</li>
            <li>Submissions must adhere to standard IEEE/I3CTS double-column conference formatting guidelines.</li>
            <li>The standard submission window remains open for two full months from the opening date.</li>
            <li>Peer review follows a rigorous double-blind evaluation process by the international technical program committee.</li>
          </ul>
        </div>

        <div className="cfp-cta">
          <p>Ready to present your research at I3CTS 2027?</p>
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
