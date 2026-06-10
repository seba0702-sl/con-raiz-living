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
        <h1>Con Raíz Living</h1>

        <p>
          Mobiliario y ambientación para eventos.
          Creamos espacios cálidos, elegantes y
          llenos de personalidad para momentos inolvidables.
        </p>


      </div>

    </section>
  );
}