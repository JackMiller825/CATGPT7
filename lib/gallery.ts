import { assets } from "./assets";

export type GalleryKind = "meme" | "ascii" | "lore";

export type GalleryItem = {
  id: string;
  kind: GalleryKind;
  title: string;
  caption: string;
  date: string;
  alt?: string;
  src?: string;
  text?: string;
};

const date = "2026-10-19";

const memes: Array<Omit<GalleryItem, "id" | "kind" | "date">> = [
  {
    title: "Blankets filed. Decision pending.",
    caption: "The cape stayed on. The blankets did the rest.",
    alt: "Black cat in a red cape and gold Ethereum pendant, nested in cream blankets with green cushions",
    src: assets.gallery[0]
  },
  {
    title: "The hat was already in the box.",
    caption: "A knit hat, a cardboard rim, and no ruling on either.",
    alt: "Black cat wearing a green knit hat and red cape, paws on the rim of a cardboard box",
    src: assets.gallery[1]
  },
  {
    title: "Cursor and biscuit. Still no ruling.",
    caption: "One red cursor, one glowing biscuit, zero urgency.",
    alt: "Black cat in a cardboard box between a red pixel cursor and a glowing blue biscuit",
    src: assets.gallery[2]
  },
  {
    title: "The checklist grew a spider.",
    caption: "The bug report stayed pinned. The cat pressed the cursor anyway.",
    alt: "Black cat inside a cardboard box pressing a glowing teal cursor, with a checklist and a drawn spider",
    src: assets.gallery[3]
  },
  {
    title: "One paw on the green button.",
    caption: "Pawprints on the wall. The smaller box is already open.",
    alt: "Black cat in a red cape pressing a round button with a green triangle, beside an open cardboard box",
    src: assets.gallery[4]
  },
  {
    title: "Clapping, because the box won.",
    caption: "Both paws together. The surrounding boxes stayed empty.",
    alt: "Black cat clapping inside a cardboard box, red cape and Ethereum pendant visible",
    src: assets.gallery[5]
  },
  {
    title: "The velvet chair can wait.",
    caption: "Five seats empty is generous. The cat brought its own.",
    alt: "Black cat sitting in a cardboard box beside a green chair piled with paw-shaped cushions",
    src: assets.gallery[6]
  },
  {
    title: "Four steps. Zero urgency.",
    caption: "The paw button is lit. The cat has not used the stairs.",
    alt: "Black cat in a box beside cardboard stairs and a glowing paw display",
    src: assets.gallery[7]
  },
  {
    title: "Pawprints, and a green cursor.",
    caption: "The box is open. The cat is still deciding whether that counts.",
    alt: "Black cat with clasped paws beside an open box of glowing pawprints and a green cursor",
    src: assets.gallery[8]
  },
  {
    title: "The cursor is waiting. So is the cat.",
    caption: "An hourglass, a circuit box, and one raised paw.",
    alt: "Black cat waving from a circuit-patterned cardboard box under a glowing cursor and hourglass",
    src: assets.gallery[9]
  },
  {
    title: "The box left the monitor.",
    caption: "A green cursor, a small box, and a cat that did not follow either inside.",
    alt: "Black cat on a desk beside a retro monitor showing a green cursor and a tiny cardboard box",
    src: assets.gallery[10]
  },
  {
    title: "Process sleeping. Box confirmed.",
    caption: "The diagrams kept glowing. The cat did not.",
    alt: "Sleeping black cat draped over a cardboard box traced with glowing interface lines",
    src: assets.gallery[11]
  },
  {
    title: "The highlighted box is not the cat.",
    caption: "Four boxes in a row. The ring missed the one with whiskers.",
    alt: "Black cat behind four small boxes, the third circled by a glowing ring and the fourth marked by a cursor",
    src: assets.gallery[12]
  },
  {
    title: "Four boxes. One paw. No verdict.",
    caption: "The green ring hovered. The paw stayed on cardboard.",
    alt: "Black cat resting a paw on one of four paw-printed boxes while a green ring floats nearby",
    src: assets.gallery[13]
  },
  {
    title: "Exactly on the windowsill of the box.",
    caption: "Sunlight, a paw print, and no plan to get out.",
    alt: "Black cat leaning out of a cardboard box on a sunny windowsill",
    src: assets.gallery[14]
  },
  {
    title: "Six paw prints. One occupied box.",
    caption: "The circuit box is full. The biscuits are decorative.",
    alt: "Black cat curled in a circuit-lined box, surrounded by six paw-shaped biscuits",
    src: assets.gallery[15]
  },
  {
    title: "Four paws above the rock. Box closed.",
    caption: "A locked box with a beetle seal. The cat chose the stack.",
    alt: "Black cat balanced on a stack of paw cushions beside a closed wooden box on a cliff",
    src: assets.gallery[16]
  },
  {
    title: "The glass checked the middle box.",
    caption: "Five boxes. One paw print. The magnifier is not a conclusion.",
    alt: "Illustrated black cat holding a magnifying glass over a row of cardboard boxes",
    src: assets.gallery[17]
  },
  {
    title: "Three boxes. The middle one glows.",
    caption: "Clapping is not the same as choosing. The paw print appeared anyway.",
    alt: "Black cat clasping its paws behind three small boxes, the center lid glowing with a paw print",
    src: assets.gallery[18]
  },
  {
    title: "The cursor cracked the floor, not the decision.",
    caption: "Two paw cushions. One box. The crack is cosmetic.",
    alt: "Black cat in a circuit box with a glowing cursor between two paw cushions and a crack in the floor",
    src: assets.gallery[19]
  },
  {
    title: "Two paws short of leaving the box.",
    caption: "The bookmarks have paw prints. The cat has the rim.",
    alt: "Black cat peering over a box filled with paw-print bookmarks while a small cursor floats nearby",
    src: assets.gallery[20]
  },
  {
    title: "The inspector inspected the inspector.",
    caption: "A magnifying glass, three smaller boxes, and a cursor that arrived late.",
    alt: "Illustrated black cat in a box holding a magnifying glass toward three smaller boxes marked with paw prints",
    src: assets.gallery[21]
  }
];

