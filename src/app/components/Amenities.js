
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Amenities.css";

gsap.registerPlugin(ScrollTrigger);

const amenitySlides = [
  {
    id: "art",
    title: ["ART", "INSPIRED", "SPACES"],
    description:
      "From artful communal lounges to thoughtfully curated design details, every environment celebrates a rich sense of place.",
    bigImage:
      "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881f24c53d654d7f00751_amenities-img-3--big.avif",
    smallImage:
      "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881f1049ac7d72bb5f66f_amenities-img-3--small.avif",
    bigAlt: "Bright living room with orange sofa and colorful artwork",
    smallAlt: "Interior hallway with wooden ceiling beams and abstract artwork",
  },
  {
    id: "wellness",
    title: ["WELLNESS-", "CENTERED", "AMENITIES"],
    description:
      "From private fitness studios to guided meditation sessions, our amenities are designed to enhance your well-being and foster a sense of harmony.",
    bigImage:
      "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881e61a7e42ff6909d76b_amenities-img-1--big.avif",
    smallImage:
      "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881e6a674c6a8d122c34d_amenities-img-1--small.avif",
    bigAlt: "Modern building corridor with a skylight",
    smallAlt: "Bright gym room with large windows and workout equipment",
  },
  {
    id: "nature",
    title: ["NATURE-", "INFUSED", "RETREATS"],
    description:
      "Garden pathways, quiet courtyards, and softly landscaped outdoor rooms provide moments of calm and the restorative beauty of nature.",
    bigImage:
      "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881ec1f8b80b2102e2e7b_amenities-img-2--big.avif",
    smallImage:
      "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881eb51e7ae892329f6f6_amenities-img-2--small.avif",
    bigAlt: "Modern wooden cabin surrounded by a natural landscape",
    smallAlt: "Person meditating on a patio overlooking a forest",
  },
];

export default function Amenities() {
  const sectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const index = Math.min(
          amenitySlides.length - 1,
          Math.floor(self.progress * amenitySlides.length)
        );

        setActiveSlide(index);
      },
    });

    return () => trigger.kill();
  }, []);

  const currentSlide = amenitySlides[activeSlide];

  return (
    <section className="amenities-section" ref={sectionRef}>
      <div className="amenities-sticky">

        {/* Left content */}
        <div className="amenities-content" key={currentSlide.id}>
          <div className="amenities-progress">
            {amenitySlides.map((slide, index) => (
              <span
                key={slide.id}
                className={index === activeSlide ? "active" : ""}
              />
            ))}
          </div>

          <div className="amenities-copy">
            <h2>
              {currentSlide.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>

            <p>{currentSlide.description}</p>
          </div>
        </div>

        {/* Right overlapping images */}
        <div className="amenities-visuals" key={`images-${currentSlide.id}`}>
          <div className="amenities-image-large">
            <img
              src={currentSlide.bigImage}
              alt={currentSlide.bigAlt}
            />
          </div>

          <div className="amenities-image-small">
            <img
              src={currentSlide.smallImage}
              alt={currentSlide.smallAlt}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
