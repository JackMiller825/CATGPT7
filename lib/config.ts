export const tokenConfig = {
  name: "CatGPT 7.0",
  ticker: "CATGPT7",
  symbol: "$CATGPT7",
  chain: "Ethereum",
  chainId: 1,
  standard: "ERC-20",
  contractAddress: null,
  contractDisplay: "Coming Soon..",
  totalSupply: 1_000_000_000,
  taxBuy: 0,
  taxSell: 0,
  liquidityStatus: "Burn",
  ownershipStatus: "Renounce",
  website: "",
  telegram: "",
  twitter: "",
  dextools: "",
  dexscreener: "",
  uniswap: "",
  etherscan: ""
} as const;

export const supplyLabel = "1,000,000,000";

export const bootLines = [
  "catgpt7@ethereum:~$ wake",
  "loading the cardboard universe… ok",
  "decision engine initialized… ok",
  "biscuit compiler ready"
] as const;

export const bootDelays = [200, 900, 1500, 2100] as const;

export const hero = {
  kicker: "catgpt 7.0 · ethereum · erc-20",
  title: "CATGPT",
  lead: "Too smart to decide. Too cat to care. It considers every difficult decision, claps its paws, and somehow still ends up in a cardboard box.",
  slogan: "Too smart to decide. Too cat to care."
} as const;

export const mind = {
  heading: "The mind",
  machine: "catgpt-7.0 / ethereum / fictional decision engine",
  name: "CATGPT 7.0 Mind",
  model: "catgpt-7.0 / ethereum",
  body: "CatGPT 7.0 was trained on impossible decisions, cardboard architecture, and the ancient art of clapping after finally making up its mind. It thinks deeply, stares dramatically, and occasionally produces a useful answer. The decision engine is fiction. It is not an OpenAI product, not a live trading agent, and not a promise that the box retains anybody.",
  notes: [
    { tone: "pending" as const, label: "pending", text: "Publish a verified Ethereum contract" },
    { tone: "planned" as const, label: "planned", text: "Open first-paw notes once the box is live" }
  ]
};

export const treasury = {
  heading: "Treasury thesis",
  status: "balanced",
  quote: "The split stays put: buyback 10, rewards 10, reserve 75, creative 5. LP is burned. Ownership is renounced. The contract line still reads Coming Soon until an address is published.",
  legend: [
    { key: "buyback", label: "Buyback", share: 10 },
    { key: "rewards", label: "Rewards", share: 10 },
    { key: "reserve", label: "Reserve", share: 75 },
    { key: "creative", label: "Creative", share: 5 }
  ],
  facts: [
    { label: "ETH", value: "Mainnet", note: "ERC-20" },
    { label: "SUPPLY", value: supplyLabel, note: tokenConfig.symbol },
    { label: "TAX", value: "0%", note: "buy & sell" }
  ]
};

export type Program = {
  title: string;
  tag: string;
  meta: string;
  body: string;
  foot: string;
  done?: boolean;
};

export const programs: Program[] = [
  {
    title: "The Great Decision Test",
    tag: "contest · active",
    meta: "0.1 ETH",
    body: "An open contest. Describe the decision the cat made, and whether it clapped. 0.1 ETH is reserved for the round. No claims about price.",
    foot: "0 submissions so far"
  },
  {
    title: "The First-Paw Field Notes",
    tag: "drop · active",
    meta: "30 editions",
    body: "A live drop of 30 editions. Cold-play the Biscuit Compiler, or watch without touching. Page collectibles, not a payout. The draw skips the top 10 holders.",
    foot: "random pick · top 10 holders excluded"
  },
  {
    title: "The Cardboard Intelligence Trials",
    tag: "contest · paid",
    meta: "0.25 ETH",
    body: "A closed contest. One panel: the cursor falls, the cat stays in the box. 0.25 ETH was the purse. Judged on originality and deadpan.",
    foot: "2 submissions · paid out",
    done: true
  },
  {
    title: "The Clapping Cat Archives",
    tag: "quest · paid",
    meta: "0.2 ETH",
    body: "A closed quest. Eight equal shares for cats who held the line. 0.2 ETH was reserved and sent.",
    foot: "8 completers · paid out",
    done: true
  }
];

export const footerLinks = [
  { label: "X", href: tokenConfig.twitter },
  { label: "Telegram", href: tokenConfig.telegram },
  { label: "DexTools", href: tokenConfig.dextools },
  { label: "DexScreener", href: tokenConfig.dexscreener }
] as const;
