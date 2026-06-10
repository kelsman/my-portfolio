"use client";

import { useState } from "react";

const projects = [
  {
    index: "/001",
    title: "Climate Intelligence Platform",
    year: "BuildingMinds · 2025—",
    desc: (
      <>
        I own the data layer behind ESG dashboards that enterprise real-estate
        investors use to make capital decisions. Designed a BFF that fuses{" "}
        <strong>
          warehouse-scale Snowflake queries with live digital-twin telemetry
        </strong>{" "}
        into fast, consistent reads across 15+ reporting domains — from carbon
        stranding risk to EU Taxonomy compliance.
      </>
    ),
    stat: { num: "15+", lbl: "Reporting domains" },
    tags: ["NestJS", "Kafka", "Snowflake", "Nx"],
  },
  {
    index: "/002",
    title: "Energy Rental Marketplace",
    year: "Reeddi · 2022—25",
    desc: (
      <>
        Owned backend architecture end-to-end for an energy rental marketplace:
        decomposed a monolith into{" "}
        <strong>event-driven microservices on Kubernetes</strong>, designed the
        migration so the business never stopped, and mentored the team that ran
        it. The platform absorbed 30% more transaction volume within six months
        — without scaling headcount.
      </>
    ),
    stat: { num: "+30%", lbl: "Transaction volume" },
    tags: ["Kubernetes", "RabbitMQ", "AWS EKS", "Redis"],
  },
  {
    index: "/003",
    title: "Dual-Entity Booking System",
    year: "Bossof · 2023—24",
    desc: (
      <>
        Built a two-sided marketplace where every booking touches money — so I
        designed for failure first.{" "}
        <strong>
          Idempotent payment flows and a resilient Stripe integration cut
          failed transactions by 40%
        </strong>
        , while real-time analytics kept operations honest from day one of
        launch.
      </>
    ),
    stat: { num: "−40%", lbl: "Transaction failures" },
    tags: ["MongoDB", "Stripe", "CI/CD"],
  },
  {
    index: "/004",
    title: "Core Banking Solutions",
    year: "Digicore · 2022—23",
    desc: (
      <>
        Platform engineering for regulated finance: secure core-banking
        services where correctness is non-negotiable. Built the{" "}
        <strong>shared component library that became the standard</strong>{" "}
        across retail and commercial banks — multiplying every team&apos;s
        output by 200+ engineering hours a month.
      </>
    ),
    stat: { num: "200h", lbl: "Saved monthly" },
    tags: ["Angular", "NestJS", "Node.js"],
  },
];

export default function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="work" id="work">
      <div className="section-head" data-reveal>
        <span className="mono">
          <span className="tick">01</span> / Selected Work
        </span>
        <span className="mono">2021 — 2026</span>
      </div>
      <div className="work-list">
        {projects.map((p, i) => (
          <article
            key={p.index}
            className={`work-item${openIndex === i ? " open" : ""}`}
            data-reveal
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="work-item-top">
              <span className="work-index">{p.index}</span>
              <h2 className="work-title">{p.title}</h2>
              <span className="work-year">{p.year}</span>
            </div>
            <div className="work-body">
              <p className="work-desc">{p.desc}</p>
              <div className="work-facts">
                <div className="work-stat">
                  <div className="num">{p.stat.num}</div>
                  <div className="lbl">{p.stat.lbl}</div>
                </div>
                <div className="work-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
