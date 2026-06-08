import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}