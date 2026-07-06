import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, HardHat, Compass, Wrench, Sun, Pickaxe, Layers, Wheat, Truck } from "lucide-react";
import servicesImg from "@/assets/services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Struqton Structural" },
      {
        name: "description",
        content:
          "Building construction, civil and structural works, built-environment consulting, energy infrastructure, mining civil works and O&M — Struqton's full service list.",
      },
      { property: "og:title", content: "Services — Struqton Structural" },
      {
        property: "og:description",
        content:
          "Building, civil, consulting, energy, mining and O&M services from a single Zimbabwean contractor.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Building2,
    title: "Building Construction",
    desc: "Residential, industrial, agricultural and commercial construction as main contractor or subcontractor.",
    points: [
      "Civil and structural engineering works",
      "Concrete works and bricklaying",
      "Carpentry and joinery",
      "Electrical installation",
      "Operations and maintenance services",
    ],
  },
  {
    icon: Compass,
    title: "Built-Environment Consulting",
    desc: "A network of project & construction managers, architects, engineers and quantity surveyors offering cost-effective solutions to owners, contractors, engineers and architects.",
    points: [
      "Project & construction management",
      "Architectural design",
      "Civil & structural engineering",
      "Electrical & mechanical engineering",
      "Quantity surveying",
    ],
  },
  {
    icon: HardHat,
    title: "Civil & Structural Works",
    desc: "Reinforced concrete, structural steel, highways, bridges, stormwater and water infrastructure — engineered and built in-house.",
    points: [
      "Reinforced concrete and post-tensioning",
      "Structural steel fabrication and erection",
      "Highways, bridges and box culverts",
      "Stormwater and sewer reticulation",
    ],
  },
  {
    icon: Layers,
    title: "Water & Wastewater",
    desc: "Design, construction and rehabilitation of sewer and water reticulation infrastructure, storage and treatment works.",
    points: [
      "Water reticulation pipelines (up to 3.3 km delivered)",
      "Storage tanks and reservoirs (delivered 13 for GMB)",
      "Sanitation rehabilitation programmes",
      "Water quality monitoring and management plans",
    ],
  },
  {
    icon: Sun,
    title: "Energy Infrastructure",
    desc: "Civil works, foundations and tracker structures for utility-scale and campus solar plants across Zimbabwe.",
    points: [
      "PV foundation design and installation",
      "Tracker and mounting structures",
      "Battery-storage foundations",
      "Solar borehole civil works",
    ],
  },
  {
    icon: Pickaxe,
    title: "Mining Civil Works",
    desc: "Shaft support installation, mine access roads, bridges and refurbishment for live production sites.",
    points: [
      "Structural assessment and design",
      "Inclined shaft support installation",
      "Mine access roads and bridges",
      "Coal shed and warehouse refurbishment",
    ],
  },
  {
    icon: Wheat,
    title: "Agricultural Infrastructure",
    desc: "Irrigation refurbishment, tanks and agricultural facility works delivered for public and NGO clients.",
    points: [
      "Irrigation scheme rehabilitation",
      "50 kL galvanised tank installations",
      "Crop institute refurbishment",
    ],
  },
  {
    icon: Wrench,
    title: "Operations & Maintenance",
    desc: "Electrical, HVAC and general maintenance services for the infrastructure we build — and infrastructure we didn't.",
    points: [
      "Electrical installations and maintenance",
      "HVAC systems servicing",
      "Facility upgrades",
    ],
  },
  {
    icon: Truck,
    title: "Owned Plant & Equipment",
    desc: "Self-performing capacity with excavators, cranes, compactors, rollers, water and diaphragm pumps — see our equipment schedule for the full list.",
    points: [
      "Excavators, front-end loaders, tipper trucks",
      "Overhead crane and mobile crane",
      "Rollers and jumping-jack compactors",
      "Water pumps and diaphragm pumps",
    ],
  },
];

function Services() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={servicesImg}
            alt="Structural steel framework interior"
            className="h-full w-full object-cover opacity-40"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="container-page relative py-24 md:py-32">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
            Concept to commissioning, under one roof.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Our divisions carry projects from conception, design and feasibility
            through costing, implementation, commissioning and long-term
            maintenance.
          </p>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <ul className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title} className="group bg-background p-8 transition-colors hover:bg-surface md:p-10">
              <s.icon className="h-8 w-8 text-accent" aria-hidden />
              <h2 className="mt-6 text-xl font-semibold text-ink">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-ink py-24 text-background md:py-32">
        <div className="container-page grid items-center gap-8 md:grid-cols-2">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Not sure where your project starts?
          </h2>
          <div className="text-sm leading-relaxed text-background/80 md:text-base">
            <p>
              Tell us the site, the timeline and the ambition. We will come back
              with a proposed engagement and a realistic first milestone -
              usually within 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-sm bg-background px-6 text-sm font-semibold text-ink hover:bg-accent hover:text-background"
            >
              Brief us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
