import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, statusLabels, type Project, type ProjectStatus, type ProjectSector } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Struqton Structural" },
      {
        name: "description",
        content:
          "Twenty-seven building, civil, mining, energy and residential projects delivered by Struqton Structural across Zimbabwe and the region — completed, in progress, and in 3D design.",
      },
      { property: "og:title", content: "Projects — Struqton Structural" },
      {
        property: "og:description",
        content:
          "Completed, in-progress and 3D design projects across Zimbabwe and the region.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const statusFilters: Array<{ id: "all" | ProjectStatus; label: string }> = [
  { id: "all", label: "All" },
  { id: "completed", label: "Completed" },
  { id: "in-progress", label: "In Progress" },
  { id: "design", label: "3D & Design" },
];

const sectorFilters: Array<{ id: "all" | ProjectSector; label: string }> = [
  { id: "all", label: "All sectors" },
  { id: "Commercial", label: "Commercial" },
  { id: "Industrial", label: "Industrial" },
  { id: "Residential", label: "Residential" },
  { id: "Infrastructure", label: "Infrastructure" },
  { id: "Mining", label: "Mining" },
  { id: "Energy", label: "Energy" },
  { id: "Agricultural", label: "Agricultural" },
];

function StatusPill({ status }: { status: ProjectStatus }) {
  const tone =
    status === "completed"
      ? "bg-background/90 text-ink"
      : status === "in-progress"
        ? "bg-accent text-accent-foreground"
        : "bg-ink text-background";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-semibold ${tone}`}>
      {status === "in-progress" && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {statusLabels[status]}
    </span>
  );
}

function Projects() {
  const [status, setStatus] = useState<"all" | ProjectStatus>("all");
  const [sector, setSector] = useState<"all" | ProjectSector>("all");

  const visible = useMemo<Project[]>(
    () =>
      projects.filter(
        (p) =>
          (status === "all" || p.status === status) &&
          (sector === "all" || p.sector === sector),
      ),
    [status, sector],
  );

  const counts = useMemo(() => {
    return {
      all: projects.length,
      completed: projects.filter((p) => p.status === "completed").length,
      "in-progress": projects.filter((p) => p.status === "in-progress").length,
      design: projects.filter((p) => p.status === "design").length,
    } as Record<"all" | ProjectStatus, number>;
  }, []);

  return (
    <>
      <section className="container-page pb-12 pt-24 md:pt-32">
        <p className="eyebrow">Portfolio · 27 projects</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
          Buildings, sites and structures we've stood behind.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Every entry here was engineered, built or supervised by Struqton
          Structural. Filter by delivery status to see completed projects, live
          sites, or work still on the drawing board in 3D.
        </p>
      </section>

      <section className="container-page">
        <div className="border-y border-border py-4">
          <div className="flex flex-wrap items-center gap-2">
            {statusFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setStatus(f.id)}
                aria-pressed={status === f.id}
                className={`inline-flex h-9 items-center gap-2 rounded-sm px-4 text-sm font-medium transition-colors ${
                  status === f.id
                    ? "bg-ink text-background"
                    : "text-ink-soft hover:bg-muted hover:text-ink"
                }`}
              >
                {f.label}
                <span className={`text-xs ${status === f.id ? "text-background/70" : "text-muted-foreground"}`}>
                  {counts[f.id]}
                </span>
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground">
              Showing {visible.length} of {projects.length}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Sector</span>
            {sectorFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSector(f.id)}
                aria-pressed={sector === f.id}
                className={`inline-flex h-7 items-center rounded-sm border px-3 text-xs font-medium transition-colors ${
                  sector === f.id
                    ? "border-ink bg-ink text-background"
                    : "border-border text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        {visible.length === 0 ? (
          <div className="rounded-sm border border-border bg-surface p-16 text-center">
            <p className="text-sm text-muted-foreground">
              No projects match this combination yet. Try a different sector or status.
            </p>
          </div>
        ) : (
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <li key={p.slug}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1400}
                      height={1000}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <StatusPill status={p.status} />
                    </div>
                    <div className="absolute right-4 top-4 rounded-sm bg-background/90 px-2 py-1 font-mono text-[10px] font-semibold text-ink">
                      №{String(p.n).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {p.sector} · {p.location}
                    </p>
                    <div className="mt-1 flex items-start justify-between gap-3">
                      <h2 className="text-lg font-semibold uppercase tracking-wide text-ink">
                        {p.title}
                      </h2>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
