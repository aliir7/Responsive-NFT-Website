import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, FreeMode } from "swiper/modules";
import { partnerImages } from "../constants";

function Partner() {
  return (
    <section className="section-wrapper relative w-full">
      <span className="bg-overlay absolute top-1/4 left-[15%] z-2 h-1/2 w-[10%] rotate-180" />
      <span className="bg-overlay absolute top-1/4 right-[15%] z-2 h-1/2 w-[10%]" />
      <div>
        {/* slider 1 */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          allowTouchMove={false}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={4}
          spaceBetween={8}
          className="w-full"
        >
          {partnerImages.slice(0, 5).map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt={`partnerImg-${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* slider 2 */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          allowTouchMove={false}
          speed={3000}
          dir="rtl"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={4}
          spaceBetween={8}
          className="w-full"
        >
          {partnerImages.slice(0, 5).map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt={`partnerImg-${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* slider 3 */}

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          allowTouchMove={false}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={3}
          spaceBetween={4}
          className="w-full"
        >
          {partnerImages.slice(5, -1).map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt={`partnerImg-${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partner;
