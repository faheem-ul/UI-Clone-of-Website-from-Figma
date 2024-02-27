import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CustomSlider.css";
import slidePic from "../../assets/Pictures/pic.jpg";

function CustomSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerGroupSkip={3}
        scrollbar={true}
        navigation={true}
        modules={[Keyboard, Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slidePic}
            alt="this is a slider image"
            width="100px"
            height="100px"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={slidePic}
            alt="this is a slider image"
            width="100px"
            height="100px"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={slidePic}
            alt="this is a slider image"
            width="100px"
            height="100px"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={slidePic}
            alt="this is a slider image"
            width="100px"
            height="100px"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomSlider;
