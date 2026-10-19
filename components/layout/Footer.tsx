import Image from "next/image";
import { assets } from "@/lib/assets";
import { footerLinks, tokenConfig } from "@/lib/config";
import { contractLabel, isFilled } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-in">
        <Image src={assets.logo} alt="" width={88} height={88} />
        <div>
          <b>
            {tokenConfig.name} · {tokenConfig.symbol}
          </b>
          <code>{contractLabel(false)}</code>
        </div>
        <nav aria-label="External links">
          {footerLinks.map((link) =>
            isFilled(link.href) ? (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <span key={link.label} title={`${link.label} is not configured yet`}>
                {link.label}
              </span>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
