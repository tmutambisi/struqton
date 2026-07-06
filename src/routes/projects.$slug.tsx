import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects, statusLabels, type Project, type ProjectStatus } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project: project! };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Struqton" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Struqton Structural` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Struqton Structural` },
        { property: "og:description", content: p.summary },
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
      <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover-underline">
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>
    </div>
  ),
});

function StatusPill({ status }: { status: ProjectStatus }) {
  const tone =
    status === "completed"
      ? "bg-surface text-ink"
      : status === "in-progress"
        ? "bg-accent text-accent-foreground"
        : "bg-ink text-background";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-1 text-xs font-semibold ${tone}`}>
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

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  const facts: { label: string; value: string }[] = [];
  if (project.client) facts.push({ label: "Client", value: project.client });
  if (project.location) facts.push({ label: "Location", value: project.location });
  if (project.timeline) facts.push({ label: "Timeline", value: project.timeline });
  if (project.cost) facts.push({ label: "Project value", value: project.cost });
  if (project.size) facts.push({ label: "Size", value: project.size });
  facts.push({ label: "Sector", value: project.sector });
  facts.push({ label: "Status", value: statusLabels[project.status] });

  return (
    <article>
      <section className="container-page pb-8 pt-16 md:pt-24">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <div className="mt-8 flex items-center gap-3">
          <span className="font-mono text-xs text-accent">№{String(project.n).padStart(2, "0")}</span>
          <StatusPill status={project.status} />
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {project.summary}
        </p>
      </section>

      <section className="container-page">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-[16/9] w-full object-cover"
            width={1400}
            height={1000}
          />
          {project.status === "design" && (
            <span className="absolute bottom-4 left-4 rounded-sm bg-ink px-3 py-1 text-xs font-semibold text-background">
              3D Visualisation
            </span>
          )}
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Involvement</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {project.involvement.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:col-span-8">
            {facts.map((f) => (
              <div key={f.label} className="border-t border-border pt-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</dt>
                <dd className="mt-1 text-lg font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="container-page grid items-center gap-6 md:grid-cols-2">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Considering a similar project?
          </h2>
          <div className="md:text-right">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-sm bg-ink px-6 text-sm font-semibold text-background hover:bg-accent"
            >
              Brief our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex items-center justify-between border-t border-border pt-10">
          <div>
            <p className="eyebrow">Next project</p>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="mt-2 inline-flex items-center gap-3 text-2xl font-semibold text-ink hover:text-accent md:text-3xl"
            >
              {next.title} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
