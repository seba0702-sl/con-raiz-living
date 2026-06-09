import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/presentacion.mp4" type="video/mp4" />
      </video>

      <div className="overlay">
        <h1>Mobiliario para Eventos</h1>

        <p>
          Sillas, mesas y livings para
          eventos sociales y corporativos.
        </p>

        
      </div>

    </section>
  );
}