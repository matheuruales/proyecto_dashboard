import { DashboardContent } from "./layout/DashboardContent";
import { TopBar } from "./layout/TopBar";
import { Sidebar } from "./navigation/Sidebar";

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
    </div>
  );
}
