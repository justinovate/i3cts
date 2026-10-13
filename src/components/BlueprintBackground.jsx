import './BlueprintBackground.css';

const BlueprintBackground = () => {
  return (
    <div className="blueprint-bg-container" aria-hidden="true">
      <svg
        viewBox="0 0 1200 800"
        className="blueprint-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="schematic-group">
          {/* Main Coordinate Datum Axes */}
          <line
            x1="220" y1="390" x2="1140" y2="390"
            pathLength="100"
            className="schematic-path"
          />
          <line
            x1="680" y1="80" x2="680" y2="700"
            pathLength="100"
            className="schematic-path"
          />

          {/* Radial Geometry Rays */}
          <line
            x1="490" y1="200" x2="870" y2="580"
            pathLength="100"
            className="schematic-path delay-1"
          />
          <line
            x1="420" y1="540" x2="940" y2="240"
            pathLength="100"
            className="schematic-path delay-1"
          />

          {/* Primary Concentric Optics & Radar Rings */}
          <circle
            cx="680" cy="390" r="60"
            pathLength="100"
            className="schematic-path schematic-accent"
          />
          <circle
            cx="680" cy="390" r="130"
            pathLength="100"
            className="schematic-path delay-1"
          />
          <circle
            cx="680" cy="390" r="210"
            pathLength="100"
            className="schematic-path delay-2"
          />
          <circle
            cx="680" cy="390" r="290"
            pathLength="100"
            className="schematic-path delay-3"
          />

          {/* Dashed Secondary Technical Ring */}
          <circle
            cx="680" cy="390" r="170"
            className="schematic-dashed"
            fill="none"
            stroke="rgba(37, 99, 235, 0.12)"
            strokeWidth="1.2"
          />

          {/* Planetary & Orbital Ellipses (Space & GRASS Pillar) */}
          <ellipse
            cx="680" cy="390" rx="390" ry="160"
            transform="rotate(-16 680 390)"
            pathLength="100"
            className="schematic-path delay-1"
          />
          <ellipse
            cx="680" cy="390" rx="340" ry="215"
            transform="rotate(34 680 390)"
            pathLength="100"
            className="schematic-path delay-2"
          />

          {/* Optical Lenses / Refractor Curves (Microscopy & Sensor Array) */}
          <path
            d="M 570 210 Q 640 390 570 570"
            pathLength="100"
            className="schematic-path delay-2"
          />
          <path
            d="M 790 210 Q 720 390 790 570"
            pathLength="100"
            className="schematic-path delay-2"
          />

          {/* Satellite Payload Wireframe at (920, 260) */}
          <rect
            x="910" y="250" width="20" height="20" rx="2"
            pathLength="100"
            className="schematic-path schematic-accent delay-3"
          />
          {/* Solar Panel Wings */}
          <line
            x1="886" y1="260" x2="910" y2="260"
            pathLength="100"
            className="schematic-path delay-3"
          />
          <line
            x1="930" y1="260" x2="954" y2="260"
            pathLength="100"
            className="schematic-path delay-3"
          />
          <rect
            x="886" y="254" width="18" height="12" rx="1"
            pathLength="100"
            className="schematic-path delay-3"
          />
          <rect
            x="936" y="254" width="18" height="12" rx="1"
            pathLength="100"
            className="schematic-path delay-3"
          />

          {/* Telemetry Vector Beam from Satellite to Origin */}
          <line
            x1="920" y1="270" x2="680" y2="390"
            pathLength="100"
            className="schematic-path delay-3"
            strokeDasharray="3 3"
          />

          {/* Axis Calibration Tick Marks */}
          <g className="schematic-ticks">
            <line x1="550" y1="385" x2="550" y2="395" pathLength="100" className="schematic-path delay-1" />
            <line x1="615" y1="385" x2="615" y2="395" pathLength="100" className="schematic-path delay-1" />
            <line x1="745" y1="385" x2="745" y2="395" pathLength="100" className="schematic-path delay-1" />
            <line x1="810" y1="385" x2="810" y2="395" pathLength="100" className="schematic-path delay-1" />
            <line x1="875" y1="385" x2="875" y2="395" pathLength="100" className="schematic-path delay-1" />
            <line x1="675" y1="260" x2="685" y2="260" pathLength="100" className="schematic-path delay-1" />
            <line x1="675" y1="325" x2="685" y2="325" pathLength="100" className="schematic-path delay-1" />
            <line x1="675" y1="455" x2="685" y2="455" pathLength="100" className="schematic-path delay-1" />
            <line x1="675" y1="520" x2="685" y2="520" pathLength="100" className="schematic-path delay-1" />
          </g>

          {/* Telemetry Coordinate Nodes */}
          <circle cx="680" cy="390" r="3.5" className="schematic-dot" />
          <circle cx="920" cy="260" r="3" className="schematic-dot" />
          <circle cx="490" cy="200" r="2.5" className="schematic-dot" />
          <circle cx="870" cy="580" r="2.5" className="schematic-dot" />
          <circle cx="340" cy="340" r="3" className="schematic-dot" />
          <circle cx="1020" cy="440" r="3" className="schematic-dot" />
        </g>
      </svg>
    </div>
  );
};

export default BlueprintBackground;
