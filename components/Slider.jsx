"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewCard } from "./ReviewCard";
import { ProjectCard } from "./ProjectCard";

export const Slider = ({ slides, sliderStyles, slidesPerView, cardType }) => {
  return (
    <Swiper
      className={sliderStyles}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1400: { slidesPerView: slidesPerView },
      }}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {cardType === "review" && (
        <div>
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <ReviewCard review={slide} />
              </SwiperSlide>
            );
          })}
        </div>
      )}
      {cardType === "project" && (
        <div>
          {slides.slice(0,4).map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard project={slide} />
              </SwiperSlide>
            );
          })}
        </div>
      )}
    </Swiper>
  );
};
