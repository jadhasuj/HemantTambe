import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hmtambe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-06-23"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-IN": `${siteUrl}/`,
          "mr-IN": `${siteUrl}/mr`,
        },
      },
    },
    {
      url: `${siteUrl}/mr`,
      lastModified: new Date("2026-06-23"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-IN": `${siteUrl}/`,
          "mr-IN": `${siteUrl}/mr`,
        },
      },
    },
  ];
}
