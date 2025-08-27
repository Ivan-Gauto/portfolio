import { useEffect, useState } from "react";

export default function Header() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="hero mx-5 d-flex text-white flex-column justify-content-start align-items-start text-center">
            <h1 className="m-0 g-2">
                <span
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="hero-primary d-inline-block" 
                    style={{
                        transform: `translateX(${-offset * 0.15}px)`,
                        transition: "transform 0.1s linear",
                        fontSize: "5vw",
                    }}
                >
                    Ivan Gauto
                    <span className="typing" style={{color: "lime"}}> Desarrollador</span>
                    
                </span>

            </h1>
            <p className="hero-subtitle" style={{
                transform: `translateX(${offset * 0.15}px)`,
                transition: "transform 0.1s linear",
                fontSize: "1.5vw",
            }}>Front-End • React • UI</p>
        </header>
    );
}
