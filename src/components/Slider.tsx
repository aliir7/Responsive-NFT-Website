import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, FreeMode } from "swiper/modules";
import { mockText } from "../constants";

function Slider() {
  const repeated = Array(8).fill(mockText).flat(); // جلوگیری از خالی شدن

  return (
    <section className="bg-primary overflow-hidden py-3 text-stone-900">
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        freeMode={true}
        allowTouchMove={false}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView="auto"
        spaceBetween={20}
        className="w-full"
      >
        {repeated.map((item, i) => (
          <SwiperSlide
            key={i}
            className="flex w-auto! items-center justify-center px-4"
          >
            <h3 className="text-lg font-bold tracking-wide whitespace-nowrap lg:text-xl">
              {item}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;
