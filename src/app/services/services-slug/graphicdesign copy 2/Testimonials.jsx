import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdFormatQuote } from 'react-icons/md';

export const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='relative pb-20'>
            <Slider {...settings}>
                <div className={`relative mb-[40px] `}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>James Carter, Marketing Director</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>The graphic design team at Everything Globle delivered outstanding work. The visuals they created for our marketing campaign were not only beautiful but perfectly aligned with our brand’s aesthetic. We’ve seen great feedback from our customers!</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
                <div className={`relative mb-[40px] pr-8 max-sm:right-6`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>Rachel Green, Social Media Coordinator</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>Everything Globle’s designers really brought our vision to life. From logos to social media posts, everything was crafted with attention to detail and creativity. Our online presence has never looked better!</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
                <div className={`relative mb-[40px] pr-8 max-sm:right-6`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>Chris Thompson, Brand Strategist </h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>The team at Everything Globle is a pleasure to work with. They understood exactly what we were looking for in our graphic design and exceeded our expectations. Their work has elevated our brand’s visual identity!</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
            </Slider>
            <div className="swiper-pagination-custom mt-4"></div>
        </div>
    );
};
