import { aboutFacts } from "@/lib/data";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-head" data-reveal>
        <span className="mono">
          <span className="tick">04</span> / About
        </span>
      </div>
      <div className="about-grid" data-reveal>
        <p className="about-lede">
          Fintech, climate tech, marketplaces — different domains, same
          discipline: <em>good systems are designed, not patched.</em> I take
          ambiguous problems, set the architecture, raise the engineers around
          me, and ship platforms that hold up long after launch.
        </p>
        <div className="about-facts">
          {aboutFacts.map((f) => (
            <div className="about-fact" key={f.k}>
              <span className="mono">{f.k}</span>
              <span className="v">{f.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
