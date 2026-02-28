import "./TechCarousel.css";

const row1 = [
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vite",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "CodeIgniter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain-wordmark.svg",
  },
];

const row2 = [
  {
    name: "C++",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C#",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "SQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "npm",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
];

const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

export default function TechCarousel() {
  return (
    // Utilizamos section, d-flex para centrar verticalmente y un alto mínimo de 50vh o 100vh
    <section
      className="container d-flex flex-column justify-content-center py-5 mb-5"
      style={{ minHeight: "50vh" }}
      id="herramientas"
    >
      <div className="row w-100 mx-0">
        <div className="col-12 col-lg-10 mx-auto px-0">
          <h1
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-white text-center mb-5"
          >
            Herramientas
          </h1>

          <div
            className="carousel-container mx-auto"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="carousel-track track-left">
              {duplicatedRow1.map((tech, index) => (
                <div key={`row1-${index}`} className="carousel-item">
                  <img src={tech.src} alt={tech.name} className="tech-logo" />
                </div>
              ))}
            </div>

            <div className="carousel-track track-right mt-4">
              {duplicatedRow2.map((tech, index) => (
                <div key={`row2-${index}`} className="carousel-item">
                  <img src={tech.src} alt={tech.name} className="tech-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
