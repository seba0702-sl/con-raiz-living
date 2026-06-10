import Hero from "../components/Hero/Hero";
import Beneficios from "../components/Beneficios/Beneficios";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="seo-text">
        <h2>Ambientación para eventos sociales y corporativos</h2>

        <p>
          En Con Raíz Living ofrecemos alquiler de mobiliario,
          livings, mesas, sillas y elementos decorativos para
          eventos sociales, empresariales y celebraciones especiales.
        </p>
      </section>
      <Beneficios/>
      <section className="home-links">
  <a href="/productos">Nuestros Productos</a>
  <a href="/galeria">Galería</a>
  <a href="/contacto">Contacto</a>
</section>
    </>
  );
}