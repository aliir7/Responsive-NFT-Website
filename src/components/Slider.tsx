import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { mockText } from "../constants";

function Slider() {
  // 🔁 چند بار تکرار تا پر بشه و اسلایدر یکنواخت حرکت کنه
  const repeatedText = Array(4).fill(mockText).flat();

  return (
    <section className="bg-primary overflow-hidden py-3 text-stone-900">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        allowTouchMove={false}
        speed={5000} // نرم‌تر و طبیعی‌تر
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView={7}
        spaceBetween={25}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 },
          480: { slidesPerView: 4, spaceBetween: 12 },
          640: { slidesPerView: 5, spaceBetween: 15 },
          768: { slidesPerView: 6, spaceBetween: 20 },
          1024: { slidesPerView: 7, spaceBetween: 25 },
          1280: { slidesPerView: 8, spaceBetween: 30 },
        }}
        className="w-full"
      >
        {repeatedText.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex w-auto! items-center justify-center"
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
