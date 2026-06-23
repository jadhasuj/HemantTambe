import type { Metadata } from "next";
import Link from "next/link";
import { getAreaBySlug, serviceAreas } from "@/lib/serviceAreas";
import { notFound } from "next/navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hmtambe.com";

export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = getAreaBySlug(params.slug);

  if (!area) {
    return {
      title: "Area Not Found",
    };
  }

  return {
    title: `Construction Contractor in ${area.name} | Expert Civil Works | HMT`,
    description: `${area.description} Professional construction and civil work services in ${area.name}. Specializing in ${area.specialization}. Contact HMT for reliable construction solutions.`,
    keywords: [
      `construction contractor ${area.name}`,
      `civil works ${area.name}`,
      `home construction ${area.name}`,
      `commercial construction ${area.name}`,
      `building contractor in ${area.name}`,
    ],
    openGraph: {
      title: `Construction & Civil Works in ${area.name} | HMT`,
      description: area.description,
      url: `${siteUrl}/areas/${area.slug}`,
      type: "website",
      images: [
        {
          url: "/hmt-logo.jpeg",
          width: 1160,
          height: 676,
          alt: `${area.name} Construction Services`,
        },
      ],
    },
    alternates: {
      languages: {
        "en-IN": `${siteUrl}/areas/${area.slug}`,
      },
    },
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = getAreaBySlug(params.slug);

  if (!area) {
    notFound();
  }

  const relatedAreas = serviceAreas
    .filter((a) => a.cluster === area.cluster && a.slug !== area.slug)
    .slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="band areaHero" style={{ paddingTop: "100px" }}>
        <div>
          <p className="eyebrow">{area.cluster}</p>
          <h1>Construction & Civil Works in {area.name}</h1>
          <p className="lead">{area.description}</p>
        </div>
      </section>

      {/* Area Overview */}
      <section className="band areaOverview">
        <div className="splitPanels">
          <article className="infoPanel">
            <h2>About {area.name}</h2>
            <p>
              {area.description} Our specialized expertise in {area.name} spans {area.specialization.toLowerCase()}.
            </p>
            <h3>Target Demographics</h3>
            <p>{area.targetDemographics}</p>
          </article>

          <article className="infoPanel">
            <h2>Our Specialization</h2>
            <p>{area.specialization}</p>
            <h3>Terrain & Environmental Factors</h3>
            <p>{area.terrainInfo}</p>
          </article>
        </div>
      </section>

      {/* Common Projects */}
      <section className="band commonProjectsSection">
        <div className="sectionHead">
          <h2>Common Projects in {area.name}</h2>
          <p>Our expertise encompasses a wide range of construction types in this area:</p>
        </div>
        <ul className="bulletList panelBulletList">
          {area.commonProjects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </section>

      {/* Unique Characteristics */}
      <section className="band uniqueCharacteristics">
        <div className="sectionHead">
          <h2>{area.name}: What Makes It Unique</h2>
        </div>
        <div>
          <h3>Local Character</h3>
          <p>{area.uniqueCharacteristics}</p>

          <h3>Why We Excel Here</h3>
          <p>
            With deep knowledge of {area.name}'s infrastructure, local regulations, and architectural
            preferences, we deliver projects that blend seamlessly with the local environment while
            meeting modern construction standards. Our teams understand the specific challenges this
            area presents—from soil composition to weather patterns to local approval processes.
          </p>
        </div>
      </section>

      {/* Service Integration */}
      <section className="band serviceIntegration">
        <div className="sectionHead">
          <h2>Complete Construction Solution for {area.name}</h2>
        </div>
        <div className="featureGrid">
          <article>
            <h3>Land Assessment & Preparation</h3>
            <p>
              Thorough site analysis, soil testing, and land preparation tailored to {area.name}'s specific
              terrain and environmental factors.
            </p>
          </article>
          <article>
            <h3>Foundation & Structure</h3>
            <p>
              RCC work and structural design optimized for {area.name}'s soil composition and climatic
              conditions.
            </p>
          </article>
          <article>
            <h3>Project Management</h3>
            <p>
              Real-time updates, budget tracking, and milestone management ensuring your project stays on
              track.
            </p>
          </article>
          <article>
            <h3>Quality Assurance</h3>
            <p>
              Premium materials, modern construction standards, and rigorous quality checks at every stage.
            </p>
          </article>
          <article>
            <h3>Local Compliance</h3>
            <p>
              Deep understanding of PMC/PCMC bylaws and local regulations specific to {area.name}.
            </p>
          </article>
          <article>
            <h3>Timeline Excellence</h3>
            <p>
              Established local supplier networks and skilled labor teams ensure timely project delivery.
            </p>
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="band contactSection">
        <div className="sectionHead">
          <h2>Ready to Start Your Project in {area.name}?</h2>
          <p>
            Contact us today to discuss your construction needs. Our team has extensive experience
            delivering excellence in {area.name}.
          </p>
        </div>
        <div className="contactActions">
          <a
            href="tel:+919595341818"
            title="Call +91 9595341818"
            style={{ marginTop: "24px" }}
          >
            📞 +91 9595341818
          </a>
          <a
            href={`https://wa.me/919595341818?text=Hi! I'm interested in construction services in ${area.name}`}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp us"
            style={{ marginTop: "24px" }}
          >
            💬 WhatsApp Us
          </a>
        </div>
      </section>

      {/* Related Areas */}
      {relatedAreas.length > 0 && (
        <section className="band relatedAreas">
          <div className="sectionHead">
            <h2>Other Areas We Serve in {area.cluster}</h2>
          </div>
          <div className="serviceAreaGrid">
            {relatedAreas.map((related) => (
              <Link
                key={related.slug}
                href={`/areas/${related.slug}`}
                className="serviceAreaCard"
              >
                <h3>{related.name}</h3>
                <p>{related.description}</p>
                <span className="arrowLink">View details →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back to Areas */}
      <section className="band" style={{ textAlign: "center", paddingBottom: "60px" }}>
        <Link href="/areas" className="heroActions">
          <a style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            ← Back to All Service Areas
          </a>
        </Link>
      </section>

      {/* LocalBusiness Schema for this specific area */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "HMT - Construction in " + area.name,
            description: area.description,
            url: `${siteUrl}/areas/${area.slug}`,
            logo: `${siteUrl}/hmt-logo.jpeg`,
            areaServed: {
              "@type": "City",
              name: area.name,
              region: "Maharashtra",
              country: "India",
            },
            service: area.commonProjects.map((project) => ({
              "@type": "Service",
              name: project,
              provider: {
                "@type": "LocalBusiness",
                name: "HMT",
              },
            })),
            priceRange: "$$",
          }),
        }}
      />
    </main>
  );
}
