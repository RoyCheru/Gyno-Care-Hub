import React from "react";
import { FaGoogle } from "react-icons/fa";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Signup() {
  const navigate = useNavigate();
  const handleSignInRedirect = () => {
    navigate("/signin");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
          alert("Please fill in all fields");
          return;
        }
        try {
      
      const res = await axios.post("http://localhost:5000/users", formData);

      if (res.status === 201) {
        alert("Account created successfully!");
        navigate("/signin");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error creating account. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex align-items-center justify-content-center signup-page min-vh-100">
        <div
          className="card shadow p-4"
          style={{ width: "480px", borderRadius: "12px" }}
        >
          <div className="text-center mb-4">
            <h2>Create Your Account</h2>
            <p className="text-muted">
              Join GynoCare Hub and start your wellness journey
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Sign Up
            </button>
          </form>

          
          <div className="d-grid gap-2 mt-4">
            <p className="text-center mt-2 mb-0">
              Already have an account?{" "}
              <button
                onClick={handleSignInRedirect}
                className="btn btn-link p-0 text-decoration-none text-primary fw-semibold"
              >
                Sign In
              </button>
            </p>
          </div>

          
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted small">Or continue with</span>
            <hr className="flex-grow-1" />
          </div>

         
          <div className="d-grid">
            <button className="btn btn-outline-dark d-flex align-items-center justify-content-center gap-2">
              <FaGoogle />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}