import { DashboardContent } from "./layout/DashboardContent";
import { TopBar } from "./layout/TopBar";
import { Sidebar } from "./navigation/Sidebar";
import { menuItems } from "./data/dashboardData";
import { Icon } from "./shared/Icons";

export function DashboardShell() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <Sidebar />
        <main className="dashboard-main">
          <TopBar />
          <DashboardContent />
        </main>
      </div>

      <nav className="mobile-bottom-nav" aria-label="Navegación principal">
        {menuItems.slice(0, 5).map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-btn${item.active ? " is-active" : ""}`}
            type="button"
            aria-label={item.label}
          >
            <span className="mobile-nav-icon-wrap">
              <Icon name={item.icon} className="icon" />
              {item.badge && (
                <span className="mobile-nav-badge">{item.badge}</span>
              )}
            </span>
            <span className="mobile-nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
