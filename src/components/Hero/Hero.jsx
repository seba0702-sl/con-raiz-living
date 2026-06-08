import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        /*muted*/
        loop
        playsInline
        controlsa
        autoPlay
        loop
>
    
        <source src="/videos/presentacion.mp4" type="video/mp4" />
      </video>

      <div className="overlay">
        <h1>Mobiliario para Eventos</h1>

        <p>
          Sillas, mesas y livings para
          eventos sociales y corporativos.
        </p>

        <a
          href="https://wa.me/5491111111111"
          target="_blank"
          rel="noreferrer"
        >
          Solicitar Presupuesto
        </a>
      </div>

    </section>
  );
}