import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hmtambe.com",
      lastModified: new Date("2026-06-23"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-IN": "https://hmtambe.com",
          "mr-IN": "https://hmtambe.com/mr",
        },
      },
    },
    {
      url: "https://hmtambe.com/mr",
      lastModified: new Date("2026-06-23"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-IN": "https://hmtambe.com",
          "mr-IN": "https://hmtambe.com/mr",
        },
      },
    },
  ];
}
