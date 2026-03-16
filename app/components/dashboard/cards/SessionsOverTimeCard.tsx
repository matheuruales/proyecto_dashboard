import { sessionLabels, sessionsByDay } from "../data/dashboardData";
import { SessionLineChart } from "../charts/SessionLineChart";
import { Icon } from "../shared/Icons";

export function SessionsOverTimeCard() {
  return (
    <article className="panel card sessions-over-time-card">
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
