import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Camera,
  MapPin,
  DollarSign,
  Ruler,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  Hammer,
} from "lucide-react";
import {
  getProject,
  projects,
  statusLabels,
  type Project,
  type ProjectStatus,
} from "@/lib/projects";
import { useState, useEffect, useCallback } from "react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project: project! };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Struqton" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Struqton Structural` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Struqton Structural` },
        { property: "og:description", content: p.summary },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-bold text-ink">Project not found</h1>
      <Link
        to="/projects"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover-underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>
    </div>
  ),
});

function StatusPill({ status }: { status: ProjectStatus }) {
  const tone =
    status === "completed"
      ? "bg-accent/15 text-accent border border-accent/30"
      : status === "in-progress"
        ? "bg-accent/15 text-accent border border-accent/35"
        : "bg-ink/5 text-ink border border-ink/10";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider ${tone}`}
    >
      {status === "in-progress" && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {statusLabels[status]}
    </span>
  );
}

/* ─── Full-screen Lightbox ──────────────────────────────────────────────── */
function Lightbox({
  images,
  startIndex,
  title,
  onClose,
}: {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/98"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo gallery`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div>
          <p className="text-xs font-semibold text-white">{title}</p>
          <p className="font-mono text-[10px] text-white/40">
            {current + 1} of {images.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Close gallery"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Main image area */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 border border-white/10 text-white transition hover:bg-white/20 hover:scale-105"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <img
          key={current}
          src={images[current]}
          alt={`${title} — photo ${current + 1}`}
          className="max-h-full max-w-full select-none object-contain rounded-sm"
          style={{ animation: "lbFadeIn 180ms ease" }}
          draggable={false}
        />

        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 border border-white/10 text-white transition hover:bg-white/20 hover:scale-105"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-1.5 overflow-x-auto px-4 py-4 bg-black/60 border-t border-white/5 justify-center scrollbar-none">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-sm transition-all ${
              i === current
                ? "ring-2 ring-accent opacity-100 scale-105"
                : "opacity-40 hover:opacity-75"
            }`}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              draggable={false}
            />
          </button>
        ))}
      </div>

      <style>{`@keyframes lbFadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
}

/* ─── Main page ─────────────────────────────────────────────────────────── */
function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  // The client requested the Work Experience slide structure:
  // Left column: Info block details (Client, Project Cost, Status, Estimated Size, Involvement).
  // Right column: Multiple visual photo layers explaining the project as work is happening.
  return (
    <article className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-md sticky top-0 z-30 py-4">
        <div className="container-page flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">
              Project №{String(project.n).padStart(2, "0")} of {projects.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Core Detail Showcase Section (Inspired by slide presentation) */}
      <section className="container-page py-8 md:py-16">
        <div className="bg-white rounded-sm border border-border overflow-hidden shadow-sm">
          {/* Header block within container */}
          <div className="border-b border-border bg-surface px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-accent text-accent-foreground font-bold px-3 py-1 text-sm rounded-sm">
                PROJECT CASE STUDY
              </span>
              <StatusPill status={project.status} />
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              Sector: {project.sector} · Location: {project.location}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT COLUMN: Project Details (Aesthetics matching the user's slide) */}
            <div className="p-6 md:p-8 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between bg-surface/20">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                    {project.title}
                  </h1>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Client
                    </span>
                    <p className="text-lg font-bold text-ink mt-0.5">
                      {project.client}
                    </p>
                  </div>

                  {project.cost && (
                    <div>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                        Project Cost
                      </span>
                      <p className="text-lg font-bold text-accent mt-0.5">
                        {project.cost}
                      </p>
                    </div>
                  )}

                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Status
                    </span>
                    <p className="text-base font-bold text-ink mt-0.5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      {statusLabels[project.status]}
                    </p>
                  </div>

                  {project.size && (
                    <div>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                        Estimated Size
                      </span>
                      <p className="text-sm font-semibold text-ink mt-0.5">
                        {project.size}
                      </p>
                    </div>
                  )}

                  {project.timeline && (
                    <div>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                        Timeline
                      </span>
                      <p className="text-sm font-semibold text-ink mt-0.5">
                        {project.timeline}
                      </p>
                    </div>
                  )}

                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Involvement
                    </span>
                    <ul className="mt-2 space-y-1">
                      {project.involvement.map((inv) => (
                        <li key={inv} className="flex items-center gap-2 text-xs font-semibold text-ink-soft">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                          {inv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Quote Button directly below slide block */}
              <div className="mt-8 border-t border-border pt-6">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-accent text-accent-foreground px-6 py-3.5 text-sm font-bold shadow hover:opacity-90 transition-opacity"
                >
                  Request a Quote For Similar Scope <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Work Progress Pictures */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Hammer className="h-4 w-4 text-accent" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-ink-soft">
                      Work Happening on Site
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                  >
                    <ZoomIn className="h-3.5 w-3.5" /> Fullscreen Gallery
                  </button>
                </div>

                {/* Big Interactive Active Picture View */}
                <div className="relative aspect-[16/10] bg-muted overflow-hidden border border-border group rounded-sm shadow-inner">
                  <img
                    src={gallery[activeImageIdx]}
                    alt={`${project.title} site photo`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />
                  
                  {/* Photo Description overlay */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm text-[10px] font-semibold text-white">
                    Showing site photo {activeImageIdx + 1} of {gallery.length}
                  </div>

                  {/* Zoom click trigger overlay */}
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/25 transition-opacity"
                    aria-label="Zoom photo"
                  >
                    <div className="bg-white/90 text-ink px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-md">
                      <ZoomIn className="h-4 w-4" /> View Full Resolution
                    </div>
                  </button>
                </div>

                {/* Progress Thumbnail Selector below big image */}
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                    Select a progress stage to view:
                  </p>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {gallery.map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveImageIdx(i)}
                        className={`relative aspect-[4/3] overflow-hidden rounded-sm border transition-all ${
                          i === activeImageIdx
                            ? "border-accent ring-2 ring-accent/35 scale-105"
                            : "border-border opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={src}
                          alt={`Progress stage ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick site status info block */}
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  Harare & surrounding region
                </span>
                <span>
                  Photography updated July 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA Form / Call to action Section (Converts user to do more) */}
      <section className="bg-ink text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img src={project.image} alt="" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="container-page relative max-w-4xl text-center space-y-6">
          <span className="eyebrow text-accent">Struqton Engineering Contract Quote</span>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-white">
            Brief Us on Your Project Requirements
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Need structural engineering, machinery line integration, or a turnkey contractor in Zimbabwe? Enter your project parameters in our contact portal for a complete structural cost assessment.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-sm bg-accent text-accent-foreground px-8 text-sm font-bold shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Project Pricing Proposal <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:info@struqton.com"
              className="inline-flex h-12 items-center gap-2 rounded-sm border border-white/20 px-8 text-sm font-semibold text-white hover:border-white/50 transition-colors"
            >
              <Mail className="h-4 w-4" /> Email Scope Drawings
            </a>
          </div>
        </div>
      </section>

      {/* Prev / Next Project Link Footer */}
      <section className="container-page py-12 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-semibold">
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="inline-flex items-center gap-2 text-ink-soft hover:text-accent transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Previous: {prev.title}
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="inline-flex items-center gap-2 text-ink-soft hover:text-accent transition-colors"
          >
            Next: {next.title} <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          images={gallery}
          startIndex={activeImageIdx}
          title={project.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </article>
  );
}
