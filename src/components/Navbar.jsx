import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Check login state when component loads
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/signin");
  };
  const handleSignOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container mynav-bar">
        {/* <!-- Logo --> */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          {/* <img
            src=""
            alt="Gyno Care Logo"
            width="35"
            height="35"
            className="me-2"
          /> */}
          <span className="fw-bold">Gyno Care</span>
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <Link className="nav-link home-link" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item me-3">
              <Link className="nav-link" to="/aboutus">
                About us
              </Link>
            </li> */}
            <li className="nav-item me-3">
              <Link className="nav-link" to="/consultation">
                Consultation
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {isLoggedIn ? (
          <button type="button" className="signin" onClick={handleSignOut}>
            Signout
          </button>
          ): (
          <button type="button" className="signin" onClick={handleSignIn}>
            Sign In
          </button>
          )}
        </div>
      </div>
    </nav>
  );
}
