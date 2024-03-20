"use client";
import Image from "next/image";

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
          <div key={i}>
            <SwiperSlide>
              <a href="/classes">
                <Image
                  width={1920}
                  height={690}
                  src={item.image}
                  alt={item.caption}
                ></Image>
              </a>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
