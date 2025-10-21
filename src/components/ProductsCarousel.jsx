import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductsCarousel() {
  return (
    <section id="products" className="py-20 bg-gray-50 text-slate-800 text-center">
      <h2 className="text-2xl font-bold mb-10 italic text-slate-700">PRODUTOS</h2>
      <Swiper spaceBetween={30} slidesPerView={1} className="max-w-xl mx-auto">
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <img src="/battery.jpg" alt="Bateria Lithium-Ion" className="rounded-xl mb-4" />
            <h3 className="text-lg font-semibold text-primary">Bateria Lithium-Ion Premium</h3>
            <p className="text-slate-600 mt-2">
              Alta densidade de energia, leveza e longa vida útil, proporcionando maior autonomia e eficiência.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
