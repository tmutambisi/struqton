import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "";

import { projects } from "@/lib/projects";

const paths = ["/", "/about", "/services", "/projects", "/contact"];
const projectSlugs = projects.map((p) => p.slug);

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          ...paths.map((p) => ({ path: p, changefreq: "weekly", priority: p === "/" ? "1.0" : "0.8" })),
          ...projectSlugs.map((s) => ({ path: `/projects/${s}`, changefreq: "monthly", priority: "0.6" })),
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ].join("\n")
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
