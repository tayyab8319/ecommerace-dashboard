export function LoginVector() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066b3" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#0066b3" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ff8c40" stopOpacity="0.12" />
        </linearGradient>
        
        <radialGradient id="accentGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ff8c40" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ff8c40" stopOpacity="0.05" />
        </radialGradient>
        
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066b3" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#0066b3" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0066b3" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="600" fill="url(#primaryGrad)" />

      {/* Abstract flowing waves */}
      <path
        d="M0,300 Q200,250 400,300 T800,300 L800,600 L0,600 Z"
        fill="url(#waveGrad)"
        opacity="0.6"
      />
      <path
        d="M0,400 Q150,350 300,400 T600,400 Q750,450 800,400 L800,600 L0,600 Z"
        fill="url(#waveGrad)"
        opacity="0.4"
      />

      {/* Large abstract circle (left side) */}
      <circle
        cx="150"
        cy="200"
        r="120"
        fill="url(#accentGrad)"
        opacity="0.6"
      />
      <circle cx="150" cy="200" r="80" fill="none" stroke="#0066b3" strokeWidth="2" strokeOpacity="0.15" />
      <circle cx="150" cy="200" r="50" fill="none" stroke="#0066b3" strokeWidth="1.5" strokeOpacity="0.2" />

      {/* Geometric shapes - Hexagon */}
      <g transform="translate(550, 150)">
        <polygon
          points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30"
          fill="none"
          stroke="#0066b3"
          strokeWidth="3"
          strokeOpacity="0.2"
        />
        <polygon
          points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20"
          fill="#0066b3"
          fillOpacity="0.08"
        />
      </g>

      {/* Abstract lock/key concept - stylized */}
      <g transform="translate(400, 350)">
        {/* Modern lock shape */}
        <rect
          x="-40"
          y="-20"
          width="80"
          height="60"
          rx="12"
          fill="white"
          fillOpacity="0.1"
          stroke="#0066b3"
          strokeWidth="2.5"
          strokeOpacity="0.3"
        />
        <path
          d="M-30 -20 L-30 -35 Q-30 -45 -20 -45 Q-10 -45 -10 -35 L-10 -20"
          stroke="#0066b3"
          strokeWidth="2.5"
          strokeOpacity="0.3"
          fill="none"
        />
        <circle cx="0" cy="10" r="8" fill="#0066b3" fillOpacity="0.2" />
        
        {/* Key shape - abstract */}
        <g transform="translate(60, -10)">
          <circle cx="0" cy="0" r="15" fill="#ff8c40" fillOpacity="0.15" />
          <rect x="12" y="-4" width="25" height="8" rx="4" fill="#ff8c40" fillOpacity="0.15" />
          <rect x="30" y="-8" width="8" height="16" rx="2" fill="#ff8c40" fillOpacity="0.15" />
        </g>
      </g>

      {/* Floating particles/orbs */}
      <circle cx="100" cy="450" r="35" fill="#0066b3" fillOpacity="0.06" />
      <circle cx="680" cy="480" r="45" fill="#ff8c40" fillOpacity="0.08" />
      <circle cx="720" cy="120" r="30" fill="#0066b3" fillOpacity="0.05" />
      <circle cx="50" cy="150" r="25" fill="#ff8c40" fillOpacity="0.07" />
      <circle cx="650" cy="200" r="20" fill="#0066b3" fillOpacity="0.06" />

      {/* Abstract connection lines */}
      <g opacity="0.15">
        <path
          d="M150,200 Q300,250 400,350"
          stroke="#0066b3"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
        <path
          d="M550,150 Q500,250 400,350"
          stroke="#ff8c40"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
      </g>

      {/* Modern geometric pattern - bottom right */}
      <g transform="translate(650, 450)">
        <rect x="0" y="0" width="40" height="40" rx="8" fill="#0066b3" fillOpacity="0.1" transform="rotate(45 20 20)" />
        <rect x="10" y="10" width="20" height="20" rx="4" fill="#ff8c40" fillOpacity="0.15" transform="rotate(45 20 20)" />
      </g>

      {/* Abstract shield/security symbol - top center */}
      <g transform="translate(400, 80)">
        <path
          d="M0,-40 L30,0 L20,30 L-20,30 L-30,0 Z"
          fill="none"
          stroke="#0066b3"
          strokeWidth="2.5"
          strokeOpacity="0.2"
        />
        <path
          d="M0,-25 L20,5 L15,20 L-15,20 L-20,5 Z"
          fill="#0066b3"
          fillOpacity="0.08"
        />
        <circle cx="0" cy="5" r="6" fill="#ff8c40" fillOpacity="0.3" />
      </g>

      {/* Flowing curve accent */}
      <path
        d="M200,500 Q350,450 500,480 T800,460"
        stroke="#ff8c40"
        strokeWidth="3"
        fill="none"
        strokeOpacity="0.15"
        strokeLinecap="round"
      />
    </svg>
  );
}
