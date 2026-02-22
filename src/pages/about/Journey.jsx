const Journey = () => {
  return (
    <section className="py-5 journey-section">
      <div className="container">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-5">
          <h1 className="fw-bold journey-title">
            <span className="text-dark">STRONGHOLD</span>{" "}
            <span className="text-warning">THE JOURNEY SO FAR</span>
          </h1>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="journey-content mx-auto">
          <p>
            Stronghold Construction began as a small family-driven initiative
            built on trust, dedication, and a passion for quality workmanship.
            What started as a close-knit team with strong values has grown into
            a reliable construction partner known for commitment and integrity.
          </p>

          <p>
            Over the past <strong>5 years</strong>, Stronghold has successfully
            delivered residential and commercial projects with precision and
            professionalism. Our journey has been guided by technical expertise,
            transparent communication, and client satisfaction.
          </p>

          <p>
            The company is led by <strong>Bijeesh (Engineer)</strong> and{" "}
            <strong>Abhin (Engineer)</strong>, who bring strong technical
            knowledge and field experience, along with{" "}
            <strong>Shibu (Operations & All-in-All)</strong>, who ensures smooth
            coordination and execution across all projects.
          </p>

          <p>
            From small beginnings to becoming a trusted name in construction,
            Stronghold continues to grow while staying true to its core values:
            quality, safety, reliability, and a family-like commitment to every
            client we serve.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Journey;

