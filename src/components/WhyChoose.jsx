import { FaShieldAlt, FaUsers, FaAward } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Why Choose STRONGHOLD?</h2>
        <p className="text-muted mb-5">
          We deliver excellence through commitment, expertise, and innovation.
        </p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-4 shadow-sm h-100">
              <FaShieldAlt size={35} className="text-warning mb-3" />
              <h5>Safety First</h5>
              <p className="text-muted">
                OSHA-compliant practices and rigorous safety protocols.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm h-100">
              <FaUsers size={35} className="text-warning mb-3" />
              <h5>Expert Team</h5>
              <p className="text-muted">
                Certified professionals with decades of experience.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm h-100">
              <FaAward size={35} className="text-warning mb-3" />
              <h5>Quality Assured</h5>
              <p className="text-muted">
                Premium materials and craftsmanship guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
