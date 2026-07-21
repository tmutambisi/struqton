import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Camera, ArrowRight } from "lucide-react";
import {
  projects,
  statusLabels,
  type Project,
  type ProjectStatus,
  type ProjectSector,
} from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects & Gallery — Struqton Structural" },
      {
        name: "description",
        content:
          "Featured building, civil, industrial, energy and residential projects delivered by Struqton Structural — ongoing projects, completed sites, and 3D designs.",
      },
      { property: "og:title", content: "Projects & Gallery — Struqton Structural" },
      {
        property: "og:description",
        content:
          "Featured ongoing projects, completed sites and 3D designs with real site photo galleries.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

const statusFilters: Array<{ id: "all" | ProjectStatus; label: string }> = [
  { id: "all", label: "All" },
  { id: "completed", label: "Completed" },
  { id: "in-progress", label: "Ongoing Projects" },
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
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-semibold ${tone}`}
    >
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

function ShowcaseCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const photoCount = project.gallery?.length ?? 1;
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group relative block overflow-hidden bg-muted rounded-sm"
      style={{ height: large ? undefined : "100%" }}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          large ? "aspect-[3/2] md:aspect-auto md:h-full" : "h-full"
        }`}
        style={large ? undefined : { minHeight: "240px" }}
      />

      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

      {/* top badges */}
      <div className="absolute left-3 top-3 flex items-center gap-2">
        <StatusPill status={project.status} />
        {photoCount > 1 && (
          <span className="flex items-center gap-1.5 rounded-sm bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <Camera className="h-3.5 w-3.5 text-accent" />
            {photoCount} Photos
          </span>
        )}
      </div>

      <div className="absolute right-3 top-3 rounded-sm bg-black/60 px-2 py-1 font-mono text-[10px] font-semibold text-white backdrop-blur-sm">
        №{String(project.n).padStart(2, "0")}
      </div>

      {/* bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
          {project.sector} · {project.location}
        </p>
        <div className="mt-1 flex items-end justify-between gap-2">
          <h2
            className={`font-bold leading-tight text-white ${
              large ? "text-xl md:text-3xl" : "text-lg"
            }`}
          >
            {project.title}
          </h2>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        {project.cost && (
          <p className="mt-1 text-xs font-bold text-accent">
            Cost: {project.cost}
          </p>
        )}
        <p className="mt-1 text-xs leading-relaxed text-white/80 line-clamp-2">
          {project.summary}
        </p>
        <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:underline">
          Open Project Page & Photos ({photoCount} photos) →
        </div>
      </div>

      {/* hover border glow */}
      <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-accent/80" />
    </Link>
  );
}

function ProjectsIndex() {
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

  const [hero, ...rest] = projects;

  return (
    <>
      {/* ── Hero header ──────────────────────────────────────────────── */}
      <section className="container-page pb-8 pt-24 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-accent border border-border">
          <Camera className="h-3.5 w-3.5" />
          Interactive Site Galleries & Case Studies
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
          Real projects, active sites & project details.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Click any project below to view its dedicated project page — including full site photo galleries, engineering scope, project costs, and client details.
        </p>
      </section>

      {/* ── Filter bar ───────────────────────────────────────────────── */}
      <section className="container-page pb-8">
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
                <span
                  className={`text-xs ${status === f.id ? "text-background/70" : "text-muted-foreground"}`}
                >
                  {counts[f.id]}
                </span>
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground">
              Showing {visible.length} of {projects.length} featured projects
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Sector
            </span>
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

      {/* ── Magazine Grid Showcase ───────────────────────────────────── */}
      {status === "all" && sector === "all" && hero ? (
        <section className="container-page pb-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3">
            {/* Main hero card */}
            <div className="md:col-span-2 md:row-span-2 min-h-[380px] md:min-h-[460px]">
              <ShowcaseCard project={hero} large />
            </div>

            {/* Remaining cards */}
            {rest.map((p) => (
              <div key={p.slug} className="min-h-[240px]">
                <ShowcaseCard project={p} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* Filtered Grid */
        <section className="container-page pb-16">
          {visible.length === 0 ? (
            <div className="rounded-sm border border-border bg-surface p-16 text-center">
              <p className="text-sm text-muted-foreground">
                No projects match this filter yet.
              </p>
            </div>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <li key={p.slug} className="min-h-[260px]">
                  <ShowcaseCard project={p} />
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* ── Interactive Quote Callout Strip ───────────────────────────── */}
      <section className="container-page pb-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-accent/30 bg-surface p-8 sm:flex-row sm:items-center">
          <div>
            <span className="eyebrow text-accent">Planning a building or civil project?</span>
            <h3 className="mt-1 text-2xl font-bold text-ink">
              Get an engineer-reviewed quote for your construction scope
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              From commercial warehouses and industrial facilities to luxury double-storey residential homes — brief our engineering team for an accurate quotation.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-surface py-20">
        <div className="container-page text-center">
          <p className="eyebrow">Start your project</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Ready to stand behind your build?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Share your drawings or project idea with our structural engineering team. We respond within one business day with a formal quote.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-sm bg-ink px-8 text-sm font-semibold text-background transition hover:bg-accent"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+263774751861"
              className="inline-flex h-12 items-center gap-2 rounded-sm border border-border px-8 text-sm font-semibold text-ink transition hover:border-ink"
            >
              +263 774 751 861
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
