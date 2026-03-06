import { useNavigate } from "react-router-dom";

const ServiceCard = ({ image, icon, title, description, features }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate("/contact", {
      state: { selectedService: title }
    });
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="service-card h-100">

        {/* Image Section */}
        <div className="service-img">
          <img src={image} alt={title} />
        </div>

        <div className="p-4">

          <div className="service-icon mb-3">
            {icon}
          </div>

          <h5 className="fw-bold mb-3">{title}</h5>

          <p className="service-desc">{description}</p>

          {/* Features List */}
          <ul className="service-features">
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button
            className="select-btn w-100 mt-3"
            onClick={handleSelect}
          >
            Select Service
          </button>

        </div>
      </div>
    </div>
  );
};

export default ServiceCard;