import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { productData } from "../../constants";
import ProductsCard from "./ProductsCard";

function Products() {
  return (
    <section className="mt-12.5 flex w-full flex-col gap-7.5 px-0 py-12.5">
      <Swiper
        modules={[Autoplay, FreeMode, Navigation]}
        loop={true}
        spaceBetween={24}
        freeMode={true}
        pagination={false}
        allowTouchMove={false}
        draggable={true}
        style={
          {
            // CSS variables for Swiper
            "--swiper-navigation-color": "#21e787",
            "--swiper-navigation-size": "40px",
          } as React.CSSProperties
        }
        navigation={true}
        speed={4000}
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
            slidesPerView: 1,
          },
        }}
        className="nav-swiper w-full"
      >
        {productData.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductsCard title={item.title} imgSrc={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Autoplay, FreeMode, Navigation]}
        loop={true}
        spaceBetween={24}
        dir="rtl"
        freeMode={true}
        focusableElements="center"
        allowTouchMove={false}
        draggable={true}
        className="nav-swiper w-full"
        navigation={true}
        style={
          {
            // CSS variables for Swiper
            "--swiper-navigation-color": "#21e787",
            "--swiper-navigation-size": "40px",
          } as React.CSSProperties
        }
        pagination={false}
        speed={4000}
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
            slidesPerView: 1,
          },
        }}
      >
        {productData.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductsCard title={item.title} imgSrc={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Products;
