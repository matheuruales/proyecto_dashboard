import { ConversionGauge } from "../charts/ConversionGauge";
import { Icon } from "../shared/Icons";

export function ConversionCard() {
  return (
    <article className="panel card conversion-card">
      <header className="card-header tight">
        <h2>Conversion</h2>
      </header>

      <ConversionGauge value={58.19} delta="3.5%" />

      <footer className="conversion-footer">
        <span>
          <Icon name="money" className="icon tiny-icon income" />
          Income
          <strong>$542,317</strong>
        </span>
        <span>
          <Icon name="expense" className="icon tiny-icon" />
          Expences
          <strong>$497,456</strong>
        </span>
      </footer>
    </article>
  );
}
