import "./Gallery.css";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";

export default function Gallery() {
  return (
    <main className="gallery-page">

      <section className="gallery-header">

        <h1>Nuestros Eventos</h1>

        <p>
          Cada encuentro tiene su propia esencia.
          En Con Raíz Living creamos espacios cálidos,
          elegantes y funcionales para que cada celebración
          se convierta en un recuerdo inolvidable.
        </p>

        <p>
          Te invitamos a recorrer algunas de nuestras
          ambientaciones y descubrir cómo transformamos
          cada rincón con mobiliario cuidadosamente seleccionado.
        </p>

      </section>

      <GalleryGrid />

    </main>
  );
}