import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function About() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/");
  };

  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row pt-4 align-items-center">
            {/* <!-- LEFT: Image --> */}
            <div className="col-md-6">
              <img
                src="/assets/images/about/medical4.jpg"
                className="about-img"
                alt="Medical professional"
              />
            </div>
            {/* <!-- RIGHT: Content --> */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body pt-0">
                  <h2 className="about-title mb-4">About GynoCare Hub</h2>
                  <p className="card-text mb-4">
                    Founded by women's health specialists and patient advocates,
                    GynoCare Hub combines technology with compassion to bring
                    quality gynecological care to you.
                  </p>
                  <p className="card-text ">
                    Our mission is to empower women through accessible
                    healthcare resources, supportive community, and professional
                    guidance - creating a world where no woman feels alone in
                    her health journey.
                  </p>

                  <div className="d-flex flex-wrap justify-content-between mt-4">
                    <div className="feature-box d-flex align-items-center mb-4">
                      <div className="icon-wrapper me-3">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      <div>
                        <h5 className="mb-1">Expert Care</h5>
                        <p className="mb-0">Board-certified gynecologists</p>
                      </div>
                    </div>

                    <div className="feature-box d-flex align-items-center mb-4">
                      <div className="icon-wrapper me-3">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      <div>
                        <h5 className="mb-1">Safe Space</h5>
                        <p className="mb-0">Judgment-free support</p>
                      </div>
                    </div>

                    <div className="feature-box d-flex align-items-center mb-4">
                      <div className="icon-wrapper me-3">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      <div>
                        <h5 className="mb-1">Accessible</h5>
                        <p className="mb-0">24/7 available resources</p>
                      </div>
                    </div>

                    <div className="feature-box d-flex align-items-center mb-4">
                      <div className="icon-wrapper me-3">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      <div>
                        <h5 className="mb-1">Evidence-Based</h5>
                        <p className="mb-0">Up-to-date information</p>
                      </div>
                    </div>
                    {/* <!-- Learn More Button --> */}
                    <div className="text-center mt-3">
                      <button
                        className="learn-more-btn"
                        type="button"
                        onClick={handleLearnMore}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
