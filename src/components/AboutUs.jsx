import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./AboutUs.css";
import Navbar from "./Navbar";

function AboutUs(){
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>This is about page</h1>
        </div>
      </>
    );
}
export default AboutUs;