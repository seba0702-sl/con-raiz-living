import "./GalleryGrid.css";

export default function GalleryGrid({ images }) {
  return (
    <section className="gallery-grid">

      {images.map((img) => (
        <img
          key={img.id}
          src={img.image}
          alt=""
        />
      ))}

    </section>
  );
}