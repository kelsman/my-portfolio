"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { stackMarquee } from "@/lib/data";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________";

function scramble(el: HTMLElement) {
  const original = el.dataset.scrambleText || el.textContent || "";
  el.dataset.scrambleText = original;
  let frame = 0;
  const total = 26;
  const timer = window.setInterval(() => {
    frame++;
    const progress = frame / total;
    let out = "";
    for (let i = 0; i < original.length; i++) {
      if (i / original.length < progress || original[i] === " ") {
        out += original[i];
      } else {
        out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
    }
    el.textContent = out;
    if (frame >= total) {
      el.textContent = original;
      window.clearInterval(timer);
    }
  }, 32);
  return timer;
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const timers: number[] = [];
    const mm = gsap.matchMedia(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 1.1 },
      });
      tl.from(".hero-name .word", { yPercent: 110, autoAlpha: 0, stagger: 0.12 })
        .from(".hero-sub > *", { y: 36, autoAlpha: 0, stagger: 0.1 }, 0.35)
        .from(".hero-meta > *", { y: 24, autoAlpha: 0, stagger: 0.08 }, 0.5)
        .from(".marquee", { autoAlpha: 0, duration: 0.8 }, 0.6);

      // seamless marquee loop — track content is rendered twice
      const marqueeTween = gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 38,
        repeat: -1,
      });

      root.current
        ?.querySelectorAll<HTMLElement>("[data-scramble]")
        .forEach((el, i) => {
          timers.push(
            window.setTimeout(() => timers.push(scramble(el)), 300 + i * 140)
          );
        });

      return () => {
        marqueeTween.kill();
      };
    });

    return () => {
      timers.forEach((t) => {
        window.clearTimeout(t);
        window.clearInterval(t);
      });
      mm.revert();
    };
  }, []);

  return (
    <section className="hero" ref={root}>
      <div className="hero-meta">
        <div className="mono" data-scramble>
          Senior Software Engineer
        </div>
        <div className="mono" data-scramble>
          Lagos, Nigeria
        </div>
        <div className="mono">
          <span className="tick">●</span> Open to interesting problems
        </div>
      </div>
      <h1 className="hero-name" aria-label="Kelvin Oigiangbe">
        <div className="row">
          <span className="word">Kelvin</span>
          <span className="word asterisk">✦</span>
        </div>
        <div className="row">
          <span className="word outline">Oigiangbe</span>
        </div>
      </h1>
      <div className="hero-sub">
        <p>
          I design distributed systems that stay simple under pressure —
          event-driven pipelines, multi-tenant platforms, and APIs trusted with
          real money, real-time data, and real users.
        </p>
        <div className="scroll-cue">
          <span className="dot"></span>
          <span className="mono">Scroll</span>
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...stackMarquee, ...stackMarquee].map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
