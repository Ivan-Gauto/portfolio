import { useState } from "react";
import Project1 from "../assets/Project1.webp";
import Project2 from "../assets/Project2.png";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      title: "G&G Indumentaria",
      tech: [
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
          name: "CodeIgniter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain-wordmark.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
      ],
      image: Project1,
      delay: "200",
      description:
        "Plataforma e-commerce. Incluye autenticación de usuarios, panel de administración, base de datos, carga y gestión del catálogo de productos y carrito de compras.",
      link: "http://e-commerce-gauto-ivan.page.gd/",
    },
    {
      id: 2,
      title: "Analizador de señales y espectros",
      tech: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        },
        {
          name: "Replit",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/replit/replit-original.svg",
        },
      ],
      image: Project2,
      delay: "300",
      description:
        "Analizador de señales y espectros para poder comprender la composicion de las señales en el dominio del tiempo, la frecuencia y el ancho de banda",
      link: "#",
    },
  ];

  return (
    <div
      id="proyectos"
      className="container min-vh-100 d-flex flex-column justify-content-center"
    >
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h1 data-aos="fade-right" className="text-center text-white mb-5">
            Proyectos
          </h1>

          <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
            {projectData.map((project) => (
              <div
                key={project.id}
                data-aos="fade-right"
                data-aos-delay={project.delay}
              >
                <div
                  className="card"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="textBox">
                    <p className="text-white">{project.title}</p>

                    <div className="d-flex justify-content-center gap-3 mb-3">
                      {project.tech.map((t, index) => (
                        <img
                          key={index}
                          src={t.icon}
                          alt={t.name}
                          title={t.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <h2 style={{ color: "lime", margin: 0 }}>
              {selectedProject.title}
            </h2>

            <p
              className="text-white mb-4 mt-4"
              style={{
                fontSize: "1.1rem",
                fontWeight: "300",
                lineHeight: "1.6",
              }}
            >
              {selectedProject.description}
            </p>

            <div className="d-flex gap-3 mb-4">
              {selectedProject.tech.map((t, index) => (
                <img
                  key={index}
                  src={t.icon}
                  alt={t.name}
                  title={t.name}
                  style={{ width: "35px", height: "35px" }}
                />
              ))}
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noreferrer"
              className="ui-btn px-0"
              style={{
                fontSize: "1.2rem",
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              <span>Ver proyecto</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
