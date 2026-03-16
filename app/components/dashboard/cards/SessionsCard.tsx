import { sessionLabels, sessionsByDay } from "../data/dashboardData";
import { SessionLineChart } from "../charts/SessionLineChart";
import { Icon } from "../shared/Icons";

export function SessionsCard() {
  return (
    <article className="panel card sessions-card">
      <header className="card-header">
        <h2>Online Store Sessions</h2>
        <button className="ghost-button" type="button">
          View Report
        </button>
      </header>

      <section className="session-summary">
        <span className="stat-icon-wrap">
          <Icon name="users" className="icon stat-icon" />
        </span>
        <div>
          <p>Visitors</p>
          <strong>68</strong>
        </div>
        <span className="session-rank">26</span>
        <div className="session-trends">
          <span className="trend up">
            <Icon name="arrow-up" className="icon micro-icon" />
            15.6%
          </span>
          <span className="trend down">
            <Icon name="arrow-down" className="icon micro-icon" />
            1.6%
          </span>
        </div>
      </section>

      <section className="sessions-over-time">
        <div className="sessions-head">
          <h3>Sessions Over Time</h3>
          <button className="month-pill" type="button">
            <Icon name="calendar" className="icon tiny-icon" />
            February
            <Icon name="chevron-down" className="icon tiny-icon" />
          </button>
        </div>

        <SessionLineChart points={sessionsByDay} />

        <div className="session-days">
          <button className="day-nav" type="button" aria-label="Previous day">
            <Icon name="chevron-left" className="icon tiny-icon" />
          </button>
          {sessionLabels.map((day) => (
            <button key={day} className={`day-item ${day === 21 ? "is-active" : ""}`} type="button">
              {day}
            </button>
          ))}
          <button className="day-nav" type="button" aria-label="Next day">
            <Icon name="chevron-right" className="icon tiny-icon" />
          </button>
        </div>
      </section>
    </article>
  );
}
