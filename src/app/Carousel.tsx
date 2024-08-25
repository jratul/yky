"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Intro from "./(items)/Intro";
import Career from "./(items)/Career";
import Career2 from "./(items)/Career2";
import Switchers from "./(items)/Switchers";
import Zephyr from "./(items)/Zephyr";

const data = [
  <Intro key={0} />,
  <Career key={1} />,
  <Career2 key={2} />,
  <Switchers key={3} />,
  <Zephyr key={4} />,
];

export default function Carousel() {
  const [idx, setIdx] = useState<number>(0);

  const handleLeft = () => {
    setIdx(idx - 1 < 0 ? data.length - 1 : idx - 1);
  };

  const handleRight = () => {
    setIdx(idx + 1 > data.length - 1 ? 0 : idx + 1);
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        style={{ transform: `translateX(-${100 * idx}vw)` }}
        className={`w-[${
          100 * data.length
        }vw] h-screen flex transition-transform ease-in-out duration-300`}
      >
        {data.map((item) => item)}
      </div>
      <div className="fixed w-full top-5 left-0 text-center">
        {data.map((_, i) => (
          <span
            className="text-3xl text-violet-500 mr-3 cursor-pointer hover:text-violet-300"
            key={i}
            onClick={() => {
              setIdx(i);
            }}
          >
            {i === idx ? <span>●</span> : <span>○</span>}
          </span>
        ))}
      </div>
      <ChevronLeftIcon
        className="w-20 h-20 absolute text-5xl font-bold left-2 top-[50vh] cursor-pointer hover:text-violet-300"
        onClick={handleLeft}
      />
      <ChevronRightIcon
        className="w-20 h-20 absolute text-5xl font-bold right-2 top-[50vh] cursor-pointer hover:text-violet-300"
        onClick={handleRight}
      />
    </div>
  );
}
