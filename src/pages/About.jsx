import "./About.css";

export default function About() {
  return (
    <section className="about-container">
      <div className="about-content">

        <h1>Quiénes Somos</h1>

        <p className="about-intro">
          Hola, soy Flor 🤎
        </p>

        <p>
          Quiero contarte un poquito sobre mí y sobre cómo nació
          <strong> Con Raíz Living</strong>.
        </p>

        <p>
          Siempre me apasionó la decoración y la creación de espacios
          que inviten a compartir momentos especiales con familia y amigos.
          Con el tiempo, esa pasión se transformó en este proyecto, donde
          puedo expresar mi creatividad y dar vida a ambientes que aportan
          calidez, armonía y personalidad a cada encuentro.
        </p>

        <p>
          Detrás de cada detalle hay dedicación, ilusión y mucho amor por
          lo que hago. Mi objetivo es acompañarte para que tu evento sea
          único, cuidando cada rincón para que vos y tus invitados puedan
          disfrutarlo al máximo.
        </p>

        <p>
          Gracias por estar acá y acompañarme en este comienzo. 🌿✨
        </p>

        <img
          src="/galeria/nosotros.jpeg"
          alt="Flor - Con Raíz Living"
          className="about-image"
        />

      </div>
    </section>
  );
}