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
      <section>
        <h2>Nuestros Productos</h2>
      </section>

      <section>
        <h2>Galería</h2>
      </section>

      <section>
        <h2>Contacto</h2>
      </section>
    </>
  );
}