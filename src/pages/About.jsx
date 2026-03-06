import { 
  FaHardHat, FaBullseye, FaAward, FaUsers, 
  FaMapMarkerAlt, FaBuilding, FaHammer, 
  FaTrophy, FaHandshake, FaTools, FaClock,
  FaArrowRight, FaCheckCircle, FaShieldAlt,
  FaStar, FaRuler, FaCompass, FaHome,
  FaMedal, FaGem, FaCogs, FaTruck,
  FaWrench, FaPaintRoller, FaUserTie,
  FaEye, FaFlag, FaRocket, FaCrosshairs,
  FaDotCircle, FaBullseye as FaTarget
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  // Stats data
  const stats = [
    { number: "100+", label: "Projects Completed", icon: FaHammer },
    { number: "5+", label: "Years Experience", icon: FaClock },
    { number: "95%", label: "Client Satisfaction", icon: FaTrophy },
    { number: "50+", label: "Skilled Workers", icon: FaUsers }
  ];

  // Team members data
  const teamMembers = [
    { 
      name: "Bijeesh", 
      role: "Lead Engineer", 
      description: "Overseeing technical excellence and project execution",
      icon: FaUserTie
    },
    { 
      name: "Abhin", 
      role: "Project Engineer", 
      description: "Specializing in structural design and quality control",
      icon: FaRuler
    },
    { 
      name: "Shibu", 
      role: "Operations Manager", 
      description: "Managing day-to-day operations and client relations",
      icon: FaCogs
    }
  ];

  // Values data
  const values = [
    {
      icon: FaHardHat,
      title: "Quality First",
      description: "We never compromise on materials or workmanship"
    },
    {
      icon: FaHandshake,
      title: "Trust & Integrity",
      description: "Building relationships on transparency and honesty"
    },
    {
      icon: FaTools,
      title: "Skilled Execution",
      description: "Experienced team delivering precision in every project"
    },
    {
      icon: FaShieldAlt,
      title: "Safety Focused",
      description: "Maintaining highest safety standards on all sites"
    }
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background Pattern */}
        <div className="position-absolute w-100 h-100 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6 text-white">
              <div className="mb-4">
                <span className="badge bg-warning text-dark px-3 py-2 mb-3">EST. 2019</span>
                <h1 className="display-3 fw-bold mb-3">
                  Building More Than
                  <span className="text-warning"> Structures</span>
                </h1>
                <p className="lead text-white-50 mb-4">
                  We build dreams, relationships, and communities with unwavering 
                  commitment to quality and excellence.
                </p>
                <div className="d-flex gap-3">
                  <Link to="/contact" className="btn btn-warning btn-lg px-4 fw-semibold">
                    Start Your Project
                  </Link>
                  <Link to="/projects" className="btn btn-outline-light btn-lg px-4">
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="position-relative">
                <div className="bg-warning rounded-circle p-5 opacity-10" 
                     style={{ width: '400px', height: '400px', margin: '0 auto' }}>
                  <FaHardHat size={200} className="text-warning position-absolute top-50 start-50 translate-middle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* ===== STATS SECTION ===== */}
<section className="py-5 border-bottom bg-light">
  <div className="container">
    <div className="row g-4">
      {stats.map((stat, index) => (
        <div key={index} className="col-md-3 col-6">
          <div className="text-center">
            <stat.icon size={30} className="text-warning mb-3" />
            <h2 className="fw-bold mb-1 display-5 text-dark">{stat.number}</h2>
            <p className="text-muted mb-0">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ===== OUR STORY ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="pe-lg-4">
                <h6 className="text-warning text-uppercase fw-semibold mb-3">Our Journey</h6>
                <h2 className="display-5 fw-bold mb-4">From Family Roots to Industry Trust</h2>
                <p className="lead mb-4">
                  Stronghold Construction began as a small family-driven initiative with a simple belief: 
                  build with integrity, and success will follow.
                </p>
                <div className="mb-4">
                  <div className="d-flex gap-3 mb-3">
                    <FaCheckCircle className="text-warning flex-shrink-0 mt-1" size={20} />
                    <p className="text-muted mb-0">
                      <strong>5+ years</strong> of delivering exceptional construction projects across residential and commercial sectors
                    </p>
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <FaCheckCircle className="text-warning flex-shrink-0 mt-1" size={20} />
                    <p className="text-muted mb-0">
                      <strong>100+ successful projects</strong> completed with unwavering attention to detail
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <FaCheckCircle className="text-warning flex-shrink-0 mt-1" size={20} />
                    <p className="text-muted mb-0">
                      <strong>Family values</strong> guiding our business relationships and project execution
                    </p>
                  </div>
                </div>
                <Link to="/about/journey" className="btn btn-outline-warning btn-lg">
                  Read Our Full Story <FaArrowRight className="ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="bg-warning p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center" 
                         style={{ minHeight: '200px' }}>
                      <FaHardHat size={50} className="text-dark mx-auto mb-3" />
                      <h5 className="fw-bold mb-0">Quality</h5>
                      <p className="small mb-0 text-dark">Uncompromising standards</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-dark p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center">
                      <FaUsers size={50} className="text-warning mx-auto mb-3" />
                      <h5 className="fw-bold text-white mb-0">Family</h5>
                      <p className="small text-white-50 mb-0">Values driven</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bg-light p-4 rounded-4">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h5 className="fw-bold mb-1">Trusted by 50+ Clients</h5>
                          <p className="text-muted mb-0">Building lasting relationships</p>
                        </div>
                        <div className="col-4">
                          <div className="d-flex justify-content-end">
                            <div className="bg-warning rounded-circle p-3">
                              <FaHandshake size={30} className="text-dark" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION SECTION ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Vision Card */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-lg hover-card">
                <div className="card-body p-5 text-center">
                  <div className="bg-warning bg-opacity-10 rounded-circle p-4 d-inline-flex mb-4">
                    <FaEye size={60} className="text-warning" />
                  </div>
                  <h2 className="fw-bold mb-4">Our Vision</h2>
                  <p className="lead text-muted mb-4">
                    To be the most trusted and innovative construction partner, 
                    setting new standards in quality, safety, and customer satisfaction 
                    across the region.
                  </p>
                  <div className="mt-4">
                    <Link to="/about/vision" className="btn btn-warning btn-lg px-4">
                      Read Our Vision <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-lg hover-card">
                <div className="card-body p-5 text-center">
                  <div className="bg-warning bg-opacity-10 rounded-circle p-4 d-inline-flex mb-4">
                    <FaFlag size={60} className="text-warning" />
                  </div>
                  <h2 className="fw-bold mb-4">Our Mission</h2>
                  <p className="lead text-muted mb-4">
                    To deliver exceptional construction projects that exceed expectations, 
                    through skilled craftsmanship, innovative solutions, and unwavering 
                    commitment to our core values.
                  </p>
                  <div className="mt-4">
                    <Link to="/about/mission" className="btn btn-warning btn-lg px-4">
                      Read Our Mission <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Focus Areas - Using FaDotCircle instead of FaTarget */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card border-0 bg-dark text-white">
                <div className="card-body p-5">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <h3 className="fw-bold mb-3">What Drives Us Forward</h3>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center gap-2">
                            <FaDotCircle className="text-warning" />
                            <span>Quality Excellence</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center gap-2">
                            <FaDotCircle className="text-warning" />
                            <span>Customer Satisfaction</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center gap-2">
                            <FaDotCircle className="text-warning" />
                            <span>Innovation & Growth</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center gap-2">
                            <FaDotCircle className="text-warning" />
                            <span>Sustainability</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                      <FaRocket size={80} className="text-warning opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-warning text-uppercase fw-semibold mb-3">What We Stand For</h6>
            <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Principles that guide every project, decision, and relationship
            </p>
          </div>

          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="bg-warning bg-opacity-10 rounded-circle p-3 d-inline-block mb-4">
                      <value.icon size={35} className="text-warning" />
                    </div>
                    <h5 className="fw-bold mb-3">{value.title}</h5>
                    <p className="text-muted mb-0">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-8">
              <h6 className="text-warning text-uppercase fw-semibold mb-3">Leadership</h6>
              <h2 className="display-5 fw-bold mb-3">Meet The Team Behind Stronghold</h2>
            </div>
            <div className="col-md-4 text-md-end">
              <Link to="/about/leaders" className="btn btn-link text-warning fw-semibold text-decoration-none">
                Meet All Team <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 shadow-sm h-100 hover-card">
                  <div className="card-body text-center p-4">
                    <div className="bg-warning bg-opacity-10 rounded-circle p-4 d-inline-flex mb-4">
                      <member.icon size={50} className="text-warning" />
                    </div>
                    <h4 className="fw-bold mb-1">{member.name}</h4>
                    <p className="text-warning fw-semibold mb-3">{member.role}</p>
                    <p className="text-muted mb-0">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h6 className="text-warning text-uppercase fw-semibold mb-3">Why Choose Us</h6>
              <h2 className="display-5 fw-bold mb-4">We Don't Just Build, We Create Lasting Impressions</h2>
              <p className="lead text-muted mb-4">
                With years of experience and a commitment to excellence, we've earned our reputation 
                as one of the most trusted construction companies in the region.
              </p>
              
              <div className="row g-3">
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <FaStar className="text-warning flex-shrink-0" />
                    <span className="fw-semibold">Premium Materials</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <FaStar className="text-warning flex-shrink-0" />
                    <span className="fw-semibold">Expert Craftsmanship</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <FaStar className="text-warning flex-shrink-0" />
                    <span className="fw-semibold">On-Time Delivery</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <FaStar className="text-warning flex-shrink-0" />
                    <span className="fw-semibold">Competitive Pricing</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Link to="/about/why" className="btn btn-warning btn-lg px-4">
                  Discover Our Difference
                </Link>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="bg-dark p-5 rounded-4 text-white">
                <FaBuilding size={60} className="text-warning mb-4" />
                <h4 className="fw-bold mb-3">Ready to Start Your Project?</h4>
                <p className="text-white-50 mb-4">
                  Whether it's residential or commercial construction, we have the expertise 
                  to bring your vision to life.
                </p>
                <Link to="/contact" className="btn btn-outline-warning">
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS TO ALL PAGES ===== */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/about/journey" className="btn btn-outline-warning">Our Journey</Link>
                <Link to="/about/vision" className="btn btn-outline-warning">Vision</Link>
                <Link to="/about/mission" className="btn btn-outline-warning">Mission</Link>
                <Link to="/about/leaders" className="btn btn-outline-warning">Leadership</Link>
                <Link to="/about/why" className="btn btn-outline-warning">Why Us</Link>
                <Link to="/about/location" className="btn btn-outline-warning">Location</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION CTA ===== */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="d-flex align-items-center gap-3 mb-3 mb-md-0">
                        <FaMapMarkerAlt size={50} className="text-warning" />
                        <div>
                          <h3 className="fw-bold mb-2">Visit Our Office</h3>
                          <p className="text-muted mb-0">
                            We're conveniently located and ready to discuss your construction needs
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <Link to="/about/location" className="btn btn-warning btn-lg px-4">
                        Find Us <FaArrowRight className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 text-white">
              <h2 className="display-5 fw-bold mb-3 text-dark">Ready to Build Your Dream Project?</h2>
              <p className="lead mb-0 text-dark opacity-75">
                Let's discuss your construction needs and bring your vision to life
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link to="/contact" className="btn btn-dark btn-lg px-5 py-3 fw-semibold">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;