import { site } from "@/lib/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CursorDot from "@/components/CursorDot";
import ScrollFx from "@/components/ScrollFx";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: "2026-06-10",
  mainEntity: {
    "@type": "Person",
    name: site.name,
    jobTitle: site.jobTitle,
    description: site.description,
    email: `mailto:${site.email}`,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "Distributed Systems",
      "Platform Architecture",
      "Event-Driven Architecture",
      "Node.js",
      "NestJS",
      "TypeScript",
      "Golang",
      "Apache Kafka",
      "Kubernetes",
      "PostgreSQL",
      "Snowflake",
      "AWS",
    ],
    worksFor: {
      "@type": "Organization",
      name: "BuildingMinds",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid-overlay" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <CursorDot />
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
      <ScrollFx />
    </>
  );
}
