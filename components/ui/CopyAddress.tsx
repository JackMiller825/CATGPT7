"use client";

import { useState } from "react";
import { tokenConfig } from "@/lib/config";
import { isContractAddress } from "@/lib/utils";
import { useToast } from "./Toast";

export function CopyAddress({ wide = false, short = false }: { wide?: boolean; short?: boolean }) {
  const address = tokenConfig.contractAddress as string | null;
  const ready = isContractAddress(address);
  const toast = useToast();
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast("contract copied to clipboard");
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      toast("copy failed — select it by hand");
    }
  }

  const label = !ready ? tokenConfig.contractDisplay : short ? `${address.slice(0, 6)}…${address.slice(-4)}` : address;

  return (
    <button
      type="button"
      className={`ca${wide ? " ca-wide" : ""}${copied ? " ok" : ""}`}
      onClick={copy}
      disabled={!ready}
      aria-label={ready ? "Copy Ethereum contract address" : "Contract address not announced"}
    >
      <i />
      <code>{label}</code>
      <s>{ready ? (copied ? "copied" : "copy") : "soon"}</s>
    </button>
  );
}
