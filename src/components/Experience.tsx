import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-heading">
      <h2 className="sr-only" id="experience-heading">
        Experience
      </h2>
      <div className="section-head" data-reveal>
        <span className="mono">
          <span className="tick">02</span> / Experience
        </span>
        <span className="mono">Full timeline</span>
      </div>
      <div data-reveal>
        {experience.map((xp) => (
          <div className="xp-row" key={`${xp.role}-${xp.co}`}>
            <span className="xp-when">{xp.when}</span>
            <span className="xp-role">
              {xp.role} <span className="co">{xp.co}</span>
            </span>
            <span className="xp-note">{xp.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
