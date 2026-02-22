import { FaHardHat, FaBullseye, FaAward, FaUsers, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";




const About = () => {
  return (
    <>
      {/* ===== HERO ABOUT HEADER ===== */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h1 className="fw-bold">About Stronghold</h1>
          <p className="text-muted mt-3">
            Building excellence with trust, dedication, and strong foundations.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6 mb-4">
              <div className="about-image-box shadow rounded p-5 text-center">
                <FaHardHat size={70} className="text-warning mb-3" />
                <h5>Strong Foundations</h5>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Our Story</h2>
              <p className="text-muted">
                Stronghold Construction started as a small family-driven initiative
                built on trust, dedication, and passion for quality construction.
                What began as a close-knit team has grown into a reliable
                construction partner.
              </p>
              <p className="text-muted">
                With over <strong>5 years of experience</strong>, we have built
                strong relationships and delivered projects with commitment,
                precision, and integrity.
              </p>
            </div>

          </div>
        </div>
      </section>

       {/* ===== 6 CARDS SECTION ===== */}
      <section className="py-5 dotted-bg">
        <div className="container">
          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card p-4 h-100 shadow-sm">
                <FaHardHat size={35} className="text-warning mb-3" />
                <h5>Stronghold – Our Journey</h5>
                <p className="text-muted">
                  Started as a family initiative, now growing steadily with
                  5+ years of experience.
                </p>
                   <Link to="/about/journey" className="text-warning fw-bold text-decoration-none">
  Read More →
</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card p-4 h-100 shadow-sm">
                <FaBullseye size={35} className="text-warning mb-3" />
                <h5>Our Vision</h5>
                <p className="text-muted">
                  To deliver quality-driven and safe construction solutions.
                </p>
                 <Link to="/about/vision" className="text-warning fw-bold text-decoration-none">
  Read More →
</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card p-4 h-100 shadow-sm">
                <FaAward size={35} className="text-warning mb-3" />
                <h5>Our Mission</h5>
                <p className="text-muted">
                  Execute every project with professionalism and integrity.
                </p>
                  <Link to="/about/Mission" className="text-warning fw-bold text-decoration-none">
  Read More →
</Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-4">
              <div className="card p-4 h-100 shadow-sm">
                <FaUsers size={35} className="text-warning mb-3" />
                <h5>Leadership</h5>
                <p className="text-muted">
                  Led by experienced engineers and strong operations support.
                </p>
                  <Link to="/about/leaders" className="text-warning fw-bold text-decoration-none">
  Read More →
</Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-4">
              <div className="card p-4 h-100 shadow-sm">
                <FaBuilding size={35} className="text-warning mb-3" />
                <h5>Why Stronghold</h5>
                <p className="text-muted">
                  Skilled execution and reliable delivery across projects.
                </p>
                  <Link to="/about/Why" className="text-warning fw-bold text-decoration-none">
  Read More →
</Link>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-md-4">
              <div className="card p-4 h-100 shadow-sm">
                <FaMapMarkerAlt size={35} className="text-warning mb-3" />
                <h5>Where To Find Us</h5>
                <p className="text-muted">
                  Reach us for residential and commercial construction needs.
                </p>
                 <Link to="/about/Location" className="text-warning fw-bold text-decoration-none">
  Read More →
</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Who Leads Stronghold</h2>

          <div className="row g-4">
            
            <div className="col-md-4">
              <div className="card p-4 shadow-sm h-100">
                <FaUsers size={35} className="text-warning mb-3" />
                <h5>Bijeesh</h5>
                <p className="text-muted">Engineer</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-4 shadow-sm h-100">
                <FaUsers size={35} className="text-warning mb-3" />
                <h5>Abhin</h5>
                <p className="text-muted">Engineer</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-4 shadow-sm h-100">
                <FaUsers size={35} className="text-warning mb-3" />
                <h5>Shibu</h5>
                <p className="text-muted">Operations & All-in-All</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <div className="row">
            
            <div className="col-md-4">
              <h1 className="text-warning fw-bold">100+</h1>
              <p className="text-muted">Projects Completed</p>
            </div>

            <div className="col-md-4">
              <h1 className="text-warning fw-bold">5+</h1>
              <p className="text-muted">Years Experience</p>
            </div>

            <div className="col-md-4">
              <h1 className="text-warning fw-bold">95%</h1>
              <p className="text-muted">Client Satisfaction</p>
            </div>

          </div>
        </div>
      </section>
      
    </>
  );
};

export default About;

