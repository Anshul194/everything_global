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
                {/* Additional Motion Graphics Testimonials */}
                <div className={`relative mb-[40px]`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-2`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl`}>
                        <h3 className={`font-semibold text-xl`}>Michael Adams, Marketing Lead</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}>
                            <p>The motion graphics Everything Globle created for our campaign were absolutely perfect. They added a dynamic element to our messaging, and the animated visuals really helped capture our audience’s attention.</p>
                        </div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>

                <div className={`relative mb-[40px]`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-3`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl`}>
                        <h3 className={`font-semibold text-xl`}>Lena Green, Senior Content Strategist</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}>
                            <p>Everything Globle’s motion graphics brought our brand’s storytelling to life. The animations were engaging, fun, and aligned perfectly with our overall creative vision. Our audience loved it!</p>
                        </div>
                    </div>
                    <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                        <MdFormatQuote className='text-3xl' />
                    </div>
                </div>

                <div className={`relative mb-[40px]`}>
                    <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-4`} />
                    <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl`}>
                        <h3 className={`font-semibold text-xl`}>Javier Martinez, Social Media Manager</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}>
                            <p>We were amazed by the motion graphics that Everything Globle produced for us. They added so much energy and creativity to our content, making it feel modern and exciting!</p>
                        </div>
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