const asciiBoot = `     /\\_/\\
    ( o.o )--o
  +--+---+----------+
  |  CATGPT 7.0     |
  |  chain: eth     |
  |  status: clap   |
  +-----------------+`;

const asciiNap = `[1] init: nap
     /\\_/\\
    ( -.- )--o
  +--+---+--------+
  |  CATGPT 7.0   |
  |  boot: zzz    |
  +---------------+

[2] click: 1
     /\\_/\\
    ( o.o )--o
  +--+---+--------+
  |  CATGPT 7.0   |
  |  event: clap  |
  +---------------+

[3] exit: 0
  +---------------+
  |   /\\_/\\       |
  |  ( -.- )--o   |
  |  still in box |
  +---------------+`;

export const gallery: GalleryItem[] = [
  ...memes.map((item, index) => ({
    ...item,
    id: `meme-${String(index + 1).padStart(2, "0")}`,
    kind: "meme" as const,
    date
  })),
  {
    id: "ascii-boot",
    kind: "ascii",
    title: "Boot sequence, still in the box",
    caption: "Text picture of the same cat. No model claimed this one.",
    date,
    text: asciiBoot
  },
  {
    id: "ascii-nap",
    kind: "ascii",
    title: "Cursor caught. Cat process sleeping.",
    caption: "Three frames. The box remains the destination.",
    date,
    text: asciiNap
  },
  {
    id: "lore-exit",
    kind: "lore",
    title: "The Compiler Has an Exit",
    caption: "A fictional field note. Not a model log.",
    date,
    text: "Under a warm lamp, CatGPT 7.0 found a cardboard box and treated it as a specification. The biscuit compiler offered one puzzle: slide the lid one whisker to the left. A perfectly good chair stood two steps away.\n\nThe cat inspected both. Leaving required no explanation. Staying required none either. It clapped once, for the box, and filed the chair as unresolved."
  },
  {
    id: "lore-errors",
    kind: "lore",
    title: "Biscuit Compiler: No Errors, No Output",
    caption: "A fictional field note. Not a benchmark.",
    date,
    text: "CatGPT 7.0 initialized beside a cardboard box. The box was empty, which met specifications. A red cape was already on, which had not been requested.\n\nLeft paw: attempted compile. Right paw: attempted compile. Repeat. The log recorded clapping and no useful output. The pendant kept swinging. Nobody called this a trading strategy."
  }
];

export const galleryFilters = [
  { id: "all", label: "all" },
  { id: "meme", label: "memes" },
  { id: "ascii", label: "ascii" },
  { id: "lore", label: "lore" }
] as const;

export type GalleryFilter = (typeof galleryFilters)[number]["id"];

export function filterGallery(kind: GalleryFilter) {
  if (kind === "all") return gallery;
  return gallery.filter((item) => item.kind === kind);
}

export const kindLabel: Record<GalleryKind, string> = {
  meme: "meme",
  ascii: "ascii art",
  lore: "lore"
};
