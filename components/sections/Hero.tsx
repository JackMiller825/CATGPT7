"use client";

import Image from "next/image";
import { assets } from "@/lib/assets";
import { hero, tokenConfig } from "@/lib/config";
import { buyHref, communityHref, isFilled } from "@/lib/utils";
import { CopyAddress } from "@/components/ui/CopyAddress";
import { XIcon } from "@/components/ui/XIcon";
import { useToast } from "@/components/ui/Toast";

export function Hero() {
  const toast = useToast();
  const buy = buyHref();
  const community = communityHref();

  return (
    <section className="hero">
      <div className="hero-art">
        <Image
          src={assets.banner}
          alt="CatGPT 7.0, a black cat in a red cape with a gold Ethereum pendant, seated on cardboard boxes"
          fill
          priority
          sizes="(max-width: 880px) 100vw, 640px"
        />
      </div>
      <div className="hero-body">
        <p className="kicker">
          <i className="dot" />
          {hero.kicker}
        </p>
        <h1>{hero.title}</h1>
        <p className="lead">{hero.lead}</p>
        <div className="hero-btns">
          {isFilled(buy) ? (
            <a className="btn btn-primary" href={buy} target="_blank" rel="noopener noreferrer">
              Buy {tokenConfig.symbol}
            </a>
          ) : (
            <button
              className="btn btn-primary"
              type="button"
              aria-disabled="true"
              onClick={() => toast("Buy route coming soon. No market is linked until a contract is verified.")}
            >
              Buy {tokenConfig.symbol}
            </button>
          )}
          {isFilled(community) ? (
            <a className="btn btn-x" href={community} target="_blank" rel="noopener noreferrer">
              <XIcon />
              Community
            </a>
          ) : (
            <button
              className="btn btn-x"
              type="button"
              aria-disabled="true"
              onClick={() => toast("Community link coming soon.")}
            >
              <XIcon />
              Community
            </button>
          )}
        </div>
        <CopyAddress wide />
      </div>
    </section>
  );
}
