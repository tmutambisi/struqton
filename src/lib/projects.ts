import commercialImg from "@/assets/project-1.jpg";
import industrialImg from "@/assets/project-2.jpg";
import residentialImg from "@/assets/project-3.jpg";
import solarImg from "@/assets/project-solar.jpg";
import renderImg from "@/assets/project-render.jpg";
import renderImg2 from "@/assets/project-render-2.jpg";
import civilImg from "@/assets/project-civil.jpg";
import miningImg from "@/assets/project-mining.jpg";

export type ProjectStatus = "completed" | "in-progress" | "design";
export type ProjectSector =
  | "Commercial"
  | "Industrial"
  | "Residential"
  | "Infrastructure"
  | "Mining"
  | "Energy"
  | "Agricultural";

export type Project = {
  slug: string;
  n: number;
  title: string;
  client: string;
  location: string;
  status: ProjectStatus;
  sector: ProjectSector;
  image: string;
  summary: string;
  involvement: string[];
  timeline?: string;
  cost?: string;
  size?: string;
};

export const statusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  design: "3D & Design",
};

export const projects: Project[] = [
  {
    slug: "glytime-foods-factory",
    n: 1,
    title: "Glytime Foods Factory",
    client: "Glytime Foods (Pvt) Ltd",
    location: "Sunway City, Harare",
    status: "in-progress",
    sector: "Industrial",
    image: industrialImg,
    summary:
      "3,313 m² warehouse, 7,000 m² of paved outdoor yard and a full processing machinery line for a health-food manufacturer.",
    involvement: ["Construction", "Structural engineering", "Machinery line integration"],
    cost: "USD 3.2 million",
    size: "3,313 m² warehouse · 7,000 m² yard",
  },
  {
    slug: "aquabridge-warehouse",
    n: 2,
    title: "Aquabridge Warehouse",
    client: "H.T. Chitate",
    location: "Retreat Park, Harare",
    status: "completed",
    sector: "Industrial",
    image: industrialImg,
    summary:
      "A 1,440 m² warehouse building with balcony offices and 2,400 m² of paved external works opposite Arlington.",
    involvement: ["Construction", "Structural engineering"],
    cost: "USD 550,000",
    size: "1,440 m² building · 2,400 m² paved area",
  },
  {
    slug: "global-platinum-refurbishment",
    n: 3,
    title: "Warehouse & Office Refurbishment",
    client: "Global Platinum Resources",
    location: "Selous, Zimbabwe",
    status: "completed",
    sector: "Mining",
    image: industrialImg,
    summary:
      "Refurbishment of warehouse and coal shed structures alongside reconstruction of the site offices.",
    involvement: ["Refurbishment", "Engineering"],
    cost: "USD 104,000",
  },
  {
    slug: "maple-ridge-classroom-block",
    n: 4,
    title: "Double-Storey Classroom Block",
    client: "Maple Ridge Academy",
    location: "Mvurwi, Zimbabwe",
    status: "in-progress",
    sector: "Commercial",
    image: commercialImg,
    summary:
      "A double-storey classroom block totalling 1,556 m² across ground and first floors, currently in structural phase.",
    involvement: ["Construction", "Structural engineering"],
    size: "778 m² ground + 778 m² first floor",
  },
  {
    slug: "mathendele-water-pipeline",
    n: 5,
    title: "Mathendele Water Pipeline",
    client: "Plumtree Town Council",
    location: "Mathendele Suburb, Plumtree",
    status: "completed",
    sector: "Infrastructure",
    image: civilImg,
    summary:
      "Construction of a 3.3 km water reticulation pipeline serving the Mathendele suburb.",
    involvement: ["Design optimisation", "Excavations", "Pipe laying", "Pipeline testing"],
    timeline: "Feb 2022 – Mar 2022",
    size: "3.3 km pipeline",
  },
  {
    slug: "bancabc-housing-drainage",
    n: 6,
    title: "BancABC Housing Development",
    client: "BancABC",
    location: "Harare",
    status: "completed",
    sector: "Residential",
    image: residentialImg,
    summary:
      "Drainage excavation, drain lining and culvert construction package for a residential development.",
    involvement: ["Drain excavation", "Drain lining", "Culverts construction"],
    timeline: "Jul 2021 – Dec 2022",
  },
  {
    slug: "value-engineering-overhead-crane",
    n: 7,
    title: "Overhead Crane Rail & Warehouse Extension",
    client: "Value Engineering",
    location: "Harare",
    status: "completed",
    sector: "Industrial",
    image: industrialImg,
    summary:
      "Ground beam, crane rail and warehouse extension works to receive a heavy overhead crane installation.",
    involvement: ["Construction", "Structural engineering"],
    timeline: "Apr 2024 – May 2024",
  },
  {
    slug: "zimplats-portal-4-shaft",
    n: 8,
    title: "Portal 4 Inclined Shaft",
    client: "Zimplats (Implats Group)",
    location: "Zimbabwe",
    status: "completed",
    sector: "Mining",
    image: miningImg,
    summary:
      "Structural engineer's assessment, design, installation modelling and construction supervision for an inclined shaft.",
    involvement: [
      "Engineer's assessment",
      "Design and modelling",
      "Installation supervision",
    ],
    size: "4 km × 6.5 m shaft works",
  },
  {
    slug: "fossil-road-drainage",
    n: 9,
    title: "Harare–Chirundu Road Drainage & Culverts",
    client: "Fossil Contracting",
    location: "Harare",
    status: "completed",
    sector: "Infrastructure",
    image: civilImg,
    summary:
      "Subcontracted drainage, kerbstone and box culvert works on the Harare–Chirundu (CBS–Westgate) road and Mbudzi interchange.",
    involvement: ["Drainage construction", "Kerbstone installation", "Box culverts"],
    timeline: "Mar – Nov 2023",
  },
  {
    slug: "globetrotter-farm-road",
    n: 10,
    title: "Globetrotter Farm Road & Stormwater",
    client: "Frogmerge Construction",
    location: "Goodhope, Harare",
    status: "completed",
    sector: "Infrastructure",
    image: civilImg,
    summary:
      "Road and stormwater drainage works across the Goodhope and Spitzkop developments.",
    involvement: ["Road construction", "Stormwater drainage"],
    timeline: "Mar – Aug 2024",
  },
  {
    slug: "the-chase-cluster-development",
    n: 11,
    title: "The Chase Cluster Development",
    client: "Firmcare Construction",
    location: "136 The Chase, Mt Pleasant, Harare",
    status: "completed",
    sector: "Residential",
    image: residentialImg,
    summary:
      "Subcontracted pavement construction and stormwater drainage for a cluster house development.",
    involvement: ["Pavement construction", "Stormwater drainage"],
    timeline: "May – Aug 2022",
  },
  {
    slug: "pickstone-road-and-bridge",
    n: 12,
    title: "Pickstone Mine Road & Bridge",
    client: "Dallaglio Investments (Pickstone Mine)",
    location: "Zimbabwe",
    status: "completed",
    sector: "Mining",
    image: civilImg,
    summary:
      "Consultancy and site supervision for the construction of a 2.65 km mine access road and bridge.",
    involvement: ["Consultancy", "Site supervision"],
    size: "2.65 km",
  },
  {
    slug: "bindura-roadside-works",
    n: 13,
    title: "Roadside Drainage, Fencing & Paving",
    client: "Bindura Town Council",
    location: "Bindura, Zimbabwe",
    status: "completed",
    sector: "Infrastructure",
    image: civilImg,
    summary:
      "Road-side drainage, palisade fencing and placement of pavers and kerbs across a 5 ha public precinct.",
    involvement: ["Construction", "Supervision"],
    cost: "USD 104,000",
    size: "5 ha",
  },
  {
    slug: "chipinge-solar-boreholes",
    n: 14,
    title: "Chipinge Council Solar Boreholes",
    client: "Chipinge Town Council",
    location: "Chipinge, Zimbabwe",
    status: "completed",
    sector: "Energy",
    image: solarImg,
    summary:
      "Solar-powered borehole mounting structures and associated civil works for a municipal water supply project.",
    involvement: ["Construction", "Engineering"],
  },
  {
    slug: "africa-university-solar",
    n: 15,
    title: "Africa University Solar Project",
    client: "Africa University",
    location: "Mutare, Zimbabwe",
    status: "completed",
    sector: "Energy",
    image: solarImg,
    summary:
      "Civil works subcontract and structural foundation designs for a 100 kW university solar installation.",
    involvement: ["Civil works subcontract", "Foundation structural design"],
    timeline: "2019 – 2020",
    size: "100 kW",
  },
  {
    slug: "old-mutual-solar",
    n: 16,
    title: "Old Mutual Solar & Storage Plant",
    client: "Old Mutual",
    location: "Zimbabwe",
    status: "completed",
    sector: "Energy",
    image: solarImg,
    summary:
      "Civil works and tracker-structure installation subcontract for a 750 kWp solar plant with 1.4 MV storage.",
    involvement: ["Civil works", "Tracker structure installation"],
    timeline: "Oct 2020 – Feb 2021",
    cost: "USD 2.5 million",
    size: "750 kWp · 1.4 MV storage",
  },
  {
    slug: "slowgrad-head-office",
    n: 17,
    title: "Slowgrad Engineering Head Office",
    client: "Slowgrad Engineering (Pvt) Ltd",
    location: "Sandton Industrial Park, Zvimba",
    status: "completed",
    sector: "Commercial",
    image: commercialImg,
    summary:
      "A 3,500 m² office and industrial headquarters with 1,500 m² of paved external works, delivered end-to-end.",
    involvement: ["Construction", "Structural engineering"],
    cost: "USD 2.5 million",
    size: "3,500 m² building · 1,500 m² paved",
  },
  {
    slug: "sena-residential-acturus",
    n: 18,
    title: "Residential House — Acturus",
    client: "T. Sena Family Trust",
    location: "Cromlet, Acturus",
    status: "in-progress",
    sector: "Residential",
    image: residentialImg,
    summary:
      "Construction of a 500 m² floor-area family home, currently in foundation and superstructure works.",
    involvement: ["Construction", "Structural engineering"],
    size: "500 m² floor area",
  },
  {
    slug: "vhiriri-double-residential",
    n: 19,
    title: "Double Residential House — Horgety Hill",
    client: "Mr and Mrs Vhiriri",
    location: "Horgety Hill, Harare",
    status: "in-progress",
    sector: "Residential",
    image: renderImg,
    summary:
      "Construction of a 961 m² double-storey family residence, designed and engineered in-house.",
    involvement: ["Architectural design", "Structural engineering", "Construction"],
    size: "961 m²",
  },
  {
    slug: "marisa-double-residential",
    n: 20,
    title: "Double Residential House — Marisa",
    client: "Mr Marisa",
    location: "Harare",
    status: "design",
    sector: "Residential",
    image: renderImg,
    summary:
      "A 1,296 m² double-storey residence at architectural and structural design stage, with photoreal 3D visualisation.",
    involvement: ["Architectural design", "Structural engineering", "Construction"],
    size: "1,296 m²",
  },
  {
    slug: "mukucha-knowe-norton",
    n: 21,
    title: "Double-Storey Residential — Knowe",
    client: "Mrs Mukucha",
    location: "Knowe, Norton",
    status: "design",
    sector: "Residential",
    image: renderImg2,
    summary:
      "An 850 m² double-storey home with paved driveway and carports, developed from 3D concept through structural design.",
    involvement: ["Structural design", "Architectural design", "Construction"],
    size: "850 m²",
  },
  {
    slug: "zpc-kariba-duplexes",
    n: 22,
    title: "8-Family Duplexes, Kariba Heights",
    client: "Zimbabwe Power Company",
    location: "5 Cactus, Kariba Heights",
    status: "completed",
    sector: "Residential",
    image: residentialImg,
    summary:
      "Engineering consultancy for eight family duplex flats on a constrained hillside site.",
    involvement: ["Engineering consultancy"],
    timeline: "Oct 2014 – Dec 2016",
    cost: "USD 667,000",
    size: "750 kW",
  },
  {
    slug: "adventist-university-mozambique",
    n: 23,
    title: "Adventist University Consultancy",
    client: "Adventist University of Mozambique",
    location: "Mozambique",
    status: "completed",
    sector: "Commercial",
    image: commercialImg,
    summary:
      "Civil and structural engineering consultancy and site supervision across a multi-year campus programme.",
    involvement: ["Consultancy", "Supervision"],
    timeline: "Mar 2019 – 2022",
    cost: "USD 300,000",
  },
  {
    slug: "undp-wanezi-tanks",
    n: 24,
    title: "Wanezi & Gororo Irrigation Tanks",
    client: "United Nations Development Programme (UNDP)",
    location: "Wanezi & Gororo, Zimbabwe",
    status: "completed",
    sector: "Agricultural",
    image: civilImg,
    summary:
      "Structural assessment, design and installation of 50 kL galvanised iron tanks for the Wanezi and Gororo irrigation schemes.",
    involvement: ["Structural assessment", "Design", "Installation"],
  },
  {
    slug: "crown-agents-wash-rehab",
    n: 25,
    title: "Urgent Water Supply & Sanitation Rehab",
    client: "Crown Agents Limited",
    location: "Zimbabwe",
    status: "completed",
    sector: "Infrastructure",
    image: civilImg,
    summary:
      "Civil works subcontract on an urgent water supply and sanitation rehabilitation programme.",
    involvement: ["Civil works subcontract"],
    timeline: "Mar – Dec 2019",
  },
  {
    slug: "crop-institute-irrigation",
    n: 26,
    title: "Crop Institute Irrigation Rehabilitation",
    client: "Ministry of Agriculture",
    location: "Zimbabwe",
    status: "completed",
    sector: "Agricultural",
    image: civilImg,
    summary:
      "Refurbishment and rehabilitation works for the national Crop Institute irrigation infrastructure.",
    involvement: ["Construction"],
    timeline: "Sep – Dec 2019",
  },
  {
    slug: "gmb-reservoirs",
    n: 27,
    title: "GMB Firefighting & 13 Water Reservoirs",
    client: "GMB & SGE",
    location: "Silo sites, Zimbabwe",
    status: "completed",
    sector: "Industrial",
    image: industrialImg,
    summary:
      "Construction subcontract for firefighting infrastructure, 13 water reservoirs and pumphouses across Grain Marketing Board silo sites.",
    involvement: ["Construction subcontract"],
    timeline: "Feb – Aug 2018",
    cost: "USD 600,000",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
