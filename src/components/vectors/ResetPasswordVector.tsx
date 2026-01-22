export function ResetPasswordVector() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="resetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066b3" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ff8c40" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#resetGradient)" />

      {/* Lock with key (reset concept) */}
      <g transform="translate(200, 100)">
        {/* Lock */}
        <rect
          x="100"
          y="150"
          width="120"
          height="100"
          rx="8"
          fill="#0066b3"
          fillOpacity="0.15"
          stroke="#0066b3"
          strokeWidth="3"
        />
        <path
          d="M130 150 L130 120 Q130 90 160 90 Q190 90 190 120 L190 150"
          stroke="#0066b3"
          strokeWidth="3"
          fill="none"
        />
        {/* Key */}
        <g transform="translate(250, 180)">
          <circle cx="30" cy="30" r="25" fill="#ff8c40" fillOpacity="0.3" />
          <rect
            x="45"
            y="25"
            width="80"
            height="10"
            rx="5"
            fill="#ff8c40"
            fillOpacity="0.3"
          />
          <rect
            x="115"
            y="20"
            width="20"
            height="25"
            rx="3"
            fill="#ff8c40"
            fillOpacity="0.3"
          />
        </g>
      </g>

      {/* Refresh/Reset arrows */}
      <g transform="translate(450, 300)">
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="#0066b3"
          strokeWidth="4"
          strokeOpacity="0.3"
        />
        <path
          d="M70 100 L50 80 M50 80 L70 60 M130 100 L150 80 M150 80 L130 60"
          stroke="#0066b3"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Checkmark (success) */}
      <g transform="translate(500, 200)">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="#ff8c40"
          fillOpacity="0.15"
          stroke="#ff8c40"
          strokeWidth="3"
        />
        <path
          d="M35 50 L45 60 L65 40"
          stroke="#ff8c40"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Decorative elements */}
      <circle cx="100" cy="450" r="50" fill="#0066b3" fillOpacity="0.05" />
      <circle cx="700" cy="100" r="40" fill="#ff8c40" fillOpacity="0.08" />
      <circle cx="650" cy="500" r="35" fill="#0066b3" fillOpacity="0.06" />
    </svg>
  );
}

