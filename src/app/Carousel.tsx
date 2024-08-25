"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Intro from "./(items)/Intro";
import Career from "./(items)/Career";

const data = [<Intro key={0} />, <Career key={1} />];

export default function Carousel() {
  const [idx, setIdx] = useState<number>(0);

  const handleLeft = () => {
    setIdx(idx - 1 < 0 ? data.length - 1 : idx - 1);
  };

  const handleRight = () => {
    setIdx(idx + 1 > data.length - 1 ? 0 : idx + 1);
  };

  return (
    <div className="w-screen h-screen overflow-hidden z-10">
      <div
        style={{ transform: `translateX(-${100 * idx}vw)` }}
        className={`w-[${
          100 * data.length
        }vw] h-screen flex transition-transform ease-out duration-500`}
      >
        {data.map((item) => item)}
      </div>
      <ChevronLeftIcon
        className="w-20 h-20 absolute text-5xl font-bold left-2 top-[50vh] cursor-pointer z-20 hover:text-violet-300"
        onClick={handleLeft}
      />
      <ChevronRightIcon
        className="w-20 h-20 absolute text-5xl font-bold right-2 top-[50vh] cursor-pointer z-20 hover:text-violet-300"
        onClick={handleRight}
      />
    </div>
  );
}
