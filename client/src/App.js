
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArchitectureDetail from "./pages/ArchitectureDetail";
import FloatingArchitectureDetail from "./components/FloatingArchitectureDetail";
import FloatingContactIcon from "./components/FloatingContactIcon";

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";

/* =========================
   SCROLL PROGRESS BAR
========================= */

function ScrollBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-bar"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

/* =========================
   ROUTES WITH TRANSITIONS
========================= */

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/architecture-detail" element={<ArchitectureDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

/* ========================= */

function App() {
  return (
    <Router>

      <ScrollBar />
      <Navbar />
      <AnimatedRoutes />
      <FloatingArchitectureDetail />
      <FloatingContactIcon />
    </Router>
  );
}

export default App;