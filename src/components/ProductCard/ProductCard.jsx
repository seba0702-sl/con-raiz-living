import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <a
        href={`https://wa.me/5491161489119?text=Consulta ${product.name}`}
      >
        Consultar
      </a>

    </article>
  );
}