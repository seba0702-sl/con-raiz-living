import "./Beneficios.css";
import {
  FaMoneyBillWave,
  FaTruck,
  FaCouch,
  FaWhatsapp
} from "react-icons/fa";

export default function Beneficios() {
  return (
    <section className="benefits">

      <div className="benefit-card">
        <FaMoneyBillWave />
        <h3>Pagos Flexibles</h3>
        <p>
          Aceptamos transferencia bancaria y efectivo.
        </p>
      </div>

      <div className="benefit-card">
        <FaTruck />
        <h3>Flete y Logística</h3>
        <p>
          Cotizamos el traslado según la ubicación de tu evento.
        </p>
      </div>

      <div className="benefit-card">
        <FaCouch />
        <h3>Ambientación Integral</h3>
        <p>
          Te ayudamos a crear espacios cálidos y únicos.
        </p>
      </div>

      <div className="benefit-card">
        <FaWhatsapp />
        <h3>Atención Personalizada</h3>
        <p>
          Asesoramiento directo por WhatsApp en todo momento.
        </p>
      </div>

    </section>
  );
}