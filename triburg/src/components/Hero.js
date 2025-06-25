"use client";

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '../styles/hero.css';

// import redCloth from "../assets/images/redCloth.jpg";
// import yarns from "../assets/images/yarns.jpg";
// import hanger from "../assets/images/hanger.jpg";
// import denim from "../assets/images/denim.jpg";
// import scrubs from "../assets/images/scrubs.jpg";


export default function Hero() {
  useEffect(() => {
    new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 1200, 
        disableOnInteraction: false, 
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <main>
      <div className ="w-4xl"> 
        <h1>RSK WEAVERS</h1>
        <div className="hr-span">
          <hr />
          <span>TRIBURG</span>
        </div>
        <p>Discover a world of quality yarns, fabrics, and innovation. 
          From couture to bulk manufacturing — Your trusted gateway to premium fabrics.</p>
      </div>

      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide--one">
            <div>
              <h2>Jellyfish</h2>
              <p>Jellyfish and sea jellies are gelatinous medusa-phase members of the phylum Cnidaria.</p>
              <a href="https://en.wikipedia.org/wiki/Jellyfish" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--two">
            <div>
              <h2>Seahorse</h2>
              <p>Found in shallow tropical and temperate waters. Four species are found in Pacific waters.</p>
              <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--three">
            <div>
              <h2>Octopus</h2>
              <p>Octopuses inhabit coral reefs, deep oceans, and intertidal zones. Most grow fast and live short.</p>
              <a href="https://en.wikipedia.org/wiki/Octopus" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--four">

            <div>
              <h2>Shark</h2>
              <p>Sharks are cartilaginous fish with gill slits, pectoral fins, and are powerful marine predators.</p>
              <a href="https://en.wikipedia.org/wiki/Shark" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--five">
              <div>
              <h2>Dolphin</h2>
              <p>Dolphins live in warm or cold waters and feed on fish, squid, and occasionally marine mammals.</p>
              <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </main>
  );
}  