"use client";

import { useEffect, useState } from "react";
import { email } from "@/lib/data";

function useLagosTime() {
  const [time, setTime] = useState("LAGOS — WAT");

  useEffect(() => {
    const update = () => {
      try {
        const now = new Date().toLocaleTimeString("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
        });
        setTime(`LAGOS — ${now} WAT`);
      } catch {
        /* noop */
      }
    };
    update();
    const id = window.setInterval(update, 30000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export default function Contact() {
  const time = useLagosTime();
  const [user, domain] = email.split("@");

  return (
    <section className="contact" id="contact">
      <div className="mono-row" data-reveal>
        <span className="mono">
          <span className="tick">05</span> / Contact
        </span>
        <span className="mono">Have a system to build?</span>
      </div>
      <a className="contact-big" href={`mailto:${email}`} data-reveal>
        {user}
        <span className="at">@</span>
        <br />
        {domain}
      </a>
      <div className="contact-foot">
        <span className="mono" suppressHydrationWarning>
          {time}
        </span>
        <div className="contact-links">
          <a href="https://github.com/kelsman" target="_blank" rel="noopener">
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/kelvin-oigiangbe-a78590121/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn ↗
          </a>
          <a href={`mailto:${email}`}>Email ↗</a>
        </div>
        <span className="mono">© 2026 Kelvin Oigiangbe</span>
      </div>
    </section>
  );
}
