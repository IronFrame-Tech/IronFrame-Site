'use client'

export function NetworkTopology() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow-cyan">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-blue">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Lines / connections */}
      <line x1="200" y1="80" x2="100" y2="160" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" className="network-flow" />
      <line x1="200" y1="80" x2="300" y2="160" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" className="network-flow" />
      <line x1="100" y1="160" x2="60" y2="240" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.35" className="network-flow-slow" />
      <line x1="100" y1="160" x2="150" y2="245" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.35" className="network-flow-slow" />
      <line x1="300" y1="160" x2="260" y2="245" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.35" className="network-flow-slow" />
      <line x1="300" y1="160" x2="340" y2="240" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.35" className="network-flow-slow" />

      {/* Core router */}
      <rect x="175" y="55" width="50" height="50" rx="8" fill="#0d1a2e" stroke="#06b6d4" strokeWidth="1.5" filter="url(#glow-cyan)" />
      <text x="200" y="86" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace">CORE</text>

      {/* Switches */}
      <rect x="72" y="140" width="56" height="40" rx="6" fill="#0d1a2e" stroke="#3b82f6" strokeWidth="1.2" filter="url(#glow-blue)" />
      <text x="100" y="165" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">SW-01</text>

      <rect x="272" y="140" width="56" height="40" rx="6" fill="#0d1a2e" stroke="#3b82f6" strokeWidth="1.2" filter="url(#glow-blue)" />
      <text x="300" y="165" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">SW-02</text>

      {/* End nodes */}
      {[60, 150, 260, 340].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={240} r={10} fill="#112240" stroke={i % 2 === 0 ? '#06b6d4' : '#3b82f6'} strokeWidth="1.2" />
          <circle cx={x} cy={240} r={3} fill={i % 2 === 0 ? '#22d3ee' : '#60a5fa'} className="animate-[nodePulse_3s_ease-in-out_infinite]" />
        </g>
      ))}

      {/* Labels */}
      <text x="60" y="258" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">PC</text>
      <text x="150" y="258" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">AP</text>
      <text x="260" y="258" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">AP</text>
      <text x="340" y="258" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">PC</text>

      {/* Status dot */}
      <circle cx="192" cy="68" r="4" fill="#10b981" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
