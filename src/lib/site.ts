const rawSiteUrl = import.meta.env.VITE_SITE_URL?.trim();

export const SITE_URL = (rawSiteUrl && rawSiteUrl.length > 0
  ? rawSiteUrl
  : "https://vaydev-portfolio-v2.vercel.app"
).replace(/\/+$/, "");

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
