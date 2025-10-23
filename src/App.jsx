import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import "./styles/index.css";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from './components/About';
import Services from './components/Services';
//import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Booking from './components/Booking';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/consultation" element={<Booking/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </>
  )
}

export default App
