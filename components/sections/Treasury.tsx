import { tokenConfig, treasury } from "@/lib/config";

export function Treasury() {
  return (
    <section className="pn" id="treasury">
      <header className="pn-h">
        <h2>{treasury.heading}</h2>
        <span>{treasury.status}</span>
      </header>
      <div className="pn-b">
        <div className="split" role="img" aria-label="Split: buyback 10%, rewards 10%, reserve 75%, creative 5%">
          {treasury.legend.map((item) => (
            <i key={item.key} className={`s-${item.key}`} style={{ flexGrow: item.share }} />
          ))}
        </div>
        <ul className="legend">
          {treasury.legend.map((item) => (
            <li key={item.key}>
              <i className={`s-${item.key}`} />
              {item.label} <b>{item.share}%</b>
            </li>
          ))}
        </ul>
        <blockquote>{treasury.quote}</blockquote>
        <ul className="assets">
          {treasury.facts.map((fact) => (
            <li key={fact.label}>
              <b>{fact.label}</b>
              <span>{fact.value}</span>
              <em>{fact.note}</em>
            </li>
          ))}
        </ul>
        <p className="note">
          Network: {tokenConfig.chain} · LP: {tokenConfig.liquidityStatus} · Ownership: {tokenConfig.ownershipStatus} ·
          Contract: {tokenConfig.contractDisplay}
        </p>
      </div>
    </section>
  );
}
