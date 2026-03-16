import { statItems } from "../data/dashboardData";
import { ConversionCard } from "../cards/ConversionCard";
import { PromoCard } from "../cards/PromoCard";
import { SessionsCard } from "../cards/SessionsCard";
import { StatCard } from "../cards/StatCard";

export function DashboardContent() {
  return (
    <section className="dashboard-content">
      <div className="stats-grid">
        {statItems.map((item) => (
          <StatCard key={item.id} item={item} />
        ))}
      </div>

      <div className="content-grid">
        <SessionsCard />
        <div className="right-column">
          <PromoCard />
          <ConversionCard />
        </div>
      </div>
    </section>
  );
}
