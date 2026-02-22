const Vision = () => {
  return (
    <section className="vision-section py-5">
      <div className="container">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-5">
          <h1 className="vision-title">
            <span className="line"></span>
            <span className="text-warning mx-2">OUR</span>
            <span className="fw-bold">VISION</span>
            <span className="line"></span>
          </h1>
        </div>

        {/* ===== VISION CARD ===== */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="vision-wrapper d-flex flex-column flex-md-row">

              {/* LEFT DARK BOX */}
              <div className="vision-dark p-5">
                <h4 className="mb-3">Our Commitment</h4>
                <p>
                  At Stronghold Construction, we are committed to building
                  long-term relationships through quality, transparency,
                  and dedication. Every project reflects our technical
                  expertise and family-driven values.
                </p>
              </div>

              {/* RIGHT YELLOW BOX */}
              <div className="vision-yellow p-5">
                <h4 className="mb-3 fw-bold">Our Vision</h4>
                <p>
                  Stronghold envisions becoming a trusted and respected
                  construction partner by delivering innovative, reliable,
                  and high-quality building solutions. With 5 years of
                  experience and strong leadership from Bijeesh, Abhin,
                  and Shibu, we aim to grow steadily while maintaining
                  our core values of integrity, safety, and excellence.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Vision;
