export interface Credited {
  img: string;
  credit: string;
  creditHref: string;
}

export const contactEmails = ["mehretleg@gmail.com", "winnatradingplc@gmail.com"];
export const contactPhone = "+251 929 904 323";

export interface Variety extends Credited {
  slot: string;
  name: string;
  tags: string[];
  altitude: string;
  blocks: string;
  profile: string;
}

export interface FarmFact extends Credited {
  slot: string;
  name: string;
  region: string;
  notes: string;
}

export interface SpecRow {
  k: string;
  v: string;
}

export interface FarmProfileItem extends Credited {
  slot: string;
  name: string;
  desc: string;
  spec: SpecRow[];
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface Certification {
  label: string;
  color: string;
}

export interface WhyChooseItem {
  num: string;
  title: string;
  desc: string;
}

export interface ValueItem {
  n: string;
  title: string;
  desc: string;
}

export const trust = [
  "Certified Organic",
  "Shade-Grown Arabica",
  "1,705–1,880m Altitude",
  "Single-Origin Farm",
];

export const statTargets = {
  blocks: 12,
  varieties: 5,
  altitude: 1880,
  rainfall: 2200,
  hectares: 97,
};

export const statLabels: Record<keyof typeof statTargets, string> = {
  blocks: "Mapped Coffee Blocks",
  varieties: "Arabica Varieties",
  altitude: "Peak Altitude · m",
  rainfall: "Annual Rainfall · mm",
  hectares: "Hectares of Coffee",
};

const KUWIID = {
  credit: "Photo by wisnu dwi wibowo on Unsplash",
  creditHref: "https://unsplash.com/@kuwiid",
};

export const varieties: Variety[] = [
  {
    name: "Variety 74110",
    tags: ["Floral", "Balanced", "Medium body"],
    altitude: "1,720–1,780 m",
    blocks: "A1–A5",
    profile: "Balanced acidity, floral",
    slot: "v-74110",
    img: "https://images.unsplash.com/photo-1703646618312-6eb60d6b2d1c?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    ...KUWIID,
  },
  {
    name: "Variety 74158",
    tags: ["Wine-like", "Berry"],
    altitude: "1,705–1,780 m",
    blocks: "All blocks",
    profile: "Wine-like acidity, berry",
    slot: "v-74158",
    img: "https://images.unsplash.com/photo-1703646618602-307718605ea7?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    ...KUWIID,
  },
  {
    name: "Variety 74140",
    tags: ["Citrus", "Tea-like"],
    altitude: "1,705–1,750 m",
    blocks: "A6–A12",
    profile: "Citrusy, tea-like body",
    slot: "v-74140",
    img: "https://images.unsplash.com/photo-1703646618575-d2a3681a37b3?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    ...KUWIID,
  },
  {
    name: "Variety 74112",
    tags: ["Profile: expecting data"],
    altitude: "expecting data",
    blocks: "expecting data",
    profile: "expecting data",
    slot: "v-74112",
    img: "https://images.unsplash.com/photo-1703646618158-f1842374fa68?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    ...KUWIID,
  },
  {
    name: "Variety 74165",
    tags: ["Profile: expecting data"],
    altitude: "expecting data",
    blocks: "expecting data",
    profile: "expecting data",
    slot: "v-74165",
    img: "https://images.unsplash.com/photo-1703646618632-5eeb27fc6734?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    ...KUWIID,
  },
];

export const farmFacts: FarmFact[] = [
  {
    name: "Altitude",
    region: "Elevation",
    notes: "1,705–1,880 m — ideal for Arabica",
    slot: "farm-alt",
    img: "https://images.unsplash.com/photo-1637588168506-be08391079e4?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by BDU Fellowship VLM on Unsplash",
    creditHref: "https://unsplash.com/@bdu_fellowship_vlm",
  },
  {
    name: "Rainfall",
    region: "Climate",
    notes: "1,800–2,200 mm annually — consistent moisture",
    slot: "farm-rain",
    img: "https://images.unsplash.com/photo-1490100667990-4fced8021649?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by Tobias Tullius on Unsplash",
    creditHref: "https://unsplash.com/@tobiastu",
  },
  {
    name: "Volcanic Soil",
    region: "Terroir",
    notes: "pH 5.1–5.4, high organic content",
    slot: "farm-soil",
    img: "https://images.unsplash.com/photo-1708014750399-c0b86e16aea5?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by Juan Aguirre on Unsplash",
    creditHref: "https://unsplash.com/@juand0406",
  },
  {
    name: "Terraced Terrain",
    region: "Conservation",
    notes: "Contour planting on slopes up to 26% for soil conservation",
    slot: "farm-terrain",
    img: "https://images.unsplash.com/photo-1560198927-b31ef30c5867?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by Ivan Bandura on Unsplash",
    creditHref: "https://unsplash.com/@unstable_affliction",
  },
  {
    name: "Native Shade",
    region: "Biodiversity",
    notes: "Albizzia, Milletia & Acacia shade trees",
    slot: "farm-shade",
    img: "https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by Ales Krivec on Unsplash",
    creditHref: "https://unsplash.com/@aleskrivec",
  },
  {
    name: "On-Farm Processing",
    region: "Facilities",
    notes: "Wet and dry processing on site",
    slot: "farm-proc",
    img: "https://images.unsplash.com/photo-1629008642899-178df6fc5f2f?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by Nguyen Tong Hai Van on Unsplash",
    creditHref: "https://unsplash.com/@ngtghaivan",
  },
];

export const farmProfile: FarmProfileItem[] = [
  {
    name: "Farm Overview",
    desc: "Total area, planted coffee and block structure.",
    slot: "fp-overview",
    img: "https://images.unsplash.com/photo-1559556064-4161b6be179b?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by Reiseuhu on Unsplash",
    creditHref: "https://unsplash.com/@reiseuhu",
    spec: [
      { k: "Total area", v: "101.54 ha" },
      { k: "Coffee blocks", v: "97.36 ha" },
      { k: "Mapped blocks", v: "12 (A1–A12)" },
      { k: "Processing", v: "Wet & dry, on-site" },
    ],
  },
  {
    name: "Location",
    desc: "Keja Kebele, Masha District, Sheka Zone, SWEPRS, Ethiopia.",
    slot: "fp-location",
    img: "https://images.unsplash.com/photo-1588349500046-854848044870?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by Taylor Flowe on Unsplash",
    creditHref: "https://unsplash.com/@taypaigey",
    spec: [
      { k: "Zone", v: "Sheka" },
      { k: "District", v: "Masha" },
      { k: "Kebele", v: "Keja" },
      { k: "Region", v: "SWEPRS" },
    ],
  },
  {
    name: "Coordinates",
    desc: "Precise mapped farm boundary.",
    slot: "fp-coords",
    img: "https://images.unsplash.com/photo-1516822277566-bb38424a2b77?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by jean wimmerlin on Unsplash",
    creditHref: "https://unsplash.com/@jwimmerli",
    spec: [
      { k: "Latitude", v: "7°50'57.87\"N – 7°51'43.66\"N" },
      { k: "Longitude", v: "35°27'48.87\"E – 35°27'54.58\"E" },
    ],
  },
  {
    name: "Growing Conditions",
    desc: "The natural conditions behind the cup.",
    slot: "fp-cond",
    img: "https://images.unsplash.com/photo-1586095516671-d085ff58cdd4?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    credit: "Photo by Eduardo Gorghetto on Unsplash",
    creditHref: "https://unsplash.com/@egorghetto",
    spec: [
      { k: "Altitude", v: "1,705–1,880 m" },
      { k: "Rainfall", v: "1,800–2,200 mm" },
      { k: "Soil pH", v: "5.1–5.4" },
      { k: "Max slope", v: "26%" },
    ],
  },
];

export const process: ProcessStep[] = [
  {
    n: "01",
    title: "Cultivation",
    desc: "Certified-organic Arabica grown at 1,705–1,880m under native shade trees (Albizzia, Milletia, Acacia), with no synthetic fertilizers or pesticides.",
  },
  {
    n: "02",
    title: "Harvest",
    desc: "Selective picking across 12 mapped blocks on contour/terraced slopes engineered for soil conservation.",
  },
  {
    n: "03",
    title: "Processing",
    desc: "On-farm wet and dry processing facilities give us full control over fermentation, washing and drying.",
  },
  {
    n: "04",
    title: "Sorting & Grading",
    desc: "Grading standards and quality specifications — expecting data.",
  },
  {
    n: "05",
    title: "Direct Export",
    desc: "Full farm-to-export control ensures quality and supports local communities. Export terms and destinations — expecting data.",
  },
];

export const certifications: Certification[] = [
  { label: "Certified Organic", color: "#EAE3D4" },
  { label: "expecting data", color: "#8FA093" },
  { label: "expecting data", color: "#8FA093" },
  { label: "expecting data", color: "#8FA093" },
];

export const whyChoose: WhyChooseItem[] = [
  {
    num: "1",
    title: "Organic Practices",
    desc: "Certified organic beans grown under native shade trees, with no synthetic fertilizers or pesticides.",
  },
  {
    num: "2",
    title: "High Altitude",
    desc: "Grown at 1,705–1,880m for slower maturation and more complex flavour.",
  },
  {
    num: "3",
    title: "Direct Sourcing",
    desc: "Full farm-to-export control ensures quality and supports local communities.",
  },
];

export const values: ValueItem[] = [
  {
    n: "01",
    title: "Environmental Stewardship",
    desc: "Maintaining 40–70% natural forest cover with native shade trees for biodiversity.",
  },
  {
    n: "02",
    title: "Community Employment",
    desc: "Creating jobs across Masha District through farm and processing operations.",
  },
  {
    n: "03",
    title: "Research Partnerships",
    desc: "Collaborating with the Jimma Agricultural Research Center on improved varieties.",
  },
];

export const socials = ["f", "x", "ig", "in"];

export const heroImage: Credited = {
  img: "https://images.unsplash.com/photo-1633437805600-2c58bf56663c?fm=jpg&q=60&w=3000&auto=format&fit=crop",
  credit: "Photo by Dhan Sugui on Unsplash",
  creditHref: "https://unsplash.com/@dhansugui",
};

export const aboutImage: Credited = {
  img: "https://images.unsplash.com/photo-1703646618605-1e9e7b728bc0?fm=jpg&q=60&w=3000&auto=format&fit=crop",
  ...KUWIID,
};

export const impactImage: Credited = {
  img: "https://images.unsplash.com/photo-1532415914860-f6ee7c74c9fb?fm=jpg&q=60&w=3000&auto=format&fit=crop",
  credit: "Photo by rawkkim on Unsplash",
  creditHref: "https://unsplash.com/@rawkkim",
};
