import "./GalleryGrid.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fotos = [
  "/galeria/1.jpeg",
  "/galeria/2.jpeg",
  "/galeria/3.jpeg",
  "/galeria/4.jpeg",
  "/galeria/5.jpeg",
  "/galeria/6.jpeg",
  "/galeria/7.jpeg",
  "/galeria/8.jpeg",
  "/galeria/9.jpeg",
  "/galeria/10.jpeg",
  "/galeria/11.jpeg",
  "/galeria/12.jpeg",
  "/galeria/13.jpeg",
  "/galeria/14.jpeg",
  "/galeria/15.jpeg",
];

export default function GalleryGrid() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
    >
      {fotos.map((foto, index) => (
        <SwiperSlide key={index}>
          <img src={foto} alt={`Evento ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}