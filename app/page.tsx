/* eslint-disable @next/next/no-img-element */

const services = [
  "Civil works contracting",
  "Construction contractor services",
  "Development and promoter coordination",
  "Architectural planning and licensing",
  "Site execution and supervision",
  "Pune city and Pune district projects",
];

const strengths = [
  ["Local Pune Focus", "Practical knowledge of Pune city and district execution requirements."],
  ["Concept to Completion", "Planning, permissions, site coordination, civil work, and delivery support."],
  ["Director Led", "Work is guided by Hemant Maruti Tambe, Managing Director of HMT."],
  ["Clear Communication", "Direct contact for owners, developers, architects, and project stakeholders."],
];

const projectTypes = [
  "Residential construction",
  "Commercial civil works",
  "Renovation and improvement work",
  "Developer and promoter projects",
  "Architectural planning support",
  "Licensing and municipal coordination",
];

const officeAddress =
  "Off. No. 10, Panchwati Complex, Near Vaibhav Theatre, Hadapsar, Pune 411028";
const mapQuery = encodeURIComponent(officeAddress);
const whatsAppMessage = encodeURIComponent(
  "Hello Hemant Tambe, I would like to discuss civil work / construction requirements in Pune."
);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HMT Hemant Maruti Tambe",
  alternateName: "Hemant Maruti Tambe",
  slogan: "Constructing Concepts",
  description:
    "Civil engineer and civil works contractor serving Pune city and Pune district.",
  image: "/hmt-logo.jpeg",
  telephone: ["+91 9595341818", "+91 9175251338"],
  email: "hemantmarutitambe@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Off. No. 10, Panchwati Complex, Near Vaibhav Theatre, Hadapsar",
    addressLocality: "Pune",
    postalCode: "411028",
    addressCountry: "IN",
  },
  areaServed: ["Pune city", "Pune district"],
  founder: {
    "@type": "Person",
    name: "Hemant Maruti Tambe",
    jobTitle: "Managing Director",
  },
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service,
    },
  })),
};

