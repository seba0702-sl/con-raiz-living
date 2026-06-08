import "./ContactForm.css";

export default function ContactForm() {
  return (
    <form className="contact-form">

      <input
        type="text"
        placeholder="Nombre"
      />

      <input
        type="tel"
        placeholder="Teléfono"
      />

      <input
        type="date"
      />

      <textarea
        placeholder="Contanos sobre tu evento"
      />

      <button>
        Enviar
      </button>

    </form>
  );
}