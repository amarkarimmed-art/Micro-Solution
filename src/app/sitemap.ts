import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date("2026-10-30");
  return [
    {
      url: "https://www.nomira.ma",
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.nomira.ma/mentions-legales",
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://www.nomira.ma/confidentialite",
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://www.nomira.ma/cgu",
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
