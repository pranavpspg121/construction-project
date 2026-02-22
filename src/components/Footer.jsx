import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-4">

      <div className="container">
        <div className="row">

          {/* ===== CONTACT INFO ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-4">CONTACT US</h5>

            <p>
              <FaMapMarkerAlt className="text-warning me-2" />
              Stronghold Construction<br />
              Chevayur, Mavoor Road<br />
              Calicut - 673017
            </p>

            <p>
              <FaEnvelope className="text-warning me-2" />
              contact@strongholdcon.com
            </p>

            <p>
              <FaPhoneAlt className="text-warning me-2" />
              +91 9447019259
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">
              <div className="social-box"><FaFacebookF /></div>
              <div className="social-box"><FaInstagram /></div>
              <div className="social-box"><FaYoutube /></div>
              <div className="social-box"><FaLinkedinIn /></div>
            </div>
          </div>

          {/* ===== QUICK ACCESS ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-4">QUICK ACCESS</h5>

            <ul className="list-unstyled footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">What We Do</Link></li>
              <li><Link to="/projects">Our Projects</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* ===== CONTACT FORM ===== */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">GET IN TOUCH WITH US</h5>

            <form>
              <div className="mb-3">
                <input type="text" placeholder="Name" className="form-control footer-input" />
              </div>

              <div className="mb-3">
                <input type="text" placeholder="Phone" className="form-control footer-input" />
              </div>

              <div className="mb-3">
                <input type="email" placeholder="Email" className="form-control footer-input" />
              </div>

              <div className="mb-3">
                <textarea placeholder="Message" rows="3" className="form-control footer-input"></textarea>
              </div>

             <button type="submit" className="footer-btn">

                SUBMIT NOW
              </button>
            </form>
          </div>

        </div>

        <hr className="border-secondary mt-4" />

        <div className="text-center">
          <small>© 2026 Stronghold Construction. All Rights Reserved.</small>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


