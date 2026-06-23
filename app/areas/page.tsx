import type { Metadata } from "next";
import Link from "next/link";
import { clusters, serviceAreas } from "@/lib/serviceAreas";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hmtambe.com";

export const metadata: Metadata = {
  title: "Service Areas: Expert Construction & Civil Works Across Pune & PCMC | HMT",
  description:
    "Expert construction and civil works across Pune, PCMC, and surrounding areas. From luxury independent homes to industrial civil projects, we serve every region.",
  keywords: [
    "construction contractor Pune",
    "civil works PCMC",
    "construction services East Pune",
    "residential construction Hadapsar",
    "industrial contractor Hinjewadi",
    "construction contractor near me",
  ],
  openGraph: {
    title: "Service Areas: Expert Construction & Civil Works Across Pune & PCMC",
    description:
      "Expert construction and civil works across Pune, PCMC, and surrounding areas.",
    url: `${siteUrl}/areas`,
    type: "website",
    images: [
      {
        url: "/hmt-logo.jpeg",
        width: 1160,
        height: 676,
        alt: "HMT Service Areas",
      },
    ],
  },
  alternates: {
    languages: {
      "en-IN": `${siteUrl}/areas`,
    },
  },
};

export default function ServiceAreasPage() {
  return (
    <main>
      {/* Header */}
      <section className="band serviceAreasHero" style={{ paddingTop: "100px" }}>
        <div>
          <h1>Expert Construction & Civil Works Across Pune & PCMC</h1>
          <p className="lead">
            Whether you are planning a luxury independent home in the suburbs of Pune or require
            precision civil work for industrial/commercial projects in PCMC, we are your trusted
            partners. With expertise spanning residential, commercial, and industrial sectors, we
            bring proven excellence to every project.
          </p>
        </div>
      </section>

      {/* Area Clusters */}
      {clusters.map((cluster) => {
        const areasInCluster = serviceAreas.filter((area) => area.cluster === cluster.name);
        return (
          <section key={cluster.name} className="band serviceAreaCluster">
            <div className="sectionHead">
              <h2>{cluster.name}</h2>
              <p className="lead">{cluster.description}</p>
            </div>

            <div className="serviceAreaGrid">
              {areasInCluster.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="serviceAreaCard"
                  title={`${area.name} - ${area.description}`}
                >
                  <h3>{area.name}</h3>
                  <p>{area.description}</p>
                  <span className="arrowLink">Learn more →</span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Why Service Areas Matter */}
      <section className="band whyAreasSection">
        <div className="sectionHead">
          <h2>Why Local Expertise Matters</h2>
        </div>
        <div className="twoColumnGrid">
          <article>
            <h3>Local Knowledge</h3>
            <p>
              Deep understanding of building bylaws specific to PMC (Pune Municipal Corporation)
              and PCMC (Pimpri-Chinchwad Municipal Corporation). Our teams navigate local
              regulations efficiently, ensuring smooth project approvals and compliance.
            </p>
          </article>
          <article>
            <h3>Area-Specific Specialization</h3>
            <p>
              Each region presents unique challenges—from terrain and soil composition to weather
              patterns and infrastructure maturity. We adapt our construction methodology to each
              area&apos;s specific requirements.
            </p>
          </article>
          <article>
            <h3>Proven Track Record</h3>
            <p>
              Years of successful projects across all these areas have given us the expertise to
              handle any challenge. Whether Hadapsar&apos;s IT infrastructure needs or traditional
              Kothrud residential projects, we excel in every zone.
            </p>
          </article>
          <article>
            <h3>Trusted Local Partners</h3>
            <p>
              We maintain long-term relationships with material suppliers, skilled labor networks,
              and local authorities across Pune. This network ensures quality, reliability, and
              timely project delivery.
            </p>
          </article>
        </div>
      </section>

      {/* Local Search Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "HMT Hemant Maruti Tambe",
            description: "Construction and Civil Works Contractor",
            url: siteUrl,
            logo: `${siteUrl}/hmt-logo.jpeg`,
            areaServed: serviceAreas.map((area) => ({
              "@type": "City",
              name: area.name,
              region: "Maharashtra",
              country: "India",
            })),
            serviceArea: {
              "@type": "Place",
              name: "Pune and PCMC",
              geo: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "18.5204",
                  longitude: "73.8567",
                },
              },
            },
            priceRange: "$$",
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteUrl}/areas/{search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </main>
  );
}
