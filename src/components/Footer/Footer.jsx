import "./Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Con Raíz Living</p>

      <div className="footer-social">
        <a
          href="https://www.instagram.com/conraizliving?igsh=MTF6dDMwNnp6NXBkOQ=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/5491161489119"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}