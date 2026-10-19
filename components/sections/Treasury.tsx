import { tokenConfig, treasury } from "@/lib/config";

const statusLabel = {
  unverified: "Pending verification",
  verified: "Verified",
  pending: "Pending verification"
} as const;

function statusText(value: string) {
  return value in statusLabel ? statusLabel[value as keyof typeof statusLabel] : value;
}

export function Treasury() {
  return (
    <section className="pn" id="treasury">
      <header className="pn-h">
        <h2>{treasury.heading}</h2>
        <span>{treasury.status}</span>
      </header>
      <div className="pn-b">
        <div className="split split-pending" role="img" aria-label="Treasury allocation is not configured">
          <i className="s-buyback" />
          <i className="s-rewards" />
          <i className="s-reserve" />
          <i className="s-creative" />
        </div>
        <ul className="legend">
          {treasury.legend.map((item) => (
            <li key={item.key}>
              <i className={`s-${item.key}`} />
              {item.label} <b>—</b>
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
          Network: {tokenConfig.chain} · Liquidity: {statusText(tokenConfig.liquidityStatus)} · Ownership:{" "}
          {statusText(tokenConfig.ownershipStatus)} · Contract: {tokenConfig.contractDisplay}
        </p>
      </div>
    </section>
  );
}
