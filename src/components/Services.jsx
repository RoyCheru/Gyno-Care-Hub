import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUsers, faBookOpen, faVideo, faVial, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FaHeadset } from "react-icons/fa";

function Services() {
  return (
    <>
      <section className="services py-5">
<div className="container">
   {/* <!-- Section Title --> */}
    <div className="text-center mb-5">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        GynoCare Hub offers a comprehensive suite of services designed 
        to address your gynecological health needs with privacy and care.
      </p>
    </div>
    {/* <!-- Services Grid --> */}
     <div className="row text-center">
      {/* <!-- Chat Support --> */}
      <div className="col-md-4 mb-4">
        <div className="card service-card h-100">
          <div className="card-body">
            <div className="icon-wrapper mb-3">
              <FontAwesomeIcon icon={faMessage} />
            </div>
            <h5 className="card-title">Chat Support</h5>
            <p className="card-text">Get immediate answers to your gynecological concerns with our AI-powered chat assistant.</p>
          </div>
        </div>
      </div>
      {/* <!-- Community Forum --> */}
      <div className="col-md-4 mb-4">
        <div className="card service-card h-100">
          <div className="card-body">
            <div className="icon-wrapper mb-3">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h5 className="card-title">Community Forum</h5>
            <p className="card-text">Connect with others, share experiences, and find support in our moderated community.</p>
          </div>
        </div>
      </div>
      {/* <!-- Blog & Resources --> */}
      <div className="col-md-4 mb-4">
        <div className="card service-card h-100">
          <div className="card-body">
            <div className="icon-wrapper mb-3">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <h5 className="card-title">Blog & Resources</h5>
            <p className="card-text">Access expert articles, testimonials, and evidence-based information on women's health.</p>
          </div>
        </div>
      </div>

    </div>
    <div className="row text-center">
      {/* <!-- Virtual Consultation --> */}
      <div className="col-md-4 mb-4">
        <div className="card service-card h-100">
          <div className="card-body">
            <div className="icon-wrapper mb-3">
              <FontAwesomeIcon icon={faVideo} />
            </div>
            <h5 className="card-title">Virtual Consultation</h5>
            <p className="card-text">Book private video consultations with certified gynecologists from the comfort of home.</p>
          </div>
        </div>
      </div>
      {/* <!-- Self-Test Kits --> */}
      <div className="col-md-4 mb-4">
        <div className="card service-card h-100">
          <div className="card-body">
            <div className="icon-wrapper mb-3">
              <FontAwesomeIcon icon={faVial} />
            </div>
            <h5 className="card-title">Self-Test Kits</h5>
            <p className="card-text">Order discreet, easy-to-use home testing kits with professional lab analysis.</p>
          </div>
        </div>
      </div>
      {/* <!-- Contact Support --> */}
      <div className="col-md-4 mb-4">
        <div className="card service-card h-100">
          <div className="card-body">
            <div className="icon-wrapper mb-3">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <h5 className="card-title">Contact Support</h5>
            <p className="card-text">Reach our dedicated support team through multiple channels for personalized assistance.</p>
          </div>
        </div>
      </div>
     </div>
     </div>
    </section>

    </>
    );
}
export default Services;