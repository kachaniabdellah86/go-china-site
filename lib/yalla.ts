export type Locale = "fr" | "en" | "ar";

export const siteBaseUrl = "https://yallachina.com";

export const founderName = "Aymane Badri";

export const primaryWhatsappNumberDisplay = "+212 638-335452";
export const primaryWhatsappNumberRaw = "212638335452";

export const secondaryWhatsappNumberDisplay = "+212 707-298029";
export const secondaryWhatsappNumberRaw = "212707298029";

export const contactEmail = "contact@yallachina.com";
export const instagramHandle = "@yallachina.ma";
export const instagramUrl = "https://www.instagram.com/yallachina.ma/";

export const supportedCities = {
  fr: [
    "Chongqing",
    "Nanchang",
    "Ningbo",
    "Harbin",
    "Xi'an",
    "Chengdu",
    "Zhejiang",
  ],
  en: [
    "Chongqing",
    "Nanchang",
    "Ningbo",
    "Harbin",
    "Xi'an",
    "Chengdu",
    "Zhejiang",
  ],
  ar: [
    "تشونغتشينغ",
    "نانتشانغ",
    "نينغبو",
    "هاربين",
    "شيآن",
    "تشنغدو",
    "تشجيانغ",
  ],
} as const;

export const packageFacts = {
  pack1Price: "15 000 DH",
  pack2Price: "23 000 DH",
  commitmentsCount: "3",
  citiesCount: "7",
  packagesCount: "2",
} as const;

export function buildWhatsappUrl(
  text?: string,
  numberRaw = primaryWhatsappNumberRaw
) {
  if (!text) {
    return `https://wa.me/${numberRaw}`;
  }

  return `https://wa.me/${numberRaw}?text=${encodeURIComponent(text)}`;
}
