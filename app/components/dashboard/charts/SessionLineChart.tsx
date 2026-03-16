import type { SessionPoint } from "../types";

interface SessionLineChartProps {
  points: SessionPoint[];
}

function buildPath(points: SessionPoint[], width: number, height: number, top = 8, bottom = 12) {
  if (points.length < 2) return "";

  const max = Math.max(...points.map((item) => item.value));
  const min = Math.min(...points.map((item) => item.value));
  const range = max - min || 1;
  const usableHeight = height - top - bottom;

  const normalized = points.map((point, index) => {
    const x = (index / (points.length - 1)) * width;
    const y = top + usableHeight - ((point.value - min) / range) * usableHeight;
    return { x, y };
  });

  let d = `M ${normalized[0].x} ${normalized[0].y}`;

  for (let index = 1; index < normalized.length; index += 1) {
    const prev = normalized[index - 1];
    const curr = normalized[index];
    const cpX = (prev.x + curr.x) / 2;
    d += ` C ${cpX} ${prev.y}, ${cpX} ${curr.y}, ${curr.x} ${curr.y}`;
  }

  return d;
}

export function SessionLineChart({ points }: SessionLineChartProps) {
  const viewBoxWidth = 360;
  const viewBoxHeight = 160;
  const d = buildPath(points, viewBoxWidth, viewBoxHeight);

  return (
    <div className="line-chart" aria-hidden="true">
      <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} role="img">
        <g className="grid-lines">
          <line x1="0" y1="25" x2={viewBoxWidth} y2="25" />
          <line x1="0" y1="55" x2={viewBoxWidth} y2="55" />
          <line x1="0" y1="85" x2={viewBoxWidth} y2="85" />
          <line x1="0" y1="115" x2={viewBoxWidth} y2="115" />
          <line x1="0" y1="145" x2={viewBoxWidth} y2="145" />
        </g>
        <path d={d} className="line-path" />
      </svg>

      <ul className="y-axis">
        <li>15</li>
        <li>10</li>
        <li>5</li>
        <li>0</li>
      </ul>
    </div>
  );
}
