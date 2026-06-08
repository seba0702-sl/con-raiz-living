import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        CON RAÍZ LIVING
        <img src="/logo.png" alt="Con Raíz Living" />
      </div>
      

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/galeria">Galería</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}