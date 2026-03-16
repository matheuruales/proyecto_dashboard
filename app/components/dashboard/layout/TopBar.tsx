import { Icon } from "../shared/Icons";

export function TopBar() {
  return (
    <header className="topbar">
      {/* Header móvil */}
      <div className="mobile-header">
        <div className="mobile-brand">
          <div className="brand-badge" aria-hidden="true">
            <span>R</span>
          </div>
          <span className="brand-label">flex</span>
        </div>
        <div className="mobile-header-right">
          <button className="round-button notify" type="button" aria-label="Notificaciones">
            <Icon name="bell" className="icon small-icon" />
            <span className="notify-dot" />
          </button>
          <div className="avatar" aria-hidden="true" />
        </div>
      </div>
      <div className="topbar-row">
        <div className="search-group">
          <button className="collapse-btn" type="button" aria-label="Toggle sidebar">
            <Icon name="chevron-left" className="icon small-icon" />
          </button>
          <label className="search-field" aria-label="Search">
            <Icon name="search" className="icon small-icon" />
            <input type="text" defaultValue="" placeholder="Search" />
          </label>
        </div>

        <div className="profile-group">
          <button className="round-button notify" type="button" aria-label="Notifications">
            <Icon name="bell" className="icon small-icon" />
            <span className="notify-dot" />
          </button>

          <div className="balance">
            <span className="balance-label">Your Balance</span>
            <strong>$5.456</strong>
          </div>

          <div className="profile">
            <div className="avatar" aria-hidden="true" />
            <span>
              Hi, <strong>Lay</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="topbar-row second">
        <div className="title-group">
          <span className="title-icon-wrap">
            <Icon name="home" className="icon title-icon" />
          </span>
          <h1>Dashboard</h1>
        </div>

        <div className="actions">
          <button className="month-select" type="button">
            <span>
              <Icon name="calendar" className="icon tiny-icon" />
              This Month
            </span>
            <Icon name="chevron-down" className="icon tiny-icon" />
          </button>

          <button className="download-button" type="button">
            <Icon name="download" className="icon tiny-icon" />
            Download Report
          </button>
        </div>
      </div>
    </header>
  );
}
