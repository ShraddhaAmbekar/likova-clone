
"use client";

import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "LUMIÈRE DUPLEX",
    subtitle: "RESIDENCES",
    image:
      "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881b0a57115d8cd3a12c2_livings-img-1--d.avif",
    alt: "Lumière Duplex living room",
  },
  {
    title: "CROWN JEWEL",
    subtitle: "PENTHOUSE",
    image:
      "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881b00e2082f46e0752ce_livings-img-3--d.avif",
    alt: "Crown Jewel penthouse interior",
  },
  {
    title: "AURELIA",
    subtitle: "GARDEN SUITES",
    image:
      "https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881b0422731c7d2c5fcac_livings-img-2--d.avif",
    alt: "Aurelia garden suites",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(1);

  const previousIndex =
    (activeIndex - 1 + projects.length) % projects.length;

  const nextIndex = (activeIndex + 1) % projects.length;

  const visibleProjects = [
    { ...projects[previousIndex], position: "previous", index: previousIndex },
    { ...projects[activeIndex], position: "active", index: activeIndex },
    { ...projects[nextIndex], position: "next", index: nextIndex },
  ];

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="projects" id="projects">
                  <div className="about-caption">
              <div className="h6">(Our Livings)</div>
            </div>

      {/* Active project title */}
      <div className="projects-title">
        <h2>
          <span>{projects[activeIndex].title}</span>
          <span>{projects[activeIndex].subtitle}</span>
        </h2>
       
      </div>
      {/* Horizontal image carousel */}
      <div className="projects-gallery">
        {visibleProjects.map((project) => (
          <button
            type="button"
            key={`${project.index}-${project.position}`}
            className={`project-card ${project.position}`}
            onClick={() => setActiveIndex(project.index)}
            aria-label={`Show ${project.title} ${project.subtitle}`}
          >
            <img src={project.image} alt={project.alt} />
           
            

          </button>

        ))}
          

      </div>

      {/* Carousel controls */}
      <div className="projects-navigation">
        <button
          type="button"
          onClick={goPrevious}
          aria-label="Previous project"
        >
          ←
        </button>

        <div className="projects-dots">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.title}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
              aria-label={`Go to ${project.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next project"
        >
          →
        </button>
      </div>
    </section>
  );
}
