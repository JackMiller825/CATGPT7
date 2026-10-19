const pad = (index: number) => String(index).padStart(2, "0");

export const assets = {
  logo: "/assets/logo.png",
  banner: "/assets/banner.png",
  telegramBanner: "/assets/telegram.png",
  mascot: "/assets/mascot.png",
  icon: "/icon.png",
  gallery: Array.from(
    { length: 22 },
    (_, index) => `/assets/gallery/${pad(index + 1)}.png`
  )
} as const;

export const alternateAssets = {
  logo: "/assets/alternate-logo.png",
  banner: "/assets/alternate-banner.png",
  telegramBanner: "/assets/alternate-telegram.png",
  mascot: "/assets/alternate-mascot.png"
} as const;
