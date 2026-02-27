import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SideElements from "./components/SideElements";
import Header from "./components/Header";
import TechCarousel from "./components/TechCarousel";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black" style={{ overflowX: "hidden" }}>
      <Navbar />
      <SideElements />
      <Header />
      <TechCarousel />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
