import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.find(
      (user) => user.email === formData.email
    );

    if (userExists) {
      setError("User already registered");
      return;
    }

    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="container py-5">
      <h2>Register</h2>

      <form onSubmit={handleSubmit} className="mt-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        {error && (
          <div className="text-danger mb-3">{error}</div>
        )}

        <button className="btn btn-warning w-100">
          Register
        </button>

      </form>
    </div>
  );
};

export default Register;