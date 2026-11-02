
"use client";

import { motion } from "motion/react";
import "./IntroSection.css";
import IdeaBookmark from "./IdeaBookmark";

export default function IntroSection() {
  return (
    <section className="likova-intro" id="about">
      {/* Architectural image */}
      <div className="likova-intro__visual">
        <picture className="likova-intro__picture">
          <source
            srcSet="/assets/images/media/landing/1.intro/building-lights@xxxl.webp?v=1782384571"
            media="(min-width: 1920px)"
          />
          <source
            srcSet="/assets/images/media/landing/1.intro/building-lights@xxl.webp?v=1782384571"
            media="(min-width: 1440px)"
          />
          <source
            srcSet="/assets/images/media/landing/1.intro/building-lights@md.webp?v=1782384571"
            media="(min-width: 768px)"
          />
         
        </picture>

        <div className="likova-intro__image-shade" />
      </div>

      {/* Overlapping caption */}
      <div className="likova-intro__bookmark">
        <p>
          IMPRESSIVE IDEAS.
          <br />
          DARING INSPIRATION.
        </p>

        <span className="likova-intro__number">1</span>
        <IdeaBookmark/>
      </div>

      {/* Main statement */}
     <section className="likova-intro" id="about">
      {/* Main headline */}
      <motion.h2
        className="likova-intro__headline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.035 },
          },
        }}
      >
        {[
          "LIKE A STRIKING WORK OF ART, THIS",
          "BUSINESS CENTER TURNS HEADS AND TRANSFORMS THE CITYSCAPE. LIKOVA",
          "WILL BECOME A LAUNCHING PAD FOR DOZENS OF AMBITIOUS PROJECTS.",
        ].map((line, lineIndex) => (
          <span className="likova-intro__line" key={lineIndex}>
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                className="likova-intro__word"
                key={`${lineIndex}-${wordIndex}`}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h2>

      {/* Floating architectural artwork */}
      <motion.div
        className="likova-intro__artwork"
        initial={{ opacity: 0, y: 28, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
      >
        <img
          src="/likova/architectural-object.webp"
          alt=""
          aria-hidden="true"
        />
      </motion.div>

      {/* Supporting copy */}
      <motion.p
        className="likova-intro__description"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        UNCONVENTIONAL APPROACH, BOLD ARCHITECTURAL FORMS, CUTTING-EDGE
        TECHNOLOGY, AND FUNCTIONALITY OF LIKOVA WILL FACILITATE MOST EFFICIENT
        WORK PROCESS AND QUALITY REST FOR THE EMPLOYEES AND THE GUESTS OF THE
        BUSINESS CENTER, WHILE YOUR BUSINESS WILL GROW, REVEALING NEW
        PARTNERSHIP OPPORTUNITIES.
      </motion.p>
    </section>
    </section>
  );
}
