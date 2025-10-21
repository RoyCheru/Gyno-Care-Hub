import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/users");
      const user = res.data.find(
        (u) =>
          u.email.toLowerCase() === formData.email.toLowerCase() &&
          u.password === formData.password
      );

      if (user) {
        alert("Login successful!");
        
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/"); 
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Signin error:", err);
      setError("Error signing in. Please try again.");
    }
  };

  const handleCreateAccount = () => {
    navigate("/signup"); 
  };
    return (
      <>
        <Navbar />
        <div className="signin-page d-flex align-items-center justify-content-center">
          <div className="signin-card p-4 shadow rounded-4">
            <h2 className="text-center mb-2 fw-bold">
              Welcome to GynoCare Hub
            </h2>
            <p className="text-center text-muted mb-4">
              Sign in to access your personalized health journey
            </p>

            <form onSubmit={handleSignIn}>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label fw-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="passwordInput"
                  className="form-label fw-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="passwordInput"
                  className="form-control"
                  placeholder="Enter password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                />
                <div className="text-end mt-2">
                  <a
                    href="#"
                    className="text-decoration-none text-primary small"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Sign In
              </button>
              {/* OR Divider */}
              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-muted small">Or continue with</span>
                <hr className="flex-grow-1" />
              </div>
              {/* Google Sign In */}
              <div className="d-grid">
                <button className="btn btn-outline-dark d-flex align-items-center justify-content-center gap-2">
                  <FaGoogle />
                  Sign in with Google
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <span className="text-muted">New to GynoCare Hub? </span>
              <button
                onClick={handleCreateAccount}
                className="btn btn-link p-0 text-decoration-none text-primary fw-semibold"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Signin;