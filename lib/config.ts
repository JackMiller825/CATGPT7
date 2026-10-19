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
  liquidityStatus: "unverified",
  ownershipStatus: "unverified",
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
  status: "not configured",
  quote: "No wallet balances are shown here, because none have been verified. Buybacks, rewards, reserves, and creative spend stay unmarked until a real allocation exists. Liquidity burn and ownership renounce are the plan, not a completed event. Holder counts and payout totals will not be invented to fill this box.",
  legend: [
    { key: "buyback", label: "Buyback" },
    { key: "rewards", label: "Rewards" },
    { key: "reserve", label: "Reserve" },
    { key: "creative", label: "Creative" }
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
    tag: "concept · planned",
    meta: "not funded",
    body: "One cat, two options, and a strict ban on claiming the stare was research. When this opens, describe the choice and whether the cat clapped. Nothing is paid, and nothing has been paid.",
    foot: "not launched · no submissions"
  },
  {
    title: "The First-Paw Field Notes",
    tag: "concept · planned",
    meta: "not funded",
    body: "Cold-play the Biscuit Compiler once, after the program actually opens. Describe the idle line, the first paw, and exactly what changed. Watching without touching counts. No claims about price.",
    foot: "not launched · no submissions"
  },
  {
    title: "The Cardboard Intelligence Trials",
    tag: "concept · planned",
    meta: "not minted",
    body: "A planned page collectible for cats who stayed. Not a token, not a payout, and not an edition that exists yet. The box is drawn. The drop is not.",
    foot: "not launched · no editions"
  },
  {
    title: "The Clapping Cat Archives",
    tag: "concept · planned",
    meta: "not funded",
    body: "A planned one-panel archive: the cursor is falling, the cat is clapping, the box remains undefeated. Judging and funding are not configured. Nothing has been paid out.",
    foot: "not launched · no payouts"
  }
];

export const footerLinks = [
  { label: "X", href: tokenConfig.twitter },
  { label: "Telegram", href: tokenConfig.telegram },
  { label: "DexTools", href: tokenConfig.dextools },
  { label: "DexScreener", href: tokenConfig.dexscreener },
  { label: "Uniswap", href: tokenConfig.uniswap },
  { label: "Etherscan", href: tokenConfig.etherscan }
] as const;

export const disclaimer =
  "CatGPT 7.0 is an independent Ethereum memecoin project. It is not affiliated with OpenAI or the original CatGPT Solana project. This website does not provide financial advice or promise investment returns.";
