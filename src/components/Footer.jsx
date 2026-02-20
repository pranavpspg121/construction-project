import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light pt-5">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">BuildPro</h4>
            <p className="text-muted">
              Building excellence, one project at a time. Your trusted partner in construction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none text-dark">About</Link></li>
              <li><Link to="/services" className="text-decoration-none text-dark">Services</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-dark">Contact</Link></li>
              <li><Link to="/blog" className="text-decoration-none text-dark">Blog</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-4 mb-4">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 mt-3">
              <FaFacebook size={22} />
              <FaInstagram size={22} />
              <FaLinkedin size={22} />
            </div>
          </div>

        </div>

        <div className="text-center py-3 border-top">
          <small>© 2026 BuildPro. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

