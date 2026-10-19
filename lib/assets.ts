const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const pad = (index: number) => String(index).padStart(2, "0");

export function publicPath(path: string) {
  return `${base}${path}`;
}

export const assets = {
  logo: publicPath("/assets/logo.png"),
  banner: publicPath("/assets/banner.png"),
  telegramBanner: publicPath("/assets/telegram.png"),
  mascot: publicPath("/assets/mascot.png"),
  icon: publicPath("/icon.png"),
  gallery: Array.from({ length: 22 }, (_, index) => publicPath(`/assets/gallery/${pad(index + 1)}.png`))
} as const;

export const alternateAssets = {
  logo: publicPath("/assets/alternate-logo.png"),
  banner: publicPath("/assets/alternate-banner.png"),
  telegramBanner: publicPath("/assets/alternate-telegram.png"),
  mascot: publicPath("/assets/alternate-mascot.png")
} as const;
