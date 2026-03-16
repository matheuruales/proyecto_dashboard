import type { StatItem } from "../types";
import { Icon } from "../shared/Icons";

interface StatCardProps {
  item: StatItem;
}

export function StatCard({ item }: StatCardProps) {
  const trendIcon = item.trend === "up" ? "arrow-up" : "arrow-down";

  return (
    <article className="stat-card">
      <span className="stat-icon-wrap">
        <Icon name={item.icon} className="icon stat-icon" />
      </span>
      <div className="stat-content">
        <p>{item.label}</p>
        <div className="stat-main">
          <strong>{item.value}</strong>
          <span className={`stat-delta ${item.trend}`}>
            <Icon name={trendIcon} className="icon micro-icon" />
            {item.delta}
          </span>
        </div>
      </div>
    </article>
  );
}
