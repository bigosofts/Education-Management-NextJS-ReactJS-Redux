"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./swiperCustom.css";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

function Slider(props) {
  let imageArray = props.linkObj;
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 7000,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {imageArray.map((item, i) => (
          <SwiperSlide key={i}>
            <a href="/course">
              <img src={item.image} alt={item.caption}></img>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
