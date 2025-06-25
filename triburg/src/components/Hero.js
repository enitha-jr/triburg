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
              <h2>FABRICS</h2>
              <p>"Soft and durable fabrics for all kinds of uses."</p>
              <a href="https://en.wikipedia.org/wiki/Jellyfish" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--two">
            <div>
              <h2>DENIM</h2>
              <p>"Tough and stylish denim that lasts long."</p>
              <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--three">
            <div>
              <h2>GARMENTS</h2>
              <p>"Well-made clothes for daily wear and style."</p>
              <a href="https://en.wikipedia.org/wiki/Octopus" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--four">

            <div>
              <h2>SCRUBS</h2>
              <p>"Comfortable scrubs designed for everyday work."</p>
              <a href="https://en.wikipedia.org/wiki/Shark" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>

          <div className="swiper-slide swiper-slide--five">
              <div>
              <h2>YARNS</h2>
              <p>"Strong and flexible yarns made for every need."</p>
              <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </main>
  );
}  