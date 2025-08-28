export default function Experience() {
  const experiences = [
    {
      year: "2023 - Actualidad",
      title: "Desarrollador Freelance",
      description: "Creación de sistemas de gestión y automatización con IA."
    },
    {
      year: "2022",
      title: "Hackathon Corrientes",
      description: "Proyecto de detección temprana de incendios con datos climáticos."
    },
    {
      year: "2021",
      title: "Estudiante - Taller II",
      description: "Desarrollo de aplicaciones de escritorio con C# y WinForms."
    }
  ];

  return (
    <div className="text-white container py-5">
      <h1 data-aos="fade-right" data-aos-delay="400" className="text-center mb-5">Experiencia</h1>

      <div className="timeline position-relative border-start border-2 border-light">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-5 ms-4">
            {/* PUNTO */}
            <div data-aos="zoom-in" data-aos-delay="100"
              className="position-absolute bg-light punto-timeline"
            ></div>

            {/* CONTENIDO */}
            <div data-aos="zoom-in" data-aos-delay="300">
              <h2 className="fw-light mb-3">{exp.year}</h2>
              <h3 style={{ color: "lime" }} className="m-0">{exp.title}</h3>
              <p className="text-secondary m-0">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
