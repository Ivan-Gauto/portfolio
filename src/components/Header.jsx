import { useEffect, useState } from "react";

export default function Header() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="hero d-flex mb-5 text-black flex-column justify-content-center align-items-center text-center vh-100">
            <h1 className="hero-title m-0">
                <span
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="hero-primary d-inline-block"
                    style={{
                        transform: `translateY(${offset * 0.1}px)`,
                        transition: "transform 0.1s linear",
                        fontSize: "12vw",
                    }}
                >
                    Ivan Gauto.
                    <br />
                    Desarrollador.
                </span>

            </h1>
            <p className="hero-subtitle" style={{
                transform: `translateY(${offset * 0.15}px)`,
                transition: "transform 0.1s linear",
            }}>Front-End • React • UI</p>
        </header>
    );
}
