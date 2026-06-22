import Image from "next/image";

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
          <Image
            src="/hmt-logo.jpeg"
            alt="HMT Hemant Maruti Tambe logo"
            width={1160}
            height={676}
            priority
          />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#profile">Profile</a>
          <a href="#contact">Contact</a>
        </nav>
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
            <a href="mailto:hemantmarutitambe@gmail.com">Send Email</a>
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

      <section className="band workTypes">
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
            <a href="tel:+919175251338">+91 9175251338</a>
            <a href="mailto:hemantmarutitambe@gmail.com">
              hemantmarutitambe@gmail.com
            </a>
          </div>
        </div>
        <figure>
          <Image
            src="/hmt-contact-card.jpeg"
            alt="HMT contact card with office address and phone numbers"
            width={1160}
            height={676}
          />
          <figcaption>Office contact card</figcaption>
        </figure>
      </section>

      <footer>
        <span>HMT Hemant Maruti Tambe</span>
        <span>Constructing Concepts</span>
      </footer>
    </main>
  );
}
