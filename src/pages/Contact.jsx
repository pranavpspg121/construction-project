import { useLocation } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const location = useLocation();
  const selectedService = location.state?.selectedService || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSuccess(true);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    } else {
      setErrors(validationErrors);
      setSuccess(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="contact-box">

        <h2 className="mb-4">CONTACT US</h2>

        <form onSubmit={handleSubmit} noValidate>

          {selectedService && (
            <div className="mb-3">
              <label className="form-label">Selected Service</label>
              <input
                type="text"
                className="form-control"
                value={selectedService}
                readOnly
              />
            </div>
          )}

          {/* Name */}
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Message */}
          <div className="mb-3">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {success && (
            <div className="alert alert-success mt-3">
              Message sent successfully!
            </div>
          )}

        </form>
      </div>
      
    </div>
    
    
  );
};

export default Contact;