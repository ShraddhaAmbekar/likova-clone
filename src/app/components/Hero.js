"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css"

export default function Hero() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".hero-letter",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.5,
          stagger: 0.1,
        }
      )
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
        },
        "-=0.5"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section">

      <div className="hero-background">
        <video
          autoPlay
          muted
          playsInline
          loop
          poster="https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/69610a0c261bf5a0d9012dd6_hero%203%20%281%29_poster.0000000.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/69610a0c261bf5a0d9012dd6_hero%203%20%281%29_mp4.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      

      {/* <div className="hero-content"> 

        <h1 ref={titleRef} className="hero-title">
          {"SHIVSHIVAYE".split("").map((letter, index) => (
            <span className="letter-mask" key={index}>
              <span className="hero-letter">
                {letter}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero-right" ref={contentRef}>

          <h2>
            holistic luxury in
            <br />
            perfect harmony
          </h2>

          <p>
            Welcome to SHIVSHIVAYE PVT LTD, where timeless
            design, wellness-focused living and cultural
            enrichment converge in order to create an
            unparalleled sanctuary of elegance and serenity.
          </p>

          <a href="#about" className="scroll-link">
            SCROLL ↓
          </a>

        </div>

       </div> */}
    </section>
  );
}