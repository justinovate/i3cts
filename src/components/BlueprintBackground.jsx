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
          {/* Main Coordinate Datum Axes (Centered at 600, 400) */}
          <line
            x1="120" y1="400" x2="1080" y2="400"
            pathLength="100"
            className="schematic-path"
          />
          <line
            x1="600" y1="80" x2="600" y2="720"
            pathLength="100"
            className="schematic-path"
          />

          {/* Radial Geometry Rays */}
          <line
            x1="410" y1="210" x2="790" y2="590"
            pathLength="100"
            className="schematic-path delay-1"
          />
          <line
            x1="340" y1="550" x2="860" y2="250"
            pathLength="100"
            className="schematic-path delay-1"
          />

          {/* Concentric Optics & Radar Rings */}
          <circle
            cx="600" cy="400" r="55"
            pathLength="100"
            className="schematic-path schematic-accent"
          />
          <circle
            cx="600" cy="400" r="125"
            pathLength="100"
            className="schematic-path delay-1"
          />
          <circle
            cx="600" cy="400" r="200"
            pathLength="100"
            className="schematic-path delay-2"
          />
          <circle
            cx="600" cy="400" r="285"
            pathLength="100"
            className="schematic-path delay-3"
          />

          {/* Dashed Secondary Technical Ring */}
          <circle
            cx="600" cy="400" r="160"
            className="schematic-dashed"
            fill="none"
            stroke="rgba(37, 99, 235, 0.10)"
            strokeWidth="1.2"
          />

          {/* Planetary & Orbital Ellipses (Space & GRASS Pillar) */}
          <ellipse
            cx="600" cy="400" rx="380" ry="155"
            transform="rotate(-18 600 400)"
            pathLength="100"
            className="schematic-path delay-1"
          />
          <ellipse
            cx="600" cy="400" rx="335" ry="210"
            transform="rotate(32 600 400)"
            pathLength="100"
            className="schematic-path delay-2"
          />

          {/* Optical Lenses / Refractor Curves */}
          <path
            d="M 490 220 Q 560 400 490 580"
            pathLength="100"
            className="schematic-path delay-2"
          />
          <path
            d="M 710 220 Q 640 400 710 580"
            pathLength="100"
            className="schematic-path delay-2"
          />

          {/* Satellite Payload Wireframe at (850, 270) */}
          <rect
            x="840" y="260" width="20" height="20" rx="2"
            pathLength="100"
            className="schematic-path schematic-accent delay-3"
          />
          {/* Solar Panel Wings */}
          <line
            x1="816" y1="270" x2="840" y2="270"
            pathLength="100"
            className="schematic-path delay-3"
          />
          <line
            x1="860" y1="270" x2="884" y2="270"
            pathLength="100"
            className="schematic-path delay-3"
          />
          <rect
            x="816" y="264" width="18" height="12" rx="1"
            pathLength="100"
            className="schematic-path delay-3"
          />
          <rect
            x="866" y="264" width="18" height="12" rx="1"
            pathLength="100"
            className="schematic-path delay-3"
          />

          {/* Telemetry Vector Beam from Satellite to Origin */}
          <line
            x1="850" y1="280" x2="600" y2="400"
            pathLength="100"
            className="schematic-path delay-3"
            strokeDasharray="3 3"
          />

          {/* Axis Calibration Tick Marks */}
          <g className="schematic-ticks">
            <line x1="470" y1="395" x2="470" y2="405" pathLength="100" className="schematic-path delay-1" />
            <line x1="535" y1="395" x2="535" y2="405" pathLength="100" className="schematic-path delay-1" />
            <line x1="665" y1="395" x2="665" y2="405" pathLength="100" className="schematic-path delay-1" />
            <line x1="730" y1="395" x2="730" y2="405" pathLength="100" className="schematic-path delay-1" />
            <line x1="795" y1="395" x2="795" y2="405" pathLength="100" className="schematic-path delay-1" />
            <line x1="595" y1="270" x2="605" y2="270" pathLength="100" className="schematic-path delay-1" />
            <line x1="595" y1="335" x2="605" y2="335" pathLength="100" className="schematic-path delay-1" />
            <line x1="595" y1="465" x2="605" y2="465" pathLength="100" className="schematic-path delay-1" />
            <line x1="595" y1="530" x2="605" y2="530" pathLength="100" className="schematic-path delay-1" />
          </g>

          {/* Telemetry Coordinate Nodes */}
          <circle cx="600" cy="400" r="3.5" className="schematic-dot" />
          <circle cx="850" cy="270" r="3" className="schematic-dot" />
          <circle cx="410" cy="210" r="2.5" className="schematic-dot" />
          <circle cx="790" cy="590" r="2.5" className="schematic-dot" />
          <circle cx="260" cy="350" r="3" className="schematic-dot" />
          <circle cx="940" cy="450" r="3" className="schematic-dot" />
        </g>
      </svg>
    </div>
  );
};

export default BlueprintBackground;
