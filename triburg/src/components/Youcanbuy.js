"use client";

import React, { useEffect } from "react";
import "../styles/Youcanbuy.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Youcanbuy = () => {
  useEffect(() => {
    const items = gsap.utils.toArray("ul li");

    gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

    const dimmer = gsap
      .timeline()
      .to(items.slice(1), {
        opacity: 1,
        stagger: 0.5,
      })
      .to(
        items.slice(0, items.length - 1),
        {
          opacity: 0.2,
          stagger: 0.5,
        },
        0
      );

    ScrollTrigger.create({
      trigger: items[0],
      endTrigger: items[items.length - 1],
      start: "top center",
      end: "bottom center",
      animation: dimmer,
      scrub: 0.2,
    });

    gsap.fromTo(
      document.documentElement,
      {
        "--hue": 0,
      },
      {
        "--hue": 360,
        ease: "none",
        scrollTrigger: {
          trigger: items[0],
          endTrigger: items[items.length - 1],
          start: "top center",
          end: "bottom center",
          scrub: 0.2,
        },
      }
    );
  }, []);

  return (
    <main>
      <section className="content fluid w-1/2">
        <h2>
          <span aria-hidden="true">you can buy&nbsp;</span>
          {/* <span className="sr-only">you can ship things.</span> */}
        </h2>
        <ul aria-hidden="true" style={{ "--count": 11 }}>
          <li style={{ "--i": 0 }}>design.</li>
          <li style={{ "--i": 1 }}>prototype.</li>
          <li style={{ "--i": 2 }}>solve.</li>
          <li style={{ "--i": 3 }}>build.</li>
          <li style={{ "--i": 4 }}>develop.</li>
          <li style={{ "--i": 5 }}>debug.</li>
          <li style={{ "--i": 6 }}>learn.</li>
          <li style={{ "--i": 7 }}>cook.</li>
          <li style={{ "--i": 8 }}>ship.</li>
          <li style={{ "--i": 9 }}>prompt.</li>
          <li style={{ "--i": 10 }}>collaborate.</li>
        </ul>
      </section>
      <section>
        <h2 className="fluid">second section - images</h2>
      </section>
    </main>
  );
};

export default Youcanbuy;