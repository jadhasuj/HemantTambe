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
  <meta name="description" content="Hemant Maruti Tambe is Managing Director of HMT, a civil engineer and civil works contractor serving Pune city and Pune district.">
  <meta name="keywords" content="Hemant Maruti Tambe,HMT,civil engineer Pune,civil works contractor Pune,construction contractor Pune,architectural planning Pune,licensing Pune,Hadapsar construction contractor">
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
      <a href="#top">Home</a><a href="#profile">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#coverage">Coverage</a><a href="#contact">Contact</a>
    </nav>
    <a class="headerCta" href="${whatsappHref}" target="_blank" rel="noreferrer">${whatsappMark} WhatsApp</a>
  </header>
  <section class="hero" id="top">
    <div class="heroImage" aria-hidden="true"></div>
    <div class="heroContent">
      <p class="eyebrow">Civil Engineer and Civil Works Contractor</p>
      <h1>Hemant Maruti Tambe</h1>
      <p class="lead">Managing Director of HMT, providing civil works, construction contracting, development support, architectural planning, and licensing services across Pune city and Pune district.</p>
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
  </section>
  <section class="band intro" id="profile">
    <div><p class="eyebrow">Company Profile</p><h2>Reliable civil work leadership for Pune projects.</h2></div>
    <p>HMT works with property owners, developers, promoters, and project partners who need dependable construction execution and practical coordination from early concept through site work. The firm is led by Hemant Maruti Tambe, Managing Director, with a focus on disciplined delivery in Pune.</p>
  </section>
  <section class="band" id="services">
    <div class="sectionHead"><p class="eyebrow">Services</p><h2>Construction, planning, and civil execution support.</h2></div>
    <div class="serviceGrid">
      ${["Civil works contracting", "Construction contractor services", "Development and promoter coordination", "Architectural planning and licensing", "Site execution and supervision", "Pune city and Pune district projects"].map((service) => `<article><span aria-hidden="true"></span><h3>${service}</h3></article>`).join("")}
    </div>
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
  <section class="band workTypes" id="projects">
    <div class="sectionHead"><p class="eyebrow">Project Types</p><h2>Built for owners, developers, and promoters.</h2></div>
    <div class="pillGrid">
      ${["Residential construction", "Commercial civil works", "Renovation and improvement work", "Developer and promoter projects", "Architectural planning support", "Licensing and municipal coordination"].map((type) => `<span>${type}</span>`).join("")}
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
  <footer><div><span>HMT Hemant Maruti Tambe</span><span>Constructing Concepts</span></div><nav aria-label="Footer navigation"><a href="#top">Home</a><a href="#profile">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#coverage">Coverage</a><a href="#contact">Contact</a><a href="/sitemap.xml">Sitemap</a></nav></footer>
</main>
</body>
</html>`;

writeFileSync(join(outDir, "index.html"), html);
writeFileSync(join(outDir, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n");
writeFileSync(
  join(outDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://hmtambe.com</loc><lastmod>2026-06-22</lastmod><changefreq>monthly</changefreq><priority>1</priority></url></urlset>\n`
);
