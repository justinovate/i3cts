import './BlueprintBackground.css';

const nodes = [
  { id: 0, x: 600, y: 400, r: 3.5, hub: true },
  { id: 1, x: 520, y: 340, r: 2.5 },
  { id: 2, x: 680, y: 330, r: 2.5 },
  { id: 3, x: 690, y: 460, r: 2.5 },
  { id: 4, x: 510, y: 450, r: 2.5 },
  { id: 5, x: 600, y: 270, r: 3 },
  { id: 6, x: 600, y: 520, r: 3 },
  { id: 7, x: 410, y: 290, r: 2.5 },
  { id: 8, x: 420, y: 480, r: 2.5 },
  { id: 9, x: 780, y: 280, r: 3, hub: true },
  { id: 10, x: 800, y: 490, r: 2.5 },
  { id: 11, x: 710, y: 190, r: 2 },
  { id: 12, x: 490, y: 190, r: 2 },
  { id: 13, x: 480, y: 590, r: 2 },
  { id: 14, x: 720, y: 590, r: 2 },
  { id: 15, x: 320, y: 230, r: 2.5 },
  { id: 16, x: 300, y: 400, r: 3, hub: true },
  { id: 17, x: 310, y: 560, r: 2 },
  { id: 18, x: 880, y: 210, r: 2.5 },
  { id: 19, x: 910, y: 390, r: 3, hub: true },
  { id: 20, x: 890, y: 560, r: 2 },
  { id: 21, x: 600, y: 140, r: 2 },
  { id: 22, x: 600, y: 660, r: 2 },
  { id: 23, x: 220, y: 310, r: 2 },
  { id: 24, x: 980, y: 290, r: 2 },
  { id: 25, x: 970, y: 490, r: 2 },
  { id: 26, x: 230, y: 490, r: 2 }
];

const connections = [
  // Center Hub Links
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  // Inner Ring
  [1, 2], [2, 3], [3, 4], [4, 1],
  // Middle Layer Connections
  [1, 7], [1, 5], [1, 12],
  [2, 9], [2, 5], [2, 11],
  [3, 10], [3, 6], [3, 14],
  [4, 8], [4, 6], [4, 13],
  [5, 11], [5, 12], [5, 21],
  [6, 13], [6, 14], [6, 22],
  // Constellation Outer Links
  [7, 15], [7, 16], [7, 12],
  [8, 16], [8, 17], [8, 13],
  [9, 18], [9, 19], [9, 11],
  [10, 19], [10, 20], [10, 14],
  [15, 23], [16, 23], [16, 26], [17, 26],
  [18, 24], [19, 24], [19, 25], [20, 25],
  [11, 21], [12, 21], [13, 22], [14, 22]
];

const BlueprintBackground = () => {
  return (
    <div className="blueprint-bg-container" aria-hidden="true">
      <svg
        viewBox="0 0 1200 800"
        className="blueprint-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="neural-mesh-group">
          {/* Subtle Technical Reference Orbital Arcs */}
          <ellipse
            cx="600" cy="400" rx="420" ry="175"
            transform="rotate(-15 600 400)"
            className="neural-orbit-trace"
          />
          <ellipse
            cx="600" cy="400" rx="360" ry="230"
            transform="rotate(32 600 400)"
            className="neural-orbit-trace"
          />
          <circle
            cx="600" cy="400" r="140"
            className="neural-signal-ring"
          />
          <circle
            cx="600" cy="400" r="280"
            className="neural-signal-ring dashed"
          />

          {/* Neural Synapse Vector Connecting Lines */}
          <g className="neural-lines">
            {connections.map(([fromId, toId], idx) => {
              const from = nodes[fromId];
              const to = nodes[toId];
              return (
                <line
                  key={`line-${idx}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className="neural-edge"
                />
              );
            })}
          </g>

          {/* Compute / Synapse Nodes */}
          <g className="neural-nodes">
            {nodes.map((node) => (
              <g key={`node-${node.id}`} className="node-group">
                {node.hub && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r * 2.2}
                    className="node-glow-ring"
                  />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  className="node-vertex"
                />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BlueprintBackground;
