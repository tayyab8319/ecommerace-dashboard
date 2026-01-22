export function ForgetPasswordVector() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="forgetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066b3" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ff8c40" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#forgetGradient)" />

      {/* Lock with question mark */}
      <g transform="translate(250, 150)">
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
        {/* Question mark */}
        <circle cx="160" cy="200" r="25" fill="#ff8c40" fillOpacity="0.2" />
        <path
          d="M160 185 Q160 180 165 175 Q170 170 175 170 Q180 170 180 175 Q180 180 175 180 M160 195 L160 210"
          stroke="#ff8c40"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="160" cy="220" r="2" fill="#ff8c40" />
      </g>

      {/* Email/Envelope icon */}
      <g transform="translate(450, 250)">
        <rect
          x="50"
          y="80"
          width="200"
          height="140"
          rx="5"
          fill="white"
          fillOpacity="0.3"
          stroke="#0066b3"
          strokeWidth="3"
        />
        <path
          d="M50 80 L150 150 L250 80"
          stroke="#0066b3"
          strokeWidth="3"
          fill="none"
        />
        {/* Letter inside */}
        <rect
          x="80"
          y="110"
          width="140"
          height="90"
          rx="3"
          fill="#ff8c40"
          fillOpacity="0.1"
          stroke="#ff8c40"
          strokeWidth="2"
        />
        <line
          x1="100"
          y1="140"
          x2="200"
          y2="140"
          stroke="#ff8c40"
          strokeWidth="2"
          strokeOpacity="0.5"
        />
        <line
          x1="100"
          y1="165"
          x2="180"
          y2="165"
          stroke="#ff8c40"
          strokeWidth="2"
          strokeOpacity="0.5"
        />
      </g>

      {/* Arrow pointing right */}
      <g transform="translate(300, 400)">
        <path
          d="M0 50 L80 50 M60 30 L80 50 L60 70"
          stroke="#0066b3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Decorative elements */}
      <circle cx="150" cy="100" r="45" fill="#0066b3" fillOpacity="0.05" />
      <circle cx="650" cy="450" r="55" fill="#ff8c40" fillOpacity="0.06" />
      <circle cx="700" cy="150" r="30" fill="#0066b3" fillOpacity="0.08" />
    </svg>
  );
}

