
import "./Beliefs.css";

export default function Beliefs() {
  return (
    <section className="our-beliefs" id="beliefs">
      <div className="beliefs-container">

        {/* Section image */}
        <div className="our-beliefs-img">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881bfdfb07f671238f951_beliefs-img--mob.avif"
            />

            <img
              src="https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881c0bd19ffb64b94f142_beliefs-img--d.avif"
              alt="Modern living room with a large gray sectional sofa, textured throw blanket, glass side table and wall-mounted television"
              className="beliefs-image"
              loading="lazy"
            />
          </picture>
        </div>

        {/* Caption */}
        <div className="our-beliefs-caption">
          (OUR BELIEFS)
        </div>

        {/* Main heading */}
        <div className="our-beliefs-heading">
          <h2>
            A VISION OF
            <br />
            INSPIRED LIVING
          </h2>
        </div>

        {/* Description */}
        <div className="our-beliefs-text-box">
          <p>
            To inspire and nurture an enriched lifestyle that harmonizes
            beauty, wellness, and cultural connection, creating a sanctuary
            that feels like home.
          </p>
        </div>

      </div>
    </section>
  );
}
