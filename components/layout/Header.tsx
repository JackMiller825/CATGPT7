"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "@/lib/assets";
import { tokenConfig } from "@/lib/config";
import { isFilled } from "@/lib/utils";
import { CopyAddress } from "@/components/ui/CopyAddress";
import { XIcon } from "@/components/ui/XIcon";

const links = [
  { href: "#mind", label: "Mind" },
  { href: "#treasury", label: "Treasury" },
  { href: "#programs", label: "Programs" },
  { href: "#box", label: "Box" },
  { href: "#made", label: "Made" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const x = tokenConfig.twitter;

  return (
    <header className="bar">
      <a className="bar-brand" href="#top">
        <Image src={assets.logo} alt="" width={76} height={76} priority />
        <span>
          <b>CATGPT <span className="ver">7.0</span></b>
          <em>{tokenConfig.symbol}</em>
        </span>
      </a>
      <nav className={open ? "bar-nav open" : "bar-nav"} aria-label="Sections">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "✕" : "☰"}
      </button>
      {isFilled(x) ? (
        <a className="bar-x" href={x} target="_blank" rel="noopener noreferrer" aria-label="CatGPT 7.0 on X">
          <XIcon />
        </a>
      ) : (
        <span className="bar-x is-off" aria-disabled="true" title="X link not configured yet">
          <XIcon />
        </span>
      )}
      <CopyAddress short />
    </header>
  );
}
