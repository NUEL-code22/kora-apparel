function About() {
  return (
    <section className="about-page">
      <div className="page-header">
        <h2>About Kora Apparel</h2>
        <p>Redefining contemporary wardrobe essentials through local craftsmanship.</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Our Story</h3>
          <p>
            Founded in 2023 in Ibadan, Kora Apparel began with a simple goal: to create 
            durable, stylish clothing that celebrates Nigerian textile heritage while fitting 
            seamlessly into a modern global wardrobe.
          </p>
        </div>

        <div className="about-card">
          <h3>What We Do</h3>
          <p>
            We design and produce small-batch streetwear, tailored linen pieces, and 
            hand-dyed outerwear in partnership with local artisans and tailors.
          </p>
        </div>

        <div className="about-card">
          <h3>Mission & Vision</h3>
          <p>
            <strong>Mission:</strong> Deliver high-quality, ethically made clothing at fair prices.<br />
            <strong>Vision:</strong> Become West Africa’s leading sustainable contemporary fashion house.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;