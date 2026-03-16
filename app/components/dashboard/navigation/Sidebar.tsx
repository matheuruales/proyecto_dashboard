import { integrations, menuItems } from "../data/dashboardData";
import { Icon } from "../shared/Icons";

function Brand() {
  return (
    <div className="brand">
      <div className="brand-badge" aria-hidden="true">
        <span>R</span>
      </div>
      <span className="brand-label">flex</span>
    </div>
  );
}

function NavigationMenu() {
  return (
    <section className="sidebar-section">
      <p className="sidebar-title">Menu</p>
      <nav aria-label="Main menu">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button className={`menu-item ${item.active ? "is-active" : ""}`} type="button">
                <span className="menu-item-left">
                  <Icon name={item.icon} className="icon nav-icon" />
                  {item.label}
                </span>
                <span className="menu-item-right">
                  {item.badge ? <span className="badge">{item.badge}</span> : null}
                  {item.hasChevron ? <Icon name="chevron-down" className="icon tiny-icon" /> : null}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

function Integrations() {
  return (
    <section className="sidebar-section integrations">
      <p className="sidebar-title">Integrations</p>
      <ul className="integration-list">
        {integrations.map((item) => (
          <li key={item.id}>
            <button className="integration-item" type="button">
              <Icon name={item.icon} className={`icon integration-icon ${item.id}`} />
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Brand />
      <NavigationMenu />
      <Integrations />
      <button className="logout-button" type="button">
        <Icon name="logout" className="icon nav-icon" />
        Logout
      </button>
    </aside>
  );
}
