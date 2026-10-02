import bean1 from "../assets/bean1.jpg";
import bean2 from "../assets/bean2.jpg";
import bean3 from "../assets/bean3.jpg";
import bean4 from "../assets/bean4.jpg";
import bean5 from "../assets/bean5.jpg";
import bagFoldTop from "../assets/coffee-bean-bag/bag-foldtop.webp";
import bagSack from "../assets/coffee-bean-bag/bag-sack.webp";
import aboutPhoto from "../assets/about.jpg";
import altitudePhoto from "../assets/altitude.png";
import rainfallPhoto from "../assets/rainfall.jpg";
import volcanicSoilPhoto from "../assets/volcanic-soil.jpg";
import terracedPhoto from "../assets/terraced.jpg";
import nativeShadePhoto from "../assets/nateive-shade.jpg";
import onFarmProcessingPhoto from "../assets/on-farm-processing.jpg";
import farmOverviewPhoto from "../assets/farm-overview.jpg";
import locationPhoto from "../assets/location.jpg";
import coordinatesPhoto from "../assets/coordinates.jpg";
import growingConditionsPhoto from "../assets/growing-conditions.jpg";
import heroPhoto from "../assets/hero.jpg";
import agricultureThatCaresPhoto from "../assets/agriculture-that-cares.jpg";

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
  /** Transparent cut-out of the bag shown in the varieties dial. */
  bag: string;
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

const NO_CREDIT = { credit: "", creditHref: "" };

export const varieties: Variety[] = [
  {
    name: "Variety 74110",
    tags: ["Floral", "Balanced", "Medium body"],
    altitude: "1,720–1,780 m",
    blocks: "A1–A5",
    profile: "Balanced acidity, floral",
    slot: "v-74110",
    bag: bagFoldTop,
    img: bean1,
    ...NO_CREDIT,
  },
  {
    name: "Variety 74158",
    tags: ["Wine-like", "Berry"],
    altitude: "1,705–1,780 m",
    blocks: "All blocks",
    profile: "Wine-like acidity, berry",
    slot: "v-74158",
    bag: bagSack,
    img: bean2,
    ...NO_CREDIT,
  },
  {
    name: "Variety 74140",
    tags: ["Citrus", "Tea-like"],
    altitude: "1,705–1,750 m",
    blocks: "A6–A12",
    profile: "Citrusy, tea-like body",
    slot: "v-74140",
    bag: bagFoldTop,
    img: bean3,
    ...NO_CREDIT,
  },
  {
    name: "Variety 74112",
    tags: ["Profile: expecting data"],
    altitude: "expecting data",
    blocks: "expecting data",
    profile: "expecting data",
    slot: "v-74112",
    bag: bagSack,
    img: bean4,
    ...NO_CREDIT,
  },
  {
    name: "Variety 74165",
    tags: ["Profile: expecting data"],
    altitude: "expecting data",
    blocks: "expecting data",
    profile: "expecting data",
    slot: "v-74165",
    bag: bagFoldTop,
    img: bean5,
    ...NO_CREDIT,
  },
];

export const farmFacts: FarmFact[] = [
  {
    name: "Altitude",
    region: "Elevation",
    notes: "1,705–1,880 m - ideal for Arabica",
    slot: "farm-alt",
    img: altitudePhoto,
    ...NO_CREDIT,
  },
  {
    name: "Rainfall",
    region: "Climate",
    notes: "1,800–2,200 mm annually - consistent moisture",
    slot: "farm-rain",
    img: rainfallPhoto,
    ...NO_CREDIT,
  },
  {
    name: "Volcanic Soil",
    region: "Terroir",
    notes: "pH 5.1–5.4, high organic content",
    slot: "farm-soil",
    img: volcanicSoilPhoto,
    ...NO_CREDIT,
  },
  {
    name: "Terraced Terrain",
    region: "Conservation",
    notes: "Contour planting on slopes up to 26% for soil conservation",
    slot: "farm-terrain",
    img: terracedPhoto,
    ...NO_CREDIT,
  },
  {
    name: "Native Shade",
    region: "Biodiversity",
    notes: "Albizzia, Milletia & Acacia shade trees",
    slot: "farm-shade",
    img: nativeShadePhoto,
    ...NO_CREDIT,
  },
  {
    name: "On-Farm Processing",
    region: "Facilities",
    notes: "Wet and dry processing on site",
    slot: "farm-proc",
    img: onFarmProcessingPhoto,
    ...NO_CREDIT,
  },
];

export const farmProfile: FarmProfileItem[] = [
  {
    name: "Farm Overview",
    desc: "Total area, planted coffee and block structure.",
    slot: "fp-overview",
    img: farmOverviewPhoto,
    ...NO_CREDIT,
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
    img: locationPhoto,
    ...NO_CREDIT,
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
    img: coordinatesPhoto,
    ...NO_CREDIT,
    spec: [
      { k: "Latitude", v: "7°50'57.87\"N – 7°51'43.66\"N" },
      { k: "Longitude", v: "35°27'48.87\"E – 35°27'54.58\"E" },
    ],
  },
  {
    name: "Growing Conditions",
    desc: "The natural conditions behind every bean.",
    slot: "fp-cond",
    img: growingConditionsPhoto,
    ...NO_CREDIT,
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
    desc: "Grading standards and quality specifications - expecting data.",
  },
  {
    n: "05",
    title: "Direct Export",
    desc: "Full farm-to-export control ensures quality and supports local communities. Export terms and destinations - expecting data.",
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

export interface Social {
  label: string;
  href: string;
}

// Add the profile URLs when available; entries without an href render as plain text.
export const socials: Social[] = [
  { label: "Instagram", href: "" },
  { label: "Facebook", href: "" },
  { label: "LinkedIn", href: "" },
  { label: "X / Twitter", href: "" },
];

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

// Expecting data - the section shows a placeholder while this is empty.
export const testimonials: Testimonial[] = [];

export interface FaqItem {
  q: string;
  a: string;
}

// Expecting data - the section shows a placeholder while this is empty.
export const faqs: FaqItem[] = [];

export const officeAddress = ["Bole, Welelay Building, 4th Floor", "Addis Ababa, Ethiopia"];
export const farmCoordinates = "7°51′N · 35°27′E";
export const whatsappHref = `https://wa.me/${contactPhone.replace(/\D/g, "")}`;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#coffee", label: "Varieties" },
  { href: "#origins", label: "The Farm" },
  { href: "#process", label: "Process" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export const heroImage: Credited = {
  img: heroPhoto,
  ...NO_CREDIT,
};

export const aboutImage: Credited = {
  img: aboutPhoto,
  ...NO_CREDIT,
};

export const impactImage: Credited = {
  img: agricultureThatCaresPhoto,
  ...NO_CREDIT,
};
