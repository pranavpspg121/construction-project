import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
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

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (!validUser) {
      setError("Invalid email or password");
      return;
    }

    login(validUser);   // 🔥 instant navbar update
    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="container py-5">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="mt-4">

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
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;