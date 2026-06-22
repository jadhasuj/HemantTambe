import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hmt-construction.example",
      lastModified: new Date("2026-06-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
