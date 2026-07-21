import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Building2, HardHat, Compass, Wrench, Sun, Pickaxe } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { projects, statusLabels } from "@/lib/projects";
import { PartnerCarousel } from "@/components/PartnerCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Struqton Structural — Building & Civil Engineering Contractor" },
      {
        name: "description",
        content:
          "Struqton Structural is a Zimbabwean CIFOZ Category B contractor delivering residential, commercial, industrial, mining, agricultural and energy projects from concept to commissioning.",
      },
      { property: "og:title", content: "Struqton Structural — Building & Civil Engineering Contractor" },
      {
        property: "og:description",
        content:
          "Zimbabwean CIFOZ Category B contractor. Residential, commercial, industrial, mining, agricultural and energy projects — concept to commissioning.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Building2, title: "Building Construction", desc: "Residential, commercial, industrial and agricultural buildings as main contractor or subcontractor." },
  { icon: HardHat, title: "Civil & Structural Works", desc: "Reinforced concrete, structural steel, highways, bridges, stormwater, sewer and water reticulation." },
  { icon: Compass, title: "Built-Environment Consulting", desc: "In-house project managers, architects, civil, structural, electrical and mechanical engineers, and QSs." },
  { icon: Wrench, title: "Operations & Maintenance", desc: "Electrical installations, HVAC servicing and long-term maintenance for the infrastructure we build." },
  { icon: Sun, title: "Energy Infrastructure", desc: "Solar PV civil works, mounting structures and foundations — from 100 kW campuses to 750 kWp plants." },
  { icon: Pickaxe, title: "Mining Civil Works", desc: "Shaft support installation, mine access roads, bridges and refurbishment on live production sites." },
];

const clients = [
  "Old Mutual", "UNICEF", "BancABC", "Zimbabwe Power Company", "Crown Agents",
  "Pump Systems Africa", "Africa University", "Slowgrad Engineering", "Zimburs",
  "Value Engineering", "Glytime Foods", "Zimplats", "Dallaglio",
];

const featured = projects.slice(0, 4);

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Construction site at sunset"
            className="h-full w-full object-cover"
            width={1920}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/20" />
        </div>

        <div className="container-page relative flex min-h-[86vh] flex-col justify-end pb-16 pt-32 text-background md:pb-24">
          <p className="eyebrow text-background/80">CIFOZ Category B · Registered March 2018</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            Design, build,<br />deliver.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/85 md:text-lg">
            Struqton Structural (Pvt) Ltd is a Zimbabwean building and civil
            engineering contractor. From conception and feasibility through
            construction and commissioning, we deliver innovatively structured,
            competitively priced projects across Southern Africa.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex h-12 items-center gap-2 rounded-sm bg-background px-6 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Explore featured projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-sm border border-background/40 px-6 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              Start a project
            </Link>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-background/20 pt-8 text-background sm:grid-cols-4">
            {[
              { v: "7+", l: "Featured build sites" },
              { v: "USD 3.2M", l: "Largest active build" },
              { v: "6", l: "Sectors served" },
              { v: "2018", l: "Formally registered" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-bold md:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-background/70">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Our philosophy</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">
              To design, build and deliver innovatively structured and competitively priced projects.
            </h2>
          </div>
          <div className="space-y-8 md:col-span-6 md:col-start-7">
            <div>
              <p className="eyebrow">Our vision</p>
              <p className="mt-2 text-lg text-ink-soft">
                To become a preferred world-class construction company.
              </p>
            </div>
            <div>
              <p className="eyebrow">Core values</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {["Professionalism", "Efficiency", "Timeliness", "Transparency", "Integrity"].map((v) => (
                  <li key={v} className="rounded-sm border border-border bg-surface px-3 py-1.5 font-medium text-ink">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                From foundation to final commissioning.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                In-house divisions carry projects through concept, design,
                feasibility, costing, construction, commissioning and
                maintenance — under one accountability line.
              </p>
              <Link
                to="/services"
                className="hover-underline mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="grid gap-px bg-border md:col-span-8 md:grid-cols-2">
              {services.map((s) => (
                <li key={s.title} className="bg-background p-8 transition-colors hover:bg-surface">
                  <s.icon className="h-6 w-6 text-accent" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Featured projects</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Selected work across commercial, industrial, mining and energy.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hover-underline inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              View all 27 projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    width={1400}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 rounded-sm bg-background/90 px-2.5 py-1 text-xs font-semibold text-ink">
                    {statusLabels[p.status]}
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold uppercase tracking-wide text-ink">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.sector} · {p.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-t border-border bg-surface py-20">
        <div className="container-page">
          <p className="eyebrow text-center">Trusted by</p>
          <PartnerCarousel />
          {/* Client list moved to PartnerCarousel component */}
        </div>
      </section>

      {/* APPROACH */}
      <section style={{ backgroundColor: "#0d2744" }} className="py-24 md:py-32">
        <div className="container-page">
          {/* Header row */}
          <div className="mb-16 flex flex-col gap-3 border-b border-white/20 pb-10 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Our Project Management<br />Approach
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-white/55 md:text-right">
              How we plan, execute and deliver every project — on time and on budget.
            </p>
          </div>

          {/* Numbered items */}
          <ul className="divide-y divide-white/15">
            {[
              "Utilise industry best practices for project execution.",
              "Emphasise collaboration among multidisciplinary teams.",
              "Implement robust risk management strategies.",
              "Maintain open communication with stakeholders.",
              "Leverage technology for efficient project tracking.",
            ].map((line, i) => (
              <li
                key={line}
                className="grid grid-cols-[72px_1fr] items-start gap-6 py-8 md:grid-cols-[100px_1fr] md:gap-10"
              >
                {/* Big bold number */}
                <span
                  className="font-black leading-none text-white"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-2 text-lg font-medium leading-snug text-white/90 md:text-2xl md:leading-snug">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24 md:py-32">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-ink md:col-span-8 md:text-6xl">
            Have a project in mind?<br />
            <span className="text-muted-foreground">Let's build it properly.</span>
          </h2>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-sm bg-ink px-6 text-sm font-semibold text-background hover:bg-accent"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
