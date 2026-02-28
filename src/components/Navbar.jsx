import "./Navbar.css";

export default function Navbar() {
  return (
    <nav
      className="navbar-dark text-responsive color-black bg-black navbar-expand-lg fixed-top"
      data-bs-theme="light"
    >
      <div className="container-fluid p-3">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mx-auto"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav mx-auto gap-4">
            <a href="#herramientas" className="ui-btn">
              <span> Herramientas </span>
            </a>
            <a href="#experiencia" className="ui-btn">
              <span> Experiencia </span>
            </a>
            <a href="#proyectos" className="ui-btn">
              <span> Proyectos </span>
            </a>
            <a href="#contacto" className="ui-btn">
              <span> Contacto </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
