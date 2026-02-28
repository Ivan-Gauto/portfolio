import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      year: "2023 - Actualidad",
      title: "Desarrollador Freelance",
      description: "Creación de sistemas de gestión y automatización con IA.",
    },
    {
      year: "2022",
      title: "Hackathon Corrientes",
      description:
        "Proyecto de detección temprana de incendios con datos climáticos.",
    },
    {
      year: "2021",
      title: "Estudiante - Taller II",
      description:
        "Desarrollo de aplicaciones de escritorio con C# y WinForms.",
    },
  ];

  return (
    <div
      id="experiencia"
      className="text-white container min-vh-100 d-flex flex-column justify-content-center pt-5"
    >
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-center mb-5"
          >
            Experiencia
          </h1>

          <div className="timeline position-relative border-start border-2 border-light">
            {experiences.map((exp, i) => (
              <div key={i} className="mb-5 ms-4">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  className="position-absolute bg-light punto-timeline"
                ></div>

                <div data-aos="zoom-in" data-aos-delay="300">
                  <h2 className="fw-light mb-3">{exp.year}</h2>
                  <h3 style={{ color: "lime" }} className="m-0 fw-light">
                    {exp.title}
                  </h3>
                  <p className="text-white m-0">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
