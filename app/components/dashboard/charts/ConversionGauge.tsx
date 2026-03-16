interface ConversionGaugeProps {
  value: number;
  delta: string;
}

export function ConversionGauge({ value, delta }: ConversionGaugeProps) {
  const percentage = 80;
  const radius = 80;
  const strokeWidth = 18;
  const circumference = Math.PI * radius;
  const filledLength = (percentage / 100) * circumference;

  return (
    <div className="gauge-wrap" aria-label={`Conversion ${value}%`}>
      <svg className="gauge-svg" viewBox="0 0 200 140">
        {/* Fondo gris */}
        <path
          d="M 15 105 A 75 75 0 0 1 185 105"
          fill="none"
          stroke="#e0dff0"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Progreso morado */}
        <path
          d="M 15 105 A 75 75 0 0 1 185 105"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${filledLength} ${circumference}`}
        />
        {/* Gradiente */}
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5f63ff" />
            <stop offset="100%" stopColor="#6366ff" />
          </linearGradient>
        </defs>
        {/* Texto del porcentaje */}
        <text x="100" y="100" textAnchor="middle" className="gauge-percent">
          {value.toFixed(2).replace(".", ",")}%
        </text>
        {/* Texto del delta */}
        <text x="100" y="125" textAnchor="middle" className="gauge-delta">
          ↑ {delta}
        </text>
      </svg>
    </div>
  );
}
