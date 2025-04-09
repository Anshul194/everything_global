import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper/modules";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { IMAGE_BASE_URL } from "../../../utils/config";

export default function PortBanner(image) {
  const imageData = image?.image;

  return (
    <div className="custom_container relative custom_global_space max-h-[70vh]">
      <div className="port-banner-slider max-h-[70vh]">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay, Navigation]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {imageData.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={`${IMAGE_BASE_URL}/${image}`} className="max-h-[70vh] object-cover" alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}

          {/* Custom navigation buttons */}
          <div className="swiper-button-prev custom-prev">
            <HiArrowLeft />
          </div>
          <div className="swiper-button-next custom-next">
            <HiArrowRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
