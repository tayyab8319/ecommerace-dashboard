export function RegisterVector() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="registerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066b3" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ff8c40" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#registerGradient)" />

      {/* Two users (sign up concept) */}
      <g transform="translate(150, 100)">
        {/* User 1 */}
        <circle cx="100" cy="80" r="35" fill="#0066b3" fillOpacity="0.2" />
        <path
          d="M50 180 Q50 150 100 150 Q150 150 150 180"
          stroke="#0066b3"
          strokeWidth="3"
          fill="none"
        />
        {/* Plus sign */}
        <line
          x1="180"
          y1="120"
          x2="220"
          y2="120"
          stroke="#ff8c40"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="200"
          y1="100"
          x2="200"
          y2="140"
          stroke="#ff8c40"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* User 2 */}
        <circle cx="280" cy="80" r="35" fill="#ff8c40" fillOpacity="0.2" />
        <path
          d="M230 180 Q230 150 280 150 Q330 150 330 180"
          stroke="#ff8c40"
          strokeWidth="3"
          fill="none"
        />
      </g>

      {/* Document/Form icon */}
      <g transform="translate(450, 200)">
        <rect
          x="50"
          y="50"
          width="150"
          height="200"
          rx="5"
          fill="white"
          fillOpacity="0.3"
          stroke="#0066b3"
          strokeWidth="2"
        />
        {/* Form lines */}
        <line
          x1="70"
          y1="80"
          x2="180"
          y2="80"
          stroke="#0066b3"
          strokeWidth="2"
          strokeOpacity="0.3"
        />
        <line
          x1="70"
          y1="110"
          x2="180"
          y2="110"
          stroke="#0066b3"
          strokeWidth="2"
          strokeOpacity="0.3"
        />
        <line
          x1="70"
          y1="140"
          x2="150"
          y2="140"
          stroke="#0066b3"
          strokeWidth="2"
          strokeOpacity="0.3"
        />
        <line
          x1="70"
          y1="170"
          x2="180"
          y2="170"
          stroke="#0066b3"
          strokeWidth="2"
          strokeOpacity="0.3"
        />
        {/* Checkmark */}
        <path
          d="M200 120 L220 140 L260 100"
          stroke="#ff8c40"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Decorative elements */}
      <circle cx="100" cy="450" r="50" fill="#0066b3" fillOpacity="0.05" />
      <circle cx="700" cy="150" r="40" fill="#ff8c40" fillOpacity="0.08" />
      <circle cx="650" cy="500" r="35" fill="#0066b3" fillOpacity="0.06" />
    </svg>
  );
}

