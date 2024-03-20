"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Slider.css";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

function SliderResult(props) {
  let imageArray = props.linkObj;
  return (
    <div className="resultSliderContainer">
      <h1 className="resultHeader">
        {true
          ? "ইন্টারনেট মাদ্রাসার তলেব/তলেবাদের বেফাক বোর্ড রেজাল্ট"
          : "Befaq Board Results of our Students"}
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        cssMode={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {imageArray.map((item, i) => (
          <div key={i}>
            <SwiperSlide>
              <Image src={item.image} alt={item.caption} fill={true}></Image>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderResult;
