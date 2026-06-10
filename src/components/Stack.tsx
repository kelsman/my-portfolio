import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section className="stack" id="stack" aria-labelledby="stack-heading">
      <h2 className="sr-only" id="stack-heading">
        Stack
      </h2>
      <div className="section-head" data-reveal>
        <span className="mono">
          <span className="tick">03</span> / Stack
        </span>
        <span className="mono">Tools of the trade</span>
      </div>
      <div className="stack-grid" data-reveal>
        {stack.map((cell) => (
          <div className="stack-cell" key={cell.heading}>
            <h3>{cell.heading}</h3>
            <ul>
              {cell.items.map((item) => (
                <li key={item.label} className={item.dim ? "dim" : undefined}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
