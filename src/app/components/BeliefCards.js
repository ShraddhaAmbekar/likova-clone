
import "./BeliefCards.css";

const beliefItems = [
  {
    number: "01",
    title: <>HOLISTIC<br />WELL-BEING</>,
    description: <>Spaces designed<br />to nurture the mind, body, and soul.</>,
    position: "belief-card-one",
  },
  {
    number: "02",
    title: <>DISCRETION &<br />EXCLUSIVITY</>,
    description: <>Privacy and personal growth at<br />the forefront.</>,
    position: "belief-card-two",
  },
  {
    number: "03",
    title: <>CULTURAL<br />ENRICHMENT</>,
    description: <>Spaces designed<br />to nurture the mind, body, and soul.</>,
    position: "belief-card-three",
  },
  {
    number: "04",
    title: <>COMMUNITY &<br />CONNECTION</>,
    description: <>Privacy and personal growth at<br />the forefront.</>,
    position: "belief-card-four",
  },
  {
    number: "05",
    title: <>SUSTAINABLE<br />ELEGANCE</>,
    description: <>Luxury that<br />respects our<br />environment.</>,
    position: "belief-card-five",
  },
];

export default function BeliefCards() {
  return (
    <section className="belief-values">

      {/* Background image */}
      <div className="belief-values-background">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881bf041520f6c9ca8770_beliefs-img-2--mob.avif"
          />
          <img
            src="https://cdn.prod.website-files.com/69372e47ab695bf5546b46ec/693881c0f19790d102a7679d_beliefs-img-2--d.avif"
            alt="Modern living room with gray sofas and wooden wall panels"
          />
        </picture>
      </div>

      {/* Dark image overlay */}
      <div className="belief-values-overlay" />

      <div className="belief-values-container">

        {/* Introductory text */}
        <div className="belief-values-text">
          <p>
            At Elyse Residence, we believe that a home is more than a
            physical space — it’s a reflection of your aspirations,
            well-being, and values.
          </p>

          <p>
            Our mission is to immerse you in a lifestyle that balances
            refined aesthetics, architectural excellence, and a
            profound sense of community.
          </p>
        </div>

        {/* Belief cards */}
        <div className="belief-values-grid">
          {beliefItems.map((item) => (
            <div className={`belief-item ${item.position}`} key={item.number}>
              <div className="belief-card">
                <div className="belief-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

              <span className="belief-number">
                ({item.number})
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
