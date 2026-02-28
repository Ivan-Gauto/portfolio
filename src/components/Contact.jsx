import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeelnjpb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="container my-5 py-5" id="contacto">
      <h1 data-aos="fade-right" className="text-white text-center mb-5">
        Contacto
      </h1>

      <div
        className="contact-wrapper mx-auto"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input type="text" id="name" name="name" required />
            <label htmlFor="name">Nombre</label>
          </div>

          <div className="input-group">
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-group">
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Asunto</label>
          </div>

          <div className="input-group">
            <textarea id="message" name="message" rows="4" required></textarea>
            <label htmlFor="message">Mensaje</label>
          </div>

          <div className="d-flex flex-column align-items-center mt-5">
            <button type="submit" className="ui-btn">
              <span>
                {status === "success" ? "¡Enviado!" : "Enviar Mensaje"}
              </span>
            </button>

            {status === "success" && (
              <p
                className="mt-3 mb-0"
                style={{
                  color: "lime",
                  fontWeight: "300",
                  letterSpacing: "1px",
                }}
              >
                Mensaje enviado con éxito. ¡Te responderé pronto!
              </p>
            )}

            {status === "error" && (
              <p
                className="text-danger mt-3 mb-0"
                style={{ fontWeight: "300" }}
              >
                Hubo un problema al enviar el mensaje. Intenta nuevamente.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
