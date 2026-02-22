const Mission = () => {
  return (
    <section className="mission-section py-5">
      <div className="container">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-5">
          <h1 className="mission-title">
            <span className="line"></span>
            <span className="text-warning mx-2">OUR</span>
            <span className="fw-bold">MISSION</span>
            <span className="line"></span>
          </h1>
        </div>

        {/* ===== MISSION CARD ===== */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="mission-wrapper d-flex flex-column flex-md-row">

              {/* LEFT YELLOW BOX */}
              <div className="mission-yellow p-5">
                <h4 className="mb-3 fw-bold">Our Mission</h4>
                <p>
                  At Stronghold Construction, our mission is to deliver
                  high-quality construction solutions with honesty,
                  transparency, and precision. We aim to exceed client
                  expectations through strong planning, engineering
                  expertise, and seamless execution.
                </p>
              </div>

              {/* RIGHT DARK BOX */}
              <div className="mission-dark p-5">
                <h4 className="mb-3">What Drives Us</h4>
                <p>
                  Led by Bijeesh and Abhin (Engineers) and Shibu
                  (Operations & All-in-All), Stronghold operates
                  with a family-first mindset. With 5 years of
                  experience, we are committed to safety,
                  innovation, and delivering projects that stand
                  strong for generations.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;