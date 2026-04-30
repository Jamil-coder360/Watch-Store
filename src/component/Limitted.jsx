import React from "react";
import Section from "./section/Section";
import Container from "./section/Container";
import LimittedCard from "./LimittedCard";
import products from "../data";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Limitted = () => {
  return (
    <Section className="pb-25">
      <Container>
        <div>
          <h1 className="capitalize text-[40px] leading-[1.5] font-bold text-[#857757] pb-10">
            limited edition
          </h1>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {products.slice(14, 19).map((item, index) => (
              <SwiperSlide key={index}>
                <LimittedCard image={item.image} name={item.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
};

export default Limitted;
