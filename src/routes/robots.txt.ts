import { createFileRoute } from "@tanstack/react-router";

import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/robots/txt")({
  server: {
    handlers: {
      GET: async () => {
        const host = SITE_URL.replace(/^https?:\/\//, "");
        const txt = [
          "User-agent: *",
          "Allow: /",
          `Sitemap: ${SITE_URL}/sitemap.xml`,
          `Host: ${host}`,
        ].join("\n");

        return new Response(txt, { headers: { "Content-Type": "text/plain" } });
      },
    },
  },
});
