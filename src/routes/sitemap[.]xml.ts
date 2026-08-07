import { createFileRoute } from "@tanstack/react-router";

import { absoluteUrl, SITE_URL } from "@/lib/seo";
import { projects } from "@/lib/projects";

const paths = ["/", "/about", "/services", "/projects", "/contact"];
const projectSlugs = projects.map((p) => p.slug);

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];

        const entries = [
          ...paths.map((p) => ({ path: p, changefreq: "weekly", priority: p === "/" ? "1.0" : "0.8", lastmod: today })),
          ...projectSlugs.map((s) => ({ path: `/projects/${s}`, changefreq: "monthly", priority: "0.6", lastmod: today })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...entries.map((e) => {
            const project = projects.find((p) => `/projects/${p.slug}` === e.path);
            const imageTag = project && project.image ? `    <image:image>\n      <image:loc>${absoluteUrl(project.image)}</image:loc>\n      <image:caption>${project.title}</image:caption>\n    </image:image>` : "";
            return [
              `  <url>`,
              `    <loc>${absoluteUrl(e.path)}</loc>`,
              `    <lastmod>${e.lastmod}</lastmod>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              imageTag ? imageTag : "",
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n");
          }),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
