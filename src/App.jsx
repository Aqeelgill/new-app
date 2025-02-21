import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      
      <Footer />
    </HashRouter>
  );
}

export default App;
