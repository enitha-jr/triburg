"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/Youcanbuy.css";

gsap.registerPlugin(ScrollTrigger);

const words = ["Yarns", "Denims", "Fabrics", "Scrubs", "Garments"];

const Youcanbuy = () => {
  useEffect(() => {
    const items = gsap.utils.toArray("ul.dynamic-words li");
    const image = document.getElementById("dynamic-image");

    gsap.set(items, {
      opacity: (i) => (i !== 0 ? 0.2 : 1),
    });

    const dimmer = gsap.timeline()
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

    items.forEach((li) => {
      ScrollTrigger.create({
        trigger: li,
        start: "center center",
        end: "center center",
        onEnter: () => switchImage(li),
        onEnterBack: () => switchImage(li),
      });
    });

    const switchImage = (li) => {
      const newSrc = li.getAttribute("data-image");
      if (!newSrc) return;
    
      const currentSrc = image.getAttribute("src");
      if (!currentSrc.endsWith(newSrc)) {
        gsap.to(image, {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          onComplete: () => {
            image.setAttribute("src", newSrc);
            gsap.to(image, {
              opacity: 1,
              scale: 1,
              duration: 0.3,
            });
          },
        });
      }
    };    
  }, []);

  return (
    <>
      <main data-sync-scrollbar="true" data-animate="true" data-snap="true">
        <section className="content fluid w-1/2">
          <h2>
            <span aria-hidden="true">you can buy&nbsp;</span>
          </h2>
          <ul
            className="dynamic-words"
            aria-hidden="true"
            style={{ "--count": words.length }}
          >
            {words.map((text, i) => (
              <li
                key={i}
                style={{ "--i": i }}
                data-image={`/assets/scrollimages/${text}.jpg`}
              >
                {text}.
              </li>
            ))}
            <li
              style={{ "--i": words.length, height: "6vh", opacity: 0, pointerEvents: "none" }}
              aria-hidden="true"
            ></li>
          </ul>
        </section>

        <section className="image-section">
          <div className="image-display">
            <img
              id="dynamic-image"
              src={`/assets/scrollimages/${words[0]}.jpg`}
              alt={words[0]}
              style={{
                opacity: 1,
                transition: "opacity 0.3s ease, transform 0.3s ease",
                maxWidth: "100%",
                borderRadius: "1rem",
                boxShadow: "0 1rem 2rem rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </section>
      </main>

      <section className="outro-section">
        <h2 className="fluid">end.</h2>
      </section>
    </>
  );
};

export default Youcanbuy;