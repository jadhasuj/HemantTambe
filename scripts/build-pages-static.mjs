import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "dist-pages";
const cssDir = join("dist", "client", "assets");
const cssFile = readdirSync(cssDir).find((file) => file.startsWith("index-") && file.endsWith(".css"));

if (!cssFile) {
  throw new Error("Compiled CSS file not found. Run npm run build first.");
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(join(outDir, "assets"), { recursive: true });

copyFileSync(join(cssDir, cssFile), join(outDir, "assets", cssFile));

for (const asset of ["hmt-logo.jpeg", "hmt-contact-card.jpeg", "favicon.svg", "file.svg", "globe.svg", "window.svg"]) {
  const source = join("public", asset);
  if (existsSync(source)) {
    copyFileSync(source, join(outDir, asset));
  }
}

for (const directory of ["projects", "plans", "presentation"]) {
  const source = join("public", directory);
  if (existsSync(source)) {
    cpSync(source, join(outDir, directory), { recursive: true });
  }
}

if (existsSync(join("dist", "client", "assets", "_vinext_fonts"))) {
  cpSync(join("dist", "client", "assets", "_vinext_fonts"), join(outDir, "assets", "_vinext_fonts"), {
    recursive: true,
  });
}

const officeAddress = "Panchawati Complex, Hadapsar Gaon, Hadapsar, Pune, Maharashtra 411028, India";
const mapUrl = "https://maps.app.goo.gl/hi1WhpziM7oUxftN9";
const mapQuery = encodeURIComponent(officeAddress);
const whatsAppMessage = encodeURIComponent(
  "Hello Hemant Tambe, I would like to discuss civil work / construction requirements in Pune."
);
const whatsappHref = `https://wa.me/919595341818?text=${whatsAppMessage}`;
const seoKeywords = [
  "Hemant Maruti Tambe",
  "HMT",
  "civil work Pune",
  "civil contractor Pune",
  "civil works contractor Pune",
  "construction contractor Pune",
  "home contractor Pune",
  "bungalow contractor Pune",
  "building contractor Pune",
  "RCC work Pune",
  "slab work contractor Pune",
  "school building contractor Pune",
  "society project design Pune",
  "plot development Pune",
  "architectural planning Pune",
  "building sanction Pune",
  "licensing Pune",
  "Hadapsar civil contractor",
  "Pune district civil contractor",
  "Chakan MIDC civil work",
  "Kharadi construction contractor",
];

const credentials = [
  ["Corporate and industrial references", "The latest HMT profile references Amanora City Group, Rieter India Pvt. Ltd., Praj Group, and STIHL Company at Chakan MIDC."],
  ["Public and institutional exposure", "Portfolio material references PMC, PWD, civil tender participation, school building work, and Wellington College International landscape work."],
  ["Residential and society work", "Completed bungalows, buildings, Kharadi residential work, Chakan apartment work, renovation, and self-development experience."],
  ["Local delivery base", "Hadapsar office with project references across Pune city, Pune district, Chakan MIDC, Ambethan MIDC, Kharadi, Narayan Peth, and Sadashiv Peth."],
];

const portfolioGroups = [
  {
    title: "Bungalow and private residential work",
    text: "Independent homes, private bungalow work, and residential delivery for clients who need one accountable civil engineering partner.",
    items: [
      ["Completed bungalow project", "Detached residential construction presented as part of HMT's completed private work.", "/projects/bungalow-project.jpeg"],
      ["Residential society concept", "Design and massing view used to communicate a housing project before execution.", "/projects/society-project.jpeg"],
      ["Private residential elevation", "Visual planning reference for facade, scale, and building frontage decisions.", "/projects/society-project-2.jpeg"],
    ],
  },
  {
    title: "Building and society projects",
    text: "Multi-storey buildings, apartment work, facade progress, and society-scale construction references.",
    items: [
      ["Building project exterior", "Finished or near-finished building elevation from the new project photo set.", "/projects/building-project.jpeg"],
      ["Urban building frontage", "Project photograph showing compact city-side building execution.", "/projects/building-project-4.jpeg"],
      ["Society project design", "Residential society design reference for planning discussions and approvals.", "/projects/society-project-3.jpeg"],
    ],
  },
  {
    title: "Institutional, landscape, and entrance design",
    text: "School planning, courtyards, entrance treatments, and landscape execution for institutional and campus environments.",
    items: [
      ["Entrance design visual", "Rendered entrance treatment showing gateway, access, and landscape intent.", "/projects/entrance-design.jpeg"],
      ["Completed site frontage", "Photograph from the completed-work set showing clean external presentation.", "/projects/work-completed.jpeg"],
      ["Pune Metro work reference", "Civil execution and site exposure related to metro or infrastructure surroundings.", "/projects/pune-metro.jpeg"],
    ],
  },
];

const plans = [
  ["School layout plan", "Proposed Shivaji Vidhyalay and Junior College layout at Dehene, Tal. Khed, Dist. Pune, including classrooms, office, toilets, playground, amphitheatre, parking, and circulation.", "/plans/school-plan.jpg", "/plans/school-plan.pdf"],
  ["Main building plan", "Main building R1 plan preview for planning, discussion, and development coordination.", "/plans/main-building-plan.jpg", "/plans/main-building-plan.pdf"],
  ["Entrance design plan", "Entrance R1 design sheet for access, identity, and arrival experience planning.", "/plans/entrance-design.jpg", "/plans/entrance-design.pdf"],
  ["Courtyard design 1", "Courtyard R1 design preview showing open-space treatment and circulation thinking.", "/plans/courtyard-design-1.jpg", "/plans/courtyard-design-1.pdf"],
  ["Courtyard design 2", "Second courtyard R1 design option for project comparison and client review.", "/plans/courtyard-design-2.jpg", "/plans/courtyard-design-2.pdf"],
];

const execution = [
  ["RCC work", "Reinforced concrete work and site execution detail.", "/projects/rcc-work.jpeg"],
  ["Slab work", "Slab-stage construction showing structural progress on site.", "/projects/slab-work.jpeg"],
  ["Under construction", "Ongoing work capture from an active construction stage.", "/projects/under-construction.jpeg"],
  ["Work in progress", "Progress photograph showing active civil execution and site management.", "/projects/work-in-progress.jpeg"],
  ["Actual site work", "Field photograph showing practical site activity and delivery work.", "/projects/actual-site-work.jpeg"],
  ["Pune Metro work", "Infrastructure-adjacent site work reference from the supplied project images.", "/projects/pune-metro-work.jpeg"],
];

const galleryCards = (items) => items.map(([title, text, image]) => `
  <article class="galleryCard"><img src="${image}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${text}</p></div></article>
`).join("");

const featureCards = (items) => items.map(([title, text]) => `
  <article><h3>${title}</h3><p>${text}</p></article>
`).join("");

const whatsappMark = `
<span class="whatsappMark" aria-hidden="true">
  <svg viewBox="0 0 24 24" role="img">
    <path d="M12 3.25a8.42 8.42 0 0 0-7.18 12.84l-.9 3.54 3.61-.84A8.42 8.42 0 1 0 12 3.25Zm0 1.55a6.88 6.88 0 0 1 5.86 10.49 6.88 6.88 0 0 1-8.08 2.45l-.26-.12-2.2.51.55-2.12-.16-.27A6.88 6.88 0 0 1 12 4.8Zm-2.4 3.63c-.15 0-.38.04-.58.26-.2.22-.76.74-.76 1.8 0 1.06.78 2.09.88 2.23.11.14 1.53 2.38 3.76 3.24 1.86.72 2.24.58 2.65.54.4-.04 1.31-.54 1.5-1.05.18-.52.18-.96.12-1.05-.05-.09-.2-.14-.43-.26-.23-.11-1.34-.66-1.55-.74-.21-.07-.36-.11-.51.12-.15.22-.59.73-.72.88-.13.15-.27.17-.5.06-.23-.12-.96-.35-1.83-1.12-.68-.6-1.13-1.35-1.27-1.58-.13-.22-.01-.34.1-.46.1-.1.23-.27.34-.4.12-.13.15-.22.23-.37.08-.15.04-.28-.02-.4-.06-.11-.5-1.2-.69-1.65-.18-.43-.36-.44-.5-.45l-.42-.01Z"></path>
  </svg>
</span>`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HMT Hemant Maruti Tambe",
  alternateName: "Hemant Maruti Tambe",
  slogan: "Constructing Concepts",
  description: "Civil engineer and civil works contractor serving Pune city and Pune district.",
  image: "/hmt-logo.jpeg",
  photo: [
    "/projects/hemant-tambe-profile.jpeg",
    "/projects/bungalow-project.jpeg",
    "/projects/building-project.jpeg",
    "/plans/school-plan.jpg",
  ],
  telephone: ["+91 9595341818", "+91 9175251338"],
  email: "hemantmarutitambe@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Panchawati Complex, Hadapsar Gaon, Hadapsar",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411028",
    addressCountry: "IN",
  },
  areaServed: ["Pune city", "Pune district"],
  serviceType: [
    "Civil works contracting",
    "Home construction",
    "Bungalow construction",
    "RCC work",
    "Slab work",
    "Building sanction support",
    "Architectural planning and licensing",
    "School building planning",
    "Society project design",
    "Plot development",
  ],
  founder: {
    "@type": "Person",
    name: "Hemant Maruti Tambe",
    jobTitle: "Managing Director",
  },
};

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hemant Maruti Tambe | HMT Civil Works Contractor Pune</title>
  <meta name="description" content="Hemant Maruti Tambe is Managing Director of HMT, a civil engineer and civil works contractor for home construction, bungalow work, RCC work, school planning, building sanction, and civil work across Hadapsar, Pune city, and Pune district.">
  <meta name="keywords" content="${seoKeywords.join(",")}">
  <meta property="og:title" content="Hemant Maruti Tambe | HMT Civil Works Contractor Pune">
  <meta property="og:description" content="Civil works, construction contracting, development support, architectural planning, and licensing across Pune.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">
  <meta property="og:image" content="/hmt-logo.jpeg">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg">
  <link rel="stylesheet" href="/assets/${cssFile}">
  <script type="application/ld+json">${JSON.stringify(localBusinessSchema)}</script>
</head>
<body>
<main>
  <header class="siteHeader" aria-label="HMT site header">
    <a class="brand" href="#top" aria-label="HMT home"><img src="/hmt-logo.jpeg" alt="HMT Hemant Maruti Tambe logo"></a>
    <nav aria-label="Primary navigation">
      <a href="#top">Home</a><a href="#profile">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#plans">Plans</a><a href="#coverage">Coverage</a><a href="#contact">Contact</a>
    </nav>
    <a class="headerCta" href="${whatsappHref}" target="_blank" rel="noreferrer">${whatsappMark} WhatsApp</a>
  </header>
  <section class="hero" id="top">
    <div class="heroImage" aria-hidden="true"></div>
    <div class="heroContent">
      <p class="eyebrow">Civil Engineer and Civil Works Contractor</p>
      <h1>Hemant Maruti Tambe</h1>
      <p class="lead">Managing Director of HMT, providing civil works, construction contracting, development support, architectural planning, and licensing services across Pune city and Pune district.</p>
      <div class="heroFacts" aria-label="Key business facts">
        <span>Hadapsar, Pune</span>
        <span>Pune district projects</span>
        <span>Since 2009</span>
        <span>B.E. Civil</span>
      </div>
      <div class="heroActions" aria-label="Contact actions">
        <a href="tel:+919595341818">Call Hemant Tambe</a>
        <a class="whatsappLink" href="${whatsappHref}" target="_blank" rel="noreferrer">${whatsappMark} WhatsApp</a>
        <a href="mailto:hemantmarutitambe@gmail.com">Send Email</a>
      </div>
    </div>
    <aside class="heroPanel" aria-label="HMT company summary">
      <span>HMT</span><strong>Constructing Concepts</strong>
      <p>Construction Contractor | Developer | Promoter</p>
      <p>Architectural Planning and Licensing</p>
    </aside>
    <div class="project-grid heroThumbStrip" aria-label="Completed building thumbnails">
      ${[
        "/presentation/residential-render.jpeg",
        "/projects/building-project-4.jpeg",
        "/projects/building-project.jpeg",
        "/projects/society-project-3.jpeg",
      ].map((src) => `<article class="project-card"><div class="thumbnail-wrapper"><img class="project-thumbnail" src="${src}" alt="Completed building thumbnail" loading="lazy"><span class="project-status">Completed</span></div></article>`).join("")}
    </div>
  </section>
  <section class="band intro" id="profile">
    <div><p class="eyebrow">Company Profile</p><h2>Reliable civil work leadership for Pune projects.</h2></div>
    <p>HMT works with property owners, developers, promoters, and project partners who need dependable construction execution and practical coordination from early concept through site work. The firm is led by Hemant Maruti Tambe, Managing Director, with a focus on disciplined delivery in Pune.</p>
  </section>
  <section class="band profileFeature">
    <figure><img src="/projects/hemant-tambe-profile.jpeg" alt="Hemant Maruti Tambe, Managing Director of HMT"></figure>
    <div>
      <p class="eyebrow">Leadership</p><h2>B.E. Civil leadership with an independent construction business since 2009.</h2>
      <div class="statGrid">
        <article><strong>2006</strong><span>B.E. Civil completed</span></article>
        <article><strong>2009</strong><span>Independent business started</span></article>
        <article><strong>32+</strong><span>Completed bungalows</span></article>
        <article><strong>9+</strong><span>Completed buildings</span></article>
      </div>
    </div>
  </section>
  <section class="band" id="services">
    <div class="sectionHead"><p class="eyebrow">Services</p><h2>Construction, planning, and civil execution support.</h2></div>
    <div class="serviceGrid">
      ${["Civil works contracting", "Home and bungalow construction", "RCC, slab, and site execution", "Development and promoter coordination", "Architectural planning and licensing", "School, society, and Pune district projects"].map((service) => `<article><span aria-hidden="true"></span><h3>${service}</h3></article>`).join("")}
    </div>
  </section>
  <section class="band credentialsBand">
    <div class="sectionHead"><p class="eyebrow">Clients and Work References</p><h2>Experience across private, institutional, industrial, and government-linked work.</h2></div>
    <div class="featureGrid">${featureCards(credentials)}</div>
  </section>
  <section class="band split">
    <div><p class="eyebrow">Why HMT</p><h2>Grounded in local site realities.</h2></div>
    <div class="strengthGrid">
      ${[
        ["Local Pune Focus", "Practical knowledge of Pune city and district execution requirements."],
        ["Concept to Completion", "Planning, permissions, site coordination, civil work, and delivery support."],
        ["Director Led", "Work is guided by Hemant Maruti Tambe, Managing Director of HMT."],
        ["Clear Communication", "Direct contact for owners, developers, architects, and project stakeholders."],
      ].map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
    </div>
  </section>
  <section class="band portfolioBand" id="projects">
    <div class="sectionHead"><p class="eyebrow">Portfolio Groups</p><h2>Built work, design intent, and site execution grouped by project type.</h2></div>
    <div class="portfolioGroups">
      ${portfolioGroups.map((group) => `<section class="portfolioGroup"><div class="portfolioGroupIntro"><h3>${group.title}</h3><p>${group.text}</p></div><div class="galleryGrid">${galleryCards(group.items)}</div></section>`).join("")}
    </div>
  </section>
  <section class="band planBand" id="plans">
    <div class="sectionHead"><p class="eyebrow">Drawings and Design Sheets</p><h2>Plan previews for school, courtyard, entrance, and building design work.</h2></div>
    <div class="planGrid">
      ${plans.map(([title, text, image, file]) => `<article class="planCard"><a href="${file}" target="_blank" rel="noreferrer"><img src="${image}" alt="${title}" loading="lazy"></a><div><h3>${title}</h3><p>${text}</p><a href="${file}" target="_blank" rel="noreferrer">Open PDF</a></div></article>`).join("")}
    </div>
  </section>
  <section class="band executionBand">
    <div class="sectionHead"><p class="eyebrow">Site Execution</p><h2>RCC, slab, progress, and infrastructure-site work shown from the field.</h2></div>
    <div class="galleryGrid">${galleryCards(execution)}</div>
  </section>
  <section class="band scgtBand">
    <div class="sectionHead"><h2>School, campus, housing, and site progression from the original presentation.</h2></div>
    <div class="featureGrid scgtGrid">
      ${[
        ["Campus building", "Completed campus building and concept render views used in the original deck.", "/presentation/concept-render-campus.jpeg"],
        ["Housing block", "Large housing block and apartment facade progression from the slide set.", "/presentation/large-housing-block.jpeg"],
        ["Site sequence", "Excavation, structural progress, facade finish, and completed bungalow views from the presentation photos.", "/presentation/excavation-work.jpeg"],
        ["School planning", "Shivaji Vidhyalay and Junior College layout at Dehene, Tal. Khed, Dist. Pune with classrooms, office, toilets, playground, amphitheatre, parking, and circulation planning.", "/plans/school-plan.jpg"],
      ].map(([title, text, image]) => `<article class="galleryCard"><img src="${image}" alt="${title}" loading="lazy"><div><h3>${title}</h3><p>${text}</p></div></article>`).join("")}
    </div>
  </section>
  <section class="band coverage" id="coverage">
    <div class="sectionHead"><p class="eyebrow">Service Area</p><h2>Focused on Pune city and Pune district.</h2></div>
    <div class="coveragePanel">
      <p>HMT supports civil works and construction requirements in Hadapsar, Pune city, and project locations across Pune district.</p>
      <a href="${mapUrl}" target="_blank" rel="noreferrer">Open Office Location</a>
    </div>
  </section>
  <section class="contactBand" id="contact">
    <div class="contactText">
      <p class="eyebrow">Contact</p><h2>Discuss civil work or construction requirements in Pune.</h2>
      <address><strong>Hemant Maruti Tambe</strong><span>Managing Director, HMT</span><span>Panchawati Complex</span><span>Hadapsar Gaon, Hadapsar</span><span>Pune, Maharashtra 411028</span></address>
      <div class="contactActions">
        <a href="tel:+919595341818">+91 9595341818</a>
        <a class="whatsappLink" href="${whatsappHref}" target="_blank" rel="noreferrer">${whatsappMark} WhatsApp Now</a>
        <a href="tel:+919175251338">+91 9175251338</a>
        <a href="mailto:hemantmarutitambe@gmail.com">hemantmarutitambe@gmail.com</a>
      </div>
    </div>
    <div class="contactMedia">
      <iframe title="HMT office location on Google Maps" src="https://www.google.com/maps?q=${mapQuery}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
  <footer><div><span>HMT Hemant Maruti Tambe</span><span>Constructing Concepts</span></div><nav aria-label="Footer navigation"><a href="#top">Home</a><a href="#profile">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#plans">Plans</a><a href="#coverage">Coverage</a><a href="#contact">Contact</a><a href="/sitemap.xml">Sitemap</a></nav></footer>
</main>
</body>
</html>`;

writeFileSync(join(outDir, "index.html"), html);
writeFileSync(join(outDir, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n");
writeFileSync(
  join(outDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://hmtambe.com</loc><lastmod>2026-07-09</lastmod><changefreq>monthly</changefreq><priority>1</priority></url></urlset>\n`
);
