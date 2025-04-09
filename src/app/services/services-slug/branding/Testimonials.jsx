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
                        <h3 className={`font-semibold text-xl`}>Sophia Mitchell, Marketing Manager                        </h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>Everything Globle completely transformed our brand! Their team helped us create a fresh, modern look that truly reflects our values and resonates with our audience. Our brand identity is now stronger than ever!</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
                <div className={`relative mb-[40px] pr-8 max-sm:right-6`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>Carlos Rivera, Founder</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>Working with Everything Globle on our branding was a game-changer. They really took the time to understand our mission, and the end result is a brand identity that stands out. We've seen increased recognition and engagement since the rebranding!</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
                <div className={`relative mb-[40px] pr-8 max-sm:right-6`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>Emily Foster, Creative Director</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>I couldn’t be happier with the branding services from Everything Globle. They helped us refine our messaging and created a cohesive identity that’s professional and approachable. Our clients love it!</p></div>
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
