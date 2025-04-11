import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper/modules";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { IMAGE_BASE_URL } from "../../../utils/config";

export default function PortBanner({ image }) {
  // Handle the case where image might be undefined or not an array
  const imageData = Array.isArray(image) ? image : [];
  
  if (imageData.length === 0) {
    return (
      <div className="custom_container relative custom_global_space max-h-[70vh]">
        <div className="bg-gray-200 w-full h-[70vh] flex items-center justify-center">
          <p className="text-gray-500 text-xl">No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="custom_container relative custom_global_space max-h-[70vh]">
      <div className="port-banner-slider max-h-[70vh]">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay, Navigation]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={imageData.length > 1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {imageData.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={`${IMAGE_BASE_URL}/${image}`} 
                className="w-full max-h-[70vh] object-cover" 
                alt={`Portfolio slide ${index + 1}`} 
              />
            </SwiperSlide>
          ))}

          {/* Only show navigation buttons if there are multiple images */}
          {imageData.length > 1 && (
            <>
              <div className="swiper-button-prev custom-prev">
                <HiArrowLeft />
              </div>
              <div className="swiper-button-next custom-next">
                <HiArrowRight />
              </div>
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
}