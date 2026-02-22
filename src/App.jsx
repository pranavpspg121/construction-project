import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/about/Journey";
import Vision from "./pages/about/Vision";
import Mission from "./pages/about/Mission";
import Leaders from "./pages/about/Leaders";
import Why from "./pages/about/Why";
import Location from "./pages/about/Location";

import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/journey" element={<Journey />} />
        <Route path="/about/vision" element={<Vision />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/leaders" element={<Leaders />} />
        <Route path="/about/why" element={<Why />} />
        <Route path="/about/location" element={<Location />} />

        <Route path="/services/*" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


