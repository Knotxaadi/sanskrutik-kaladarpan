import React, { useState, useEffect } from "react";
import s1 from "/src/assets/show-case/1.jpeg";
import s2 from "/src/assets/show-case/2.jpeg";
import s3 from "/src/assets/show-case/3.jpeg";
import s4 from "/src/assets/show-case/4.jpeg";
import s5 from "/src/assets/show-case/5.jpeg";
import s6 from "/src/assets/show-case/6.jpeg";
import s7 from "/src/assets/show-case/7.jpeg";
import s8 from "/src/assets/show-case/8.jpeg";
import vid from "/src/assets/main-img/vid1.mp4";

const ImageSlider = () => {
  const images = [s1, s2, s3, s4, s5, s6, s7, s8];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3400);

    return () => clearInterval(timer);
  }, []);

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  return (
    <>
      <div className="bg-gray-700/80 backdrop-blur-[1px] m-3 p-2 rounded-2xl">
        <div className="video flex justify-center">
          <video
            className="rounded-2xl"
            src={vid}
            autoPlay
            loop
            controls
            muted
          ></video>
        </div>
        <div className="w-full h-[60vh] max-md:h-[30vh] flex justify-center items-center overflow-hidden">
          <div className="relative flex justify-center items-center gap-4">
            {/* Previous Image */}
            <img
              src={images[prevIndex]}
              alt=""
              className="w-64 h-44 object-cover rounded-xl 
            opacity-60 scale-90 
            transition-all duration-700 ease-in-out"
            />

            {/* Active Middle Image */}
            <img
              src={images[current]}
              alt=""
              className=" w-[620px] h-[360px] max-md:w-[520px] max-md:h-[180px] object-cover 
            rounded-2xl shadow-2xl 
            scale-90 opacity-100 
            transition-all duration-700 ease-in-out"
            />

            {/* Next Image */}
            <img
              src={images[nextIndex]}
              alt=""
              className="w-64 h-44 object-cover rounded-xl 
            opacity-60 scale-90 
            transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
