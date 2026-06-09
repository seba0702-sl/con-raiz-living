import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `
Hola, quiero consultar por un evento.

Nombre: ${nombre}
Teléfono: ${telefono}
Fecha del evento: ${fecha}

Detalles:
${mensaje}
    `;

    const url = `https://wa.me/5491161489119?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />

      <div className="field">
        <label htmlFor="fechaEvento">Fecha del evento</label>

        <input
          id="fechaEvento"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <textarea
        placeholder="Contanos sobre tu evento"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        rows="5"
      />

      <button type="submit">
        Enviar por WhatsApp
      </button>
    </form>
  );
}