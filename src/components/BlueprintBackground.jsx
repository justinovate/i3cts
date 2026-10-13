import './BlueprintBackground.css';

const BlueprintBackground = ({ isLive = false }) => {
  return (
    <div className={`blueprint-bg-container ${isLive ? 'is-liftoff' : ''}`} aria-hidden="true">
      {/* Ambient Launch Origin Radial Glow (Pulses during liftoff) */}
      <div className="launch-origin-glow" />

      <svg
        viewBox="0 0 1200 900"
        className="blueprint-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Vertical Exhaust Plume Gradient */}
          <linearGradient id="thrustPlumeGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(37, 99, 235, 0)" />
            <stop offset="30%" stopColor="rgba(37, 99, 235, 0.12)" />
            <stop offset="70%" stopColor="rgba(56, 189, 248, 0.22)" />
            <stop offset="100%" stopColor="rgba(37, 99, 235, 0.35)" />
          </linearGradient>

          {/* Shock Diamond Accent Gradient */}
          <linearGradient id="shockDiamondGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.1)" />
          </linearGradient>
        </defs>

        {/* Global Blueprint Grid & Radial Reference Coordinates */}
        <g className="blueprint-reticles-group">
          {/* Left GNC Target Reticle */}
          <g transform="translate(250, 420)" className="reticle-marker">
            <circle cx="0" cy="0" r="42" className="blueprint-hairline-circle" />
            <circle cx="0" cy="0" r="24" className="blueprint-hairline-circle dashed" />
            <line x1="-54" y1="0" x2="54" y2="0" className="blueprint-hairline-line" />
            <line x1="0" y1="-54" x2="0" y2="54" className="blueprint-hairline-line" />
            <line x1="-12" y1="-12" x2="-6" y2="-6" className="blueprint-hairline-line" />
            <line x1="12" y1="12" x2="6" y2="6" className="blueprint-hairline-line" />
            <line x1="-12" y1="12" x2="-6" y2="6" className="blueprint-hairline-line" />
            <line x1="12" y1="-12" x2="6" y2="-6" className="blueprint-hairline-line" />
            <text x="-38" y="58" className="blueprint-schematic-text">GNC-TRK // 01-A</text>
            <text x="-38" y="70" className="blueprint-schematic-text">LAT 14.5995° N</text>
          </g>

          {/* Right Orbit Target Reticle */}
          <g transform="translate(950, 420)" className="reticle-marker">
            <circle cx="0" cy="0" r="42" className="blueprint-hairline-circle" />
            <circle cx="0" cy="0" r="24" className="blueprint-hairline-circle dashed" />
            <line x1="-54" y1="0" x2="54" y2="0" className="blueprint-hairline-line" />
            <line x1="0" y1="-54" x2="0" y2="54" className="blueprint-hairline-line" />
            <line x1="-12" y1="-12" x2="-6" y2="-6" className="blueprint-hairline-line" />
            <line x1="12" y1="12" x2="6" y2="6" className="blueprint-hairline-line" />
            <line x1="-12" y1="12" x2="-6" y2="6" className="blueprint-hairline-line" />
            <line x1="12" y1="-12" x2="6" y2="-6" className="blueprint-hairline-line" />
            <text x="-38" y="58" className="blueprint-schematic-text">ORBIT-CAL // 02-B</text>
            <text x="-38" y="70" className="blueprint-schematic-text">LON 120.9842° E</text>
          </g>

          {/* Background Technical Orbital Guideline Arcs */}
          <ellipse cx="600" cy="450" rx="460" ry="210" transform="rotate(-12 600 450)" className="blueprint-orbit-path" />
          <ellipse cx="600" cy="450" rx="390" ry="260" transform="rotate(28 600 450)" className="blueprint-orbit-path" />
        </g>

        {/* =========================================================================
            Rocket Blueprint Schematic Assembly (Fuselage, Fins, Engines, Annotations)
            ========================================================================= */}
        <g className="blueprint-rocket-schematic">
          {/* Vertical Exhaust Thrust Plume & Supersonic Trace (Activates on liftoff) */}
          <g className="rocket-thrust-plume">
            {/* Main Center Engine Jet Stream */}
            <path
              d="M 540 735 Q 510 830 460 920 L 740 920 Q 690 830 660 735 Z"
              fill="url(#thrustPlumeGrad)"
              className="thrust-plume-fill"
            />
            {/* Supersonic Core Shock Diamond Vector Traces */}
            <polygon points="600,746 614,764 600,782 586,764" className="shock-diamond" />
            <polygon points="600,788 618,810 600,832 582,810" className="shock-diamond" />
            <polygon points="600,838 622,864 600,890 578,864" className="shock-diamond" />

            {/* High-Velocity Thrust Streamlines */}
            <line x1="562" y1="735" x2="550" y2="920" className="thrust-streamline" />
            <line x1="580" y1="742" x2="574" y2="920" className="thrust-streamline" />
            <line x1="600" y1="745" x2="600" y2="930" className="thrust-streamline center" />
            <line x1="620" y1="742" x2="626" y2="920" className="thrust-streamline" />
            <line x1="638" y1="735" x2="650" y2="920" className="thrust-streamline" />
          </g>

          {/* Central Structural Symmetry Centerline */}
          <line x1="600" y1="60" x2="600" y2="780" className="blueprint-centerline" />

          {/* Tri-Fin Stabilizer Geometry (Base aerodynamic fins) */}
          <g className="rocket-fins">
            {/* Left Stabilizer Fin */}
            <path
              d="M 545 565 L 430 705 L 438 722 L 540 686 Z"
              className="blueprint-fin-profile"
            />
            {/* Left Fin Control Surface & Internal Spar Line */}
            <line x1="448" y1="702" x2="542" y2="665" className="blueprint-fin-spar" />
            <line x1="465" y1="680" x2="495" y2="700" className="blueprint-fin-spar dashed" />

            {/* Right Stabilizer Fin */}
            <path
              d="M 655 565 L 770 705 L 762 722 L 660 686 Z"
              className="blueprint-fin-profile"
            />
            {/* Right Fin Control Surface & Internal Spar Line */}
            <line x1="752" y1="702" x2="658" y2="665" className="blueprint-fin-spar" />
            <line x1="735" y1="680" x2="705" y2="700" className="blueprint-fin-spar dashed" />

            {/* Center Dorsal Aerodynamic Ridge Spine */}
            <line x1="600" y1="565" x2="600" y2="685" className="blueprint-dorsal-ridge" />
          </g>

          {/* Main Aerodynamic Hull Profile (Fuselage) */}
          <g className="rocket-fuselage">
            {/* Nose Cone Apex Pitot / Telemetry Probe */}
            <line x1="600" y1="85" x2="600" y2="120" className="blueprint-probe-line" />
            <circle cx="600" cy="85" r="2.5" className="blueprint-vertex" />

            {/* Aerodynamic Fairing & Core Hull Outline */}
            <path
              d="M 600 120 
                 C 582 155 560 215 548 290 
                 L 544 445 
                 L 542 565 
                 L 538 670 
                 L 545 705 
                 L 655 705 
                 L 662 670 
                 L 658 565 
                 L 656 445 
                 L 652 290 
                 C 640 215 618 155 600 120 Z"
              className="blueprint-hull-outline"
            />

            {/* Longitudinal Stringer Trace Lines */}
            <path
              d="M 600 120 C 592 165 580 220 574 290 L 570 445 L 568 565 L 566 670"
              className="blueprint-stringer"
            />
            <path
              d="M 600 120 C 608 165 620 220 626 290 L 630 445 L 632 565 L 634 670"
              className="blueprint-stringer"
            />

            {/* 4 Elliptical Cross-Section Structural Bulkhead Rings */}
            {/* Ring 1: Payload Fairing Separation Ring */}
            <ellipse cx="600" cy="290" rx="52" ry="12" className="blueprint-bulkhead-ring" />
            {/* Ring 2: Stage-II Avionics & Tank Bulkhead */}
            <ellipse cx="600" cy="445" rx="56" ry="13" className="blueprint-bulkhead-ring" />
            {/* Ring 3: Interstage Separation Plane */}
            <ellipse cx="600" cy="565" rx="58" ry="13.5" className="blueprint-bulkhead-ring" />
            {/* Ring 4: Booster Thrust Structure Deck */}
            <ellipse cx="600" cy="670" rx="61" ry="14" className="blueprint-bulkhead-ring" />

            {/* Intermediate Internal Fuel Baffle Ribs */}
            <ellipse cx="600" cy="370" rx="54" ry="12.5" className="blueprint-bulkhead-ring dashed" />
            <ellipse cx="600" cy="505" rx="57" ry="13" className="blueprint-bulkhead-ring dashed" />
            <ellipse cx="600" cy="620" rx="59" ry="13.5" className="blueprint-bulkhead-ring dashed" />

            {/* Internal Payload / CubeSat Wireframe Inside Fairing */}
            <g className="payload-cubesat-schematic">
              <rect x="586" y="200" width="28" height="38" rx="2" className="cubesat-chassis" />
              <line x1="586" y1="219" x2="614" y2="219" className="cubesat-divider" />
              {/* Solar Array Deployables */}
              <rect x="562" y="208" width="24" height="20" rx="1" className="cubesat-solar-panel" />
              <line x1="574" y1="208" x2="574" y2="228" className="cubesat-grid" />
              <rect x="614" y="208" width="24" height="20" rx="1" className="cubesat-solar-panel" />
              <line x1="626" y1="208" x2="626" y2="228" className="cubesat-grid" />
              {/* High-Gain Antenna Dish */}
              <path d="M 592 192 Q 600 184 608 192" className="cubesat-antenna" />
              <line x1="600" y1="187" x2="600" y2="200" className="cubesat-antenna-stem" />
            </g>

            {/* Interstage Vented Truss Structural Bracing */}
            <g className="interstage-truss">
              <line x1="544" y1="445" x2="572" y2="475" className="blueprint-truss-strut" />
              <line x1="572" y1="445" x2="544" y2="475" className="blueprint-truss-strut" />
              <line x1="572" y1="445" x2="600" y2="475" className="blueprint-truss-strut" />
              <line x1="600" y1="445" x2="572" y2="475" className="blueprint-truss-strut" />
              <line x1="600" y1="445" x2="628" y2="475" className="blueprint-truss-strut" />
              <line x1="628" y1="445" x2="600" y2="475" className="blueprint-truss-strut" />
              <line x1="628" y1="445" x2="656" y2="475" className="blueprint-truss-strut" />
              <line x1="656" y1="445" x2="628" y2="475" className="blueprint-truss-strut" />
            </g>
          </g>

          {/* Engine Propulsion Cluster (Tri-nozzle bell geometry) */}
          <g className="rocket-engine-cluster">
            {/* Center Main Engine Bell */}
            <path
              d="M 588 705 L 580 738 L 620 738 L 612 705 Z"
              className="blueprint-nozzle-bell"
            />
            <ellipse cx="600" cy="738" rx="20" ry="5.5" className="blueprint-nozzle-exit" />
            <line x1="592" y1="715" x2="608" y2="715" className="blueprint-nozzle-exit dashed" />

            {/* Left Outboard Engine Bell */}
            <path
              d="M 552 705 L 546 732 L 576 732 L 570 705 Z"
              className="blueprint-nozzle-bell"
            />
            <ellipse cx="561" cy="732" rx="15" ry="4.5" className="blueprint-nozzle-exit" />

            {/* Right Outboard Engine Bell */}
            <path
              d="M 630 705 L 624 732 L 654 732 L 648 705 Z"
              className="blueprint-nozzle-bell"
            />
            <ellipse cx="639" cy="732" rx="15" ry="4.5" className="blueprint-nozzle-exit" />

            {/* Thrust Vector Alignment Centerline Marks */}
            <line x1="561" y1="736" x2="561" y2="765" className="blueprint-thrust-vector" />
            <line x1="600" y1="744" x2="600" y2="780" className="blueprint-thrust-vector" />
            <line x1="639" y1="736" x2="639" y2="765" className="blueprint-thrust-vector" />
          </g>

          {/* Technical Dimension Guidelines & Drafting Annotations */}
          <g className="blueprint-dimensions">
            {/* Left Vertical Dimension Line */}
            <line x1="390" y1="120" x2="390" y2="738" className="blueprint-dimension-line" />
            {/* Arrowheads / Witness Caps */}
            <line x1="382" y1="120" x2="398" y2="120" className="blueprint-witness-cap" />
            <line x1="382" y1="738" x2="398" y2="738" className="blueprint-witness-cap" />

            {/* Horizontal Dimension Extension Witness Lines */}
            <line x1="390" y1="120" x2="585" y2="120" className="blueprint-witness-extension" />
            <line x1="390" y1="290" x2="540" y2="290" className="blueprint-witness-extension" />
            <line x1="390" y1="445" x2="535" y2="445" className="blueprint-witness-extension" />
            <line x1="390" y1="565" x2="532" y2="565" className="blueprint-witness-extension" />
            <line x1="390" y1="738" x2="540" y2="738" className="blueprint-witness-extension" />

            {/* Technical Monospace Specification Labels */}
            <text x="375" y="440" transform="rotate(-90 375 440)" className="blueprint-dimension-label">
              TOTAL STACK LENGTH // 58.4 M
            </text>
            <text x="445" y="195" className="blueprint-annotation-text">
              PAYLOAD FAIRING Ø 3.4M
            </text>
            <text x="445" y="375" className="blueprint-annotation-text">
              STAGE-II LOX/LH2 CORE
            </text>
            <text x="430" y="515" className="blueprint-annotation-text">
              INTERSTAGE SEPARATION PLANE
            </text>
            <text x="785" y="650" className="blueprint-annotation-text">
              TRI-CORE STABILIZER FINS
            </text>
            <text x="785" y="725" className="blueprint-annotation-text">
              CLUSTER SEA-LEVEL THRUST 3.8 MN
            </text>

            {/* Minor Drafting Measurement Ticks Along Witness Line */}
            {[180, 240, 340, 400, 500, 620, 680].map((y) => (
              <line key={`tick-${y}`} x1="386" y1={y} x2="394" y2={y} className="blueprint-witness-tick" />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BlueprintBackground;
