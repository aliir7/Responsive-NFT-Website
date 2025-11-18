import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, FreeMode } from "swiper/modules";
import { partnerImages } from "../constants";

function Partner() {
  return (
    <section className="section-wrapper relative w-full">
      <span className="bg-overlay absolute top-1/4 left-[5%] z-2 h-1/2 w-[10%] rotate-180 md:left-0 lg:left-[15%]" />
      <span className="bg-overlay absolute top-1/4 right-[5%] z-2 h-1/2 w-[10%] md:right-0 lg:right-[15%]" />
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
          breakpoints={{
            1400: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
          }}
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
          spaceBetween={8}
          breakpoints={{
            1400: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
          }}
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
          breakpoints={{
            1400: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={4}
          className="w-full"
        >
          {partnerImages.slice(4, -1).map((item, index) => (
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
