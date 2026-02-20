import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-5 text-center bg-light">
      <div className="container">
        <h2 className="fw-bold mb-3">Ready to Start Your Project?</h2>
        <p className="text-muted mb-4">
          Contact us today for a free consultation and quote.
        </p>
        <Link to="/contact" className="btn btn-warning px-4 py-2 fw-bold">
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default CTA;
