import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar text-responsive color-black bg-transparent navbar-expand-lg border-bottom border-black sticky-top" data-bs-theme="light">
            <div className="container-fluid p-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto gap-5">
                        <button>
                            <span className="button_top">Proyectos</span>
                        </button>
                        <button>
                            <span className="button_top">Sobre mi</span>
                        </button>
                        <button>
                            <span className="button_top">Contacto</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

