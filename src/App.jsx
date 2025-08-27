import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    // Simula tiempo de carga de la página
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Muestra solo el loader
  }

  return (
    <div className="bg-black">
      <Navbar />
      <Header />
      <Experience />
      <Projects />
    </div>
  );
}
