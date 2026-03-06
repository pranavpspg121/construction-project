const Location = () => {
  return (
    <section className="location-section py-5">
      <div className="container">
        
        {/* ===== TITLE ===== */}
        <div className="text-center mb-5">
          <h1 className="location-title">
            <span className="line"></span>
            <span className="text-warning mx-2">OUR</span>
            <span className="fw-bold">LOCATION</span>
            <span className="line"></span>
          </h1>
        </div>

        <div className="row align-items-center">

          {/* LEFT - MAP */}
          <div className="col-lg-7 mb-4">
            <div className="map-container">
              <iframe
                title="Stronghold Location"
                src="https://www.google.com/maps?q=Chevayur,Calicut&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT - CONTACT DETAILS */}
          <div className="col-lg-5">
            <div className="location-box p-4">
              <h4 className="text-warning mb-3">Stronghold Construction</h4>

              <p>
                Chevayur, Mavoor Road<br />
                Calicut - 673019<br />
                Kerala, India
              </p>

              <p>
                <strong>Phone:</strong> +91 9744551129
              </p>

              <p>
                <strong>Email:</strong> contact@strongholdcon.com
              </p>

              <a
                href="https://www.google.com/maps?q=Chevayur,Calicut"
                target="_blank"
                rel="noopener noreferrer"
                className="location-btn"
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;