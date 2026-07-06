import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Struqton Structural" },
      {
        name: "description",
        content:
          "Struqton Structural (Pvt) Ltd is a Zimbabwean CIFOZ Category B contractor, registered March 2018, delivering projects from conception through commissioning to maintenance.",
      },
      { property: "og:title", content: "About Struqton Structural" },
      {
        property: "og:description",
        content:
          "Zimbabwean CIFOZ Category B building & civil engineering contractor, registered 2018.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { n: "01", t: "Professionalism", d: "Every engagement is led by qualified engineers, quantity surveyors and site managers accountable to the client." },
  { n: "02", t: "Efficiency", d: "In-house divisions cover the full lifecycle, keeping cost, programme and quality decisions in one team." },
  { n: "03", t: "Timeliness", d: "Programmes are set with realistic durations and tracked with weekly look-aheads and monthly cost reports." },
  { n: "04", t: "Transparency", d: "Progress, risk and cost are shared openly with clients and stakeholders throughout the works." },
  { n: "05", t: "Integrity", d: "We do what we say. Client references from 2018 onwards say the same thing about us." },
];

const team = [
  { name: "Patrick T. Gune", role: "Managing Director · Principal Civil Engineer" },
  { name: "Paidamoyo B. Ngomeni", role: "Administrative Director" },
  { name: "Ruvarashe Ndebele", role: "Chief Quantity Surveyor · Commercial Manager" },
  { name: "Joseph Mugovi", role: "Consultant Civil Engineer" },
  { name: "Trymore Marisa", role: "Consultant Mechanical Engineer" },
  { name: "Nyaradzo Shoko", role: "Projects Civil Engineer" },
  { name: "Shepherd Mangoya", role: "Projects Quantity Surveyor" },
  { name: "Desire Mundoma", role: "Civil Engineering Technician" },
  { name: "Lloyd Maunganidze", role: "Electrical Engineering Technician" },
  { name: "Ronald Nyoni", role: "Land Surveyor" },
  { name: "Tsungirayi E. Chiku", role: "SHE Officer" },
  { name: "Benjiwanza Ndaabare", role: "Plumbing & Drain Layer" },
  { name: "Nixon Mupondi", role: "General Foreman" },
  { name: "Magret Muchenjekwa", role: "Accountant" },
  { name: "Tanaka Chikaka", role: "Graduate Accountant" },
];

const expertise = [
  "Design, construction and maintenance of sewer, water reticulation, storage and treatment works.",
  "Analysis and design of reinforced concrete, structural steel, highways, bridges, stormwater, sewerage and water reticulation.",
  "Construction of single- and multi-storey commercial, industrial and residential buildings.",
  "Assessment and upgrading of water and wastewater infrastructure.",
  "Development of water quality monitoring and management plans.",
  "Construction of highways, bridges and associated civil works.",
  "Structural steel fabrication and erection.",
  "Electrical installations and maintenance; HVAC systems maintenance.",
  "Project costing and management.",
];

const certifications = [
  { code: "CIFOZ", label: "Category B General Contractors" },
  { code: "PRAZ", label: "Registered supplier · 2026" },
  { code: "ZIMRA", label: "VAT registered · Tax cleared" },
  { code: "NSSA", label: "Compliance Certificate 94184/2025" },
];

function About() {
  return (
    <>
      <section className="container-page pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="eyebrow">About</p>
          </div>
          <div className="md:col-span-10">
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
              A Zimbabwean contractor building for the region.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Struqton Structural (Pvt) Ltd is a Zimbabwean-registered building
              and civil engineering contractor, classified under CIFOZ Category B
              General Contractors. Since our formal registration in March 2018,
              we have delivered residential, commercial, industrial, mining,
              agricultural and energy infrastructure projects through a
              multi-disciplinary team of professionals with vast combined
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page">
        <div className="grid gap-8 md:grid-cols-2">
          <img
            src={aboutImg}
            alt="Engineers reviewing structural drawings"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
            width={1600}
            height={1100}
          />
          <img
            src={teamImg}
            alt="Design team reviewing plans"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
            width={1600}
            height={1100}
          />
        </div>
      </section>

      {/* Philosophy / Vision */}
      <section className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our philosophy</p>
            <p className="mt-4 text-2xl font-medium leading-snug text-ink md:text-3xl">
              To design, build and deliver innovatively structured and
              competitively priced projects.
            </p>
          </div>
          <div>
            <p className="eyebrow">Our vision</p>
            <p className="mt-4 text-2xl font-medium leading-snug text-ink md:text-3xl">
              To become a preferred world-class construction company.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Core values</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Five commitments we won't compromise on.
              </h2>
            </div>
            <ul className="grid gap-px bg-border md:col-span-8 md:grid-cols-2">
              {values.map((v) => (
                <li key={v.n} className="bg-background p-8">
                  <span className="font-mono text-xs text-accent">{v.n}</span>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-page py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Management & technical staff</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              The people behind every drawing.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            An in-house team of civil, mechanical and electrical engineers,
            quantity surveyors, technicians, land surveyors and site foremen.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <li key={t.name} className="border-t border-ink pt-4">
              <p className="text-base font-semibold text-ink">{t.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Expertise */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Management expertise</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Where our team's combined experience runs deep.
            </h2>
          </div>
          <ul className="space-y-4 md:col-span-8">
            {expertise.map((e) => (
              <li key={e} className="flex gap-4 border-t border-border pt-4 text-ink-soft">
                <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="text-base leading-relaxed">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="container-page py-24">
        <p className="eyebrow">Registrations & certifications</p>
        <ul className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <li key={c.code} className="bg-background p-8">
              <p className="text-2xl font-bold text-ink">{c.code}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-24">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Work with us.
          </h2>
          <div className="md:text-right">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-sm bg-ink px-6 text-sm font-semibold text-background hover:bg-accent"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
