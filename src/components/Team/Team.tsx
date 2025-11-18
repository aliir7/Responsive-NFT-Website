import { teamData } from "../../constants";
import TeamCard from "./TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

function Team() {
  return (
    <section className="section-wrapper flex-center-col">
      <h2 className="text-center text-4xl font-semibold">
        Our <span className="text-primary mr-2">Team</span>
      </h2>

      {/* Swiper */}
      <div className="mt-14 w-full px-4 lg:mt-20">
        <Swiper
          modules={[Autoplay, FreeMode, Navigation]}
          className="nav-swiper"
          navigation={true}
          style={
            {
              // CSS variables for Swiper
              "--swiper-navigation-color": "#21e787",
              "--swiper-navigation-size": "40px",
            } as React.CSSProperties
          }
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          freeMode={false}
          loop={true}
          breakpoints={{
            1400: { slidesPerView: 3 },
            1100: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {teamData.map((item) => (
            <SwiperSlide key={item.id} className="h-auto!">
              <TeamCard
                name={item.name}
                position={item.position}
                imgSrc={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Team;
