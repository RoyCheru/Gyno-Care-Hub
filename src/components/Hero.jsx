import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Hero.css";

function Hero() {
    const navigate = useNavigate();
    const handleGetStarted = () => {
      navigate("/signin");
    }
    const handleBookConsultation = () => {
      navigate("/consultation");
    }
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT: Text content */}
            <div className="col-md-6 ">
              <div
                className="card text-card"
                style={{
                  maxWidth: "540px",
                  background: "none",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <h1 className="card-title">
                    Compassionate Gynaecological Care
                    <br />
                    at Your Fingertips
                  </h1>
                  <p className="card-text">
                    Access expert resources, community support, and professional
                    care whenever you need it — all in one trusted hub.
                  </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn started me-3 px-4"
                      onClick={handleGetStarted}
                    >
                      GET STARTED
                    </button>
                    <button
                      type="button"
                      className="btn consultation px-4"
                      onClick={handleBookConsultation}
                    >
                      BOOK CONSULTATION
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="col-md-6">
              <div className="image-wrapper">
                <img
                  src="/assets/images/hero-img.png"
                  alt="Female medical professional"
                  className="hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
