"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  images: string[];
}

export default function ImageSwiper({ images }: Props) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      loop
      navigation
      pagination={{ clickable: true }}
      className="h-[400px] lg:h-[600px]"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx} className="flex justify-center items-center">
          <div className="relative flex justify-center items-center w-full h-full">
            <Image
              width={800}
              height={600}
              src={img}
              alt={`Image ${idx}`}
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
