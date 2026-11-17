import type { MetadataRoute } from "next";
import { entries } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://sinan-alekar.vercel.app";
  return ["", "/about", "/projects", "/library", "/docs", "/resume", "/contact", ...entries.map(entry => `/library/${entry.slug}`)]
    .map(path => ({ url: new URL(path || "/", base).toString() }));
}
