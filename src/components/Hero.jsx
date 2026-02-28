import { useEffect, useState } from "react";
import fotoPerfil from "../assets/perfil.jpeg"; // Asegúrate de tener tu foto aquí
import "./Hero.css";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // 1. Usamos section, flex-column y justify-content-center para el centrado vertical perfecto
    <section
      className="hero-section text-white container min-vh-100 d-flex flex-column justify-content-center"
      id="inicio"
    >
      <div className="row w-100 mx-0">
        {/* 2. Este es el contenedor mágico que limita el ancho y lo centra (igual que en Herramientas) */}
        <div className="col-12 col-lg-11 mx-auto px-0">
          <div className="row w-100 align-items-center mx-0">
            {/* Columna Izquierda: Textos y Botón */}
            <div className="col-lg-7 text-start text-lg-start mt-5 mt-lg-0 order-2 order-lg-1">
              <div data-aos="fade-up" data-aos-delay="150">
                <div
                  style={{
                    transform: `translateX(${-offset * 0.1}px)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  <h1 className="display-2 fw-bold m-0">Iván Gauto</h1>
                  <h2 className="typing mb-4" style={{ color: "lime" }}>
                    Desarrollador de Software
                  </h2>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <p
                  className="hero-subtitle text-wrap p-4"
                  style={{
                    transform: `translateX(${offset * 0.1}px)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  Soy un experimentado desarrollador especializado en sistemas
                  de gestión <br className="d-none d-md-block" />y
                  automatizaciones con inteligencia artificial. ¡Explora mis
                  proyectos!
                </p>
              </div>

              {/* Botón de CV con el mismo efecto parallax sutil */}
              <div
                className="mt-5"
                data-aos="fade-up"
                data-aos-delay="450"
                style={{
                  transform: `translateX(${-offset * 0.05}px)`,
                  transition: "transform 0.1s linear",
                }}
              >
                <a
                  href="/CV_Ivan_Gauto.pdf"
                  download="CV_Ivan_Gauto.pdf"
                  data-aos="fade-up"
                  data-aos-delay="450"
                  className="ui-btn justify-content-start p-0"
                  style={{ textDecoration: "none" }}
                >
                  <span>Descargar CV</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Foto de Perfil */}
            <div
              className="col-lg-5 text-center order-1 order-lg-2 mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={fotoPerfil} alt="Iván Gauto" className="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
