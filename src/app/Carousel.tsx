"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Intro from "./(items)/Intro";
import Career from "./(items)/Career";
import Career2 from "./(items)/Career2";
import Switchers from "./(items)/Switchers";
import Zephyr from "./(items)/Zephyr";
import Bamdokkabi from "./(items)/Bamdokkabi";
import Lantern from "./(items)/Lantern";
import Teeniepingle from "./(items)/Teeniepingle";
import Aldente from "./(items)/Aldente";

const data = [
  <Intro />,
  <Career />,
  <Career2 />,
  <Aldente />,
  <Switchers />,
  <Teeniepingle />,
  <Zephyr />,
  <Bamdokkabi />,
  <Lantern />,
];

export default function Carousel() {
  return (
    <div className="w-screen h-screen lg:h-screen overflow-x-hidden lg:overflow-hidden">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        loop
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
