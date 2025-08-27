import { useEffect, useState } from "react";

export default function Header() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="text-white container">
      
      {/* Anima el título al entrar */}
      <div className="text-start" data-aos="fade-up" data-aos-delay="150">
        <div style={{
          transform: `translateX(${-offset * 0.1}px)`,
          transition: "transform 0.1s linear",
        }}>
          <h1 className="m-0">Ivan Gauto</h1>
          <h1 className="typing" style={{ color: "lime" }}> Desarrollador</h1>
        </div>

      </div>

      <div className="" data-aos="fade-up" data-aos-delay="300">
        <p
          className="hero-subtitle text-start text-wrap border p-4"
          style={{
            transform: `translateX(${offset * 0.1}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          Soy Ivan Gauto, un experimentado desarrollador especializado en sistemas de gestion <br />
          y automatizaciones con inteligencia artificial. Explora mis proyectos!
        </p>
      </div>

    </header>
  );
}
