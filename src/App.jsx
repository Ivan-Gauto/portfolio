import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

export default function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false,  
      mirror: true }
    ); // smooth y solo 1 vez
  }, []);

  useEffect(() => {
    import("./gradient.js").then(({ default: Gradient }) => {
      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
    });
  }, []);

  return (
    <div className="bg-black">

      <Navbar />
      <Header />
      <Projects />
    </div>
  );
}