function WhatsAppMark() {
  return (
    <span className="whatsappMark" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        <path d="M12 3.25a8.42 8.42 0 0 0-7.18 12.84l-.9 3.54 3.61-.84A8.42 8.42 0 1 0 12 3.25Zm0 1.55a6.88 6.88 0 0 1 5.86 10.49 6.88 6.88 0 0 1-8.08 2.45l-.26-.12-2.2.51.55-2.12-.16-.27A6.88 6.88 0 0 1 12 4.8Zm-2.4 3.63c-.15 0-.38.04-.58.26-.2.22-.76.74-.76 1.8 0 1.06.78 2.09.88 2.23.11.14 1.53 2.38 3.76 3.24 1.86.72 2.24.58 2.65.54.4-.04 1.31-.54 1.5-1.05.18-.52.18-.96.12-1.05-.05-.09-.2-.14-.43-.26-.23-.11-1.34-.66-1.55-.74-.21-.07-.36-.11-.51.12-.15.22-.59.73-.72.88-.13.15-.27.17-.5.06-.23-.12-.96-.35-1.83-1.12-.68-.6-1.13-1.35-1.27-1.58-.13-.22-.01-.34.1-.46.1-.1.23-.27.34-.4.12-.13.15-.22.23-.37.08-.15.04-.28-.02-.4-.06-.11-.5-1.2-.69-1.65-.18-.43-.36-.44-.5-.45l-.42-.01Z" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <header className="siteHeader" aria-label="HMT site header">
        <a className="brand" href="#top" aria-label="HMT home">
          <img
            src="/hmt-logo.jpeg"
            alt="HMT Hemant Maruti Tambe logo"
          />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#top">Home</a>
          <a href="#profile">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#coverage">Coverage</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="headerCta"
          href={`https://wa.me/919595341818?text=${whatsAppMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppMark />
          WhatsApp
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow">Civil Engineer and Civil Works Contractor</p>
          <h1>Hemant Maruti Tambe</h1>
          <p className="lead">
            Managing Director of HMT, providing civil works, construction
            contracting, development support, architectural planning, and
            licensing services across Pune city and Pune district.
          </p>
          <div className="heroActions" aria-label="Contact actions">
            <a href="tel:+919595341818">Call Hemant Tambe</a>
            <a
              className="whatsappLink"
              href={`https://wa.me/919595341818?text=${whatsAppMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppMark />
              WhatsApp
            </a>
            <a href="mailto:hemantmarutitambe@gmail.com">Send Email</a>
          </div>
          <div className="heroStats" aria-label="HMT quick facts">
            <span>Pune city</span>
            <span>Pune district</span>
            <span>Civil works</span>
            <span>Planning and licensing</span>
          </div>
        </div>
        <aside className="heroPanel" aria-label="HMT company summary">
          <span>HMT</span>
          <strong>Constructing Concepts</strong>
          <p>Construction Contractor | Developer | Promoter</p>
          <p>Architectural Planning and Licensing</p>
        </aside>
      </section>

      <section className="band intro" id="profile">
        <div>
          <p className="eyebrow">Company Profile</p>
          <h2>Reliable civil work leadership for Pune projects.</h2>
        </div>
        <p>
          HMT works with property owners, developers, promoters, and project
          partners who need dependable construction execution and practical
          coordination from early concept through site work. The firm is led by
          Hemant Maruti Tambe, Managing Director, with a focus on disciplined
          delivery in Pune.
        </p>
      </section>

      <section className="band" id="services">
        <div className="sectionHead">
          <p className="eyebrow">Services</p>
          <h2>Construction, planning, and civil execution support.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article key={service}>
              <span aria-hidden="true" />
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="band split">
        <div>
          <p className="eyebrow">Why HMT</p>
          <h2>Grounded in local site realities.</h2>
        </div>
        <div className="strengthGrid">
          {strengths.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band workTypes" id="projects">
        <div className="sectionHead">
          <p className="eyebrow">Project Types</p>
          <h2>Built for owners, developers, and promoters.</h2>
        </div>
        <div className="pillGrid">
          {projectTypes.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </div>
      </section>

      <section className="band coverage" id="coverage">
        <div className="sectionHead">
          <p className="eyebrow">Service Area</p>
          <h2>Focused on Pune city and Pune district.</h2>
        </div>
        <div className="coveragePanel">
          <p>
            HMT supports civil works and construction requirements in Hadapsar,
            Pune city, and project locations across Pune district.
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noreferrer"
          >
            Open Office Location
          </a>
        </div>
      </section>

      <section className="contactBand" id="contact">
        <div className="contactText">
          <p className="eyebrow">Contact</p>
          <h2>Discuss civil work or construction requirements in Pune.</h2>
          <address>
            <strong>Hemant Maruti Tambe</strong>
            <span>Managing Director, HMT</span>
            <span>Off. No. 10, Panchwati Complex</span>
            <span>Near Vaibhav Theatre, Hadapsar</span>
            <span>Pune 411028</span>
          </address>
          <div className="contactActions">
            <a href="tel:+919595341818">+91 9595341818</a>
            <a
              className="whatsappLink"
              href={`https://wa.me/919595341818?text=${whatsAppMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppMark />
              WhatsApp Now
            </a>
            <a href="tel:+919175251338">+91 9175251338</a>
            <a href="mailto:hemantmarutitambe@gmail.com">
              hemantmarutitambe@gmail.com
            </a>
          </div>
        </div>
        <div className="contactMedia">
          <div className="contactCardText" aria-label="Readable contact card">
            <img src="/hmt-logo.jpeg" alt="HMT Constructing Concepts logo" />
            <strong>Hemant Maruti Tambe</strong>
            <span>Managing Director</span>
            <a href="tel:+919595341818">+91 9595341818</a>
            <a href="tel:+919175251338">+91 9175251338</a>
            <a href="mailto:hemantmarutitambe@gmail.com">
              hemantmarutitambe@gmail.com
            </a>
          </div>
          <iframe
            title="HMT office location on Google Maps"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <figure>
            <img
              src="/hmt-contact-card.jpeg"
              alt="HMT printed contact card"
            />
            <figcaption>Reference card image</figcaption>
          </figure>
        </div>
      </section>

      <footer>
        <div>
          <span>HMT Hemant Maruti Tambe</span>
          <span>Constructing Concepts</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#top">Home</a>
          <a href="#profile">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#coverage">Coverage</a>
          <a href="#contact">Contact</a>
          <a href="/sitemap.xml">Sitemap</a>
        </nav>
      </footer>
    </main>
  );
}
