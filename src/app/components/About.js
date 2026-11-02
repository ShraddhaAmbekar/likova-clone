
import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-info">

        <div className="about-left">

          <div className="about-heading">
            <div className="about-caption">
              <div className="h6">(About)</div>
            </div>

            <div className="h5 ">
              <span className="h5-glare">timeless</span>
              <span className="h5-glare"><strong>design</strong></span>
              <span className="h5-glare">wellness-</span>
              <span className="h5-glare"><strong>focused</strong></span>
              <span><strong>living</strong></span>
            </div>
          </div>

          <div className="about-img">
            <img
              src="https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881a350b370d1b613ff09_about-img--d.avif"
              alt="Modern luxury living room"
              className="img-full-cover"
            />
          </div>

        </div>

        <div className="about-text-box">
          <p className="b1">
            Every element of Elyse Residence reflects a commitment
            to excellence. From the timeless elegance of its
            interiors to its thoughtfully curated amenities, the
            property embodies a holistic approach to luxury living.
          </p>

          <p className="b1">
            Whether you’re seeking a serene retreat, cultural hub,
            or a space that fosters personal growth, Elyse Residence
            offers it all.
          </p>
        </div>

      </div>
    </section>
  );
}
