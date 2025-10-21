
import Navbar from "./Navbar";
import Hero from "./Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./About";
import Services from "./Services";
import AboutUs from "./AboutUs";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
        <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default Home;