import { Icon } from "../shared/Icons";

export function PromoCard() {
  return (
    <article className="panel promo-card">
      <div className="promo-copy">
        <h3>Need More Stats?</h3>
        <p>Upgrade to pro for added benefits.</p>
        <button className="promo-button" type="button">
          <span className="spark-wrap">
            <Icon name="spark" className="icon tiny-icon" />
          </span>
          Go Pro Now
        </button>
      </div>
      <div className="promo-illustration" aria-hidden="true">
        <svg className="person-svg" viewBox="0 0 80 100" fill="none">
          <circle cx="40" cy="18" r="14" fill="#D4956A"/>
          <ellipse cx="40" cy="12" rx="12" ry="8" fill="#2D2D2D"/>
          <path d="M25 35 Q20 50 22 70 L28 70 L32 50 L40 55 L48 50 L52 70 L58 70 Q60 50 55 35 Q48 28 40 28 Q32 28 25 35Z" fill="#1E3A5F"/>
          <path d="M25 38 Q15 45 12 55" stroke="#D4956A" strokeWidth="6" strokeLinecap="round"/>
          <path d="M55 38 Q65 30 70 15" stroke="#D4956A" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="70" cy="13" r="4" fill="#D4956A"/>
        </svg>
        <svg className="arrow-big" viewBox="0 0 50 50" fill="none">
          <path d="M8 42 L42 8" stroke="rgba(255,255,255,0.95)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M22 8 L42 8 L42 28" stroke="rgba(255,255,255,0.95)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="arrow-wavy-svg" viewBox="0 0 30 70" fill="none">
          <path d="M15 65 Q2 52 15 42 Q28 32 15 22 Q5 14 15 5" stroke="rgba(255,255,255,0.75)" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M10 10 L15 3 L20 10" stroke="rgba(255,255,255,0.75)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="cloud cloud-one" />
        <span className="cloud cloud-two" />
      </div>
    </article>
  );
}
