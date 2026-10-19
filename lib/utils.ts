import { tokenConfig } from "./config";

export function isFilled(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function isContractAddress(value: string | null | undefined): value is string {
  return typeof value === "string" && /^0x[a-fA-F0-9]{40}$/.test(value);
}

export function shortAddress(value: string) {
  return `${value.slice(0, 6)}…${value.slice(-4)}`;
}

export function contractLabel(short = false) {
  const address = tokenConfig.contractAddress;
  if (!isContractAddress(address)) return tokenConfig.contractDisplay;
  return short ? shortAddress(address) : address;
}

export function buyHref() {
  return isFilled(tokenConfig.uniswap) ? tokenConfig.uniswap : "";
}

export function communityHref() {
  if (isFilled(tokenConfig.twitter)) return tokenConfig.twitter;
  if (isFilled(tokenConfig.telegram)) return tokenConfig.telegram;
  return "";
}
