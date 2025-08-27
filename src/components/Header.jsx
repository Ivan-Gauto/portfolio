import { useEffect, useState } from "react";

export default function Header() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hero container mx-5 d-flex text-white flex-column justify-content-start align-items-start text-center">
      
      {/* Anima el título al entrar */}
      <div data-aos="fade-up" data-aos-delay="150">
        <h1 className="m-0 g-2 mb-3">
          <span
            className="hero-primary d-inline-block"
            style={{
              transform: `translateX(${-offset * 0.1}px)`,
              transition: "transform 0.1s linear",
              fontSize: "4vw",
            }}
          >
            Ivan Gauto
            <span className="typing" style={{ color: "lime" }}> Desarrollador</span>
          </span>
        </h1>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
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
