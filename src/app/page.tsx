import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CursorDot from "@/components/CursorDot";
import ScrollFx from "@/components/ScrollFx";

export default function Home() {
  return (
    <>
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
