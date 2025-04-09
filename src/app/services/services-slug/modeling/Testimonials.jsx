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
                        <h3 className={`font-semibold text-xl`}>Daniel James, Marketing Executive
                        </h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>Everything Globle’s modeling services brought a real human touch to our brand. The models they selected were a perfect fit, helping us tell an authentic story that connected deeply with our audience.</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
                <div className={`relative mb-[40px] pr-8 max-sm:right-6`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>Nina Patel, Brand Manager</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>I loved how Everything Globle incorporated modeling into our campaign. The models were professional, relatable, and really helped bring our messaging to life in a way that felt genuine.</p></div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>
                <div className={`relative mb-[40px] pr-8 max-sm:right-6`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                        <h3 className={`font-semibold text-xl`}>Mason Walker, Content Manager
                        </h3>
                        <div className={`text-black/90 text-sm sm:text-base`}><p>The modeling work Everything Globle did for our recent campaign was exceptional. The team really understood our brand, and the models they used made our visuals feel more personal and engaging.</p></div>
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
