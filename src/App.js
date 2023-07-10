import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from "react-router-dom";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <><Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
