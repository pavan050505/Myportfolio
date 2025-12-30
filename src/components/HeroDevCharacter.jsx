export default function HeroDevCharacter({ size = 380 }) {
  const s = Math.max(240, Math.min(520, size))
  const h = Math.round(s * (400 / 700))
  return (
    <div aria-hidden="true" style={{ width: s, height: h, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 700 400"
        width={s}
        height={h}
      >
        <style>{`
          @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-14px); } 100% { transform: translateY(0px); } }
          @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes wiggle { 0% { transform: translateY(0); opacity: 0.9; } 50% { transform: translateY(-6px); opacity: 1; } 100% { transform: translateY(0); opacity: 0.9; } }
          .float { animation: float 5s ease-in-out infinite; }
          .wiggle { animation: wiggle 3s ease-in-out infinite; }
          .orbit { animation: orbit 7s linear infinite; transform-origin: 350px 200px; }
          .glow { filter: drop-shadow(0 0 12px rgba(148, 93, 255, 0.35)); }
        `}</style>

        <ellipse cx="350" cy="200" rx="270" ry="160" fill="#e6f0ff" opacity="0.55" />

        <g className="float glow">
          <path d="M290 170 q45 40 100 0 q-8 60 -50 60 q-42 -4 -50 -60z" fill="#fcd34d" stroke="#eab308" />
          <g>
            <circle cx="340" cy="130" r="34" fill="#fff7ed" />
            <path d="M315 122 q20 -40 58 -12 q-4 24 -44 18z" fill="#111827" />
            <rect x="328" y="136" width="16" height="10" rx="3" fill="#111827" />
            <rect x="350" y="136" width="16" height="10" rx="3" fill="#111827" />
          </g>
          <path d="M315 220 q-8 36 12 52 q24 12 40 0 q16 -12 12 -52z" fill="#38bdf8" />
          <path d="M355 220 q8 36 -12 52 q-24 12 -40 0 q-16 -12 -12 -52z" fill="#38bdf8" transform="translate(40,0)" />
          <rect x="420" y="165" width="40" height="60" rx="8" fill="#0ea5b8" className="glow" />
          <rect x="426" y="178" width="28" height="14" rx="3" fill="#fff" opacity="0.55" />
        </g>

        <g className="orbit">
          <g transform="translate(350, 70)" className="wiggle">
            <circle cx="0" cy="0" r="18" fill="#ffffff" />
            <ellipse cx="0" cy="0" rx="28" ry="8" fill="none" stroke="#61dafb" strokeWidth="3" />
            <ellipse cx="0" cy="0" rx="28" ry="8" transform="rotate(60)" fill="none" stroke="#61dafb" strokeWidth="3" />
            <ellipse cx="0" cy="0" rx="28" ry="8" transform="rotate(120)" fill="none" stroke="#61dafb" strokeWidth="3" />
          </g>

          <g transform="translate(500,150)" className="wiggle">
            <circle cx="0" cy="0" r="24" fill="#ffffff" />
            <circle cx="0" cy="0" r="10" fill="#38bdf8" />
          </g>

          <g transform="translate(350,320)" className="wiggle">
            <rect x="-34" y="-16" width="68" height="32" rx="12" fill="#ffffff" />
            <text x="0" y="6" textAnchor="middle" fontSize="16" fontFamily="monospace" fill="#111827">&lt;/&gt;</text>
          </g>

          <g transform="translate(200,150)" className="wiggle">
            <path d="M0 0 L22 10 L0 20 Z" fill="#111827" />
          </g>
        </g>
      </svg>
    </div>
  )
}
