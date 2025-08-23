import Project1 from "../assets/Project1.webp";

export default function Projects() {
    return (
        <div className="bg-transparent-light">
            <h1 data-aos="fade-right" data-aos-delay="400" className="text-center text-black p-5">Proyectos</h1>
            <div className="d-flex flex-wrap justify-content-center gap-5 p-4">
                <div data-aos="fade-right" data-aos-delay="400">
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${Project1})` }}
                    >
                        <div className="textBox">
                            <p className="text head">Proyecto 1</p>
                            <span>Web Application</span>
                            <p className="text price">React • Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="500">
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${Project1})` }}
                    >
                        <div className="textBox">
                            <p className="text head">Proyecto 1</p>
                            <span>Web Application</span>
                            <p className="text price">React • Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="600">
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${Project1})` }}
                    >
                        <div className="textBox">
                            <p className="text head">Proyecto 1</p>
                            <span>Web Application</span>
                            <p className="text price">React • Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
