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
            {/* Testimonial 1 */}
            <div className={`relative mb-[40px]`}>
                <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl`}>
                    <h3 className={`font-semibold text-xl`}>Hannah Clark, Social Media Director</h3>
                    <div className={`text-black/90 text-sm sm:text-base`}>
                        <p>Everything Globle has completely transformed our social media presence. Their team is incredibly strategic, and they’ve helped us grow our followers, engagement, and ultimately our brand loyalty.</p>
                    </div>
                </div>
                <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                    <MdFormatQuote className='text-3xl' />
                </div>
            </div>
    
            {/* Testimonial 2 */}
            <div className={`relative mb-[40px]`}>
                <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-2`} />
                <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl`}>
                    <h3 className={`font-semibold text-xl`}>Simon Davis, Brand Ambassador</h3>
                    <div className={`text-black/90 text-sm sm:text-base`}>
                        <p>Working with Everything Globle for our social media management has been a game-changer. They created a content strategy that perfectly aligned with our brand and helped us engage with our audience in a meaningful way.</p>
                    </div>
                </div>
                <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                    <MdFormatQuote className='text-3xl' />
                </div>
            </div>
    
            {/* Testimonial 3 */}
            <div className={`relative mb-[40px]`}>
                <img src={`/image/home/persion4.png`} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-3`} />
                <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl`}>
                    <h3 className={`font-semibold text-xl`}>Amanda Rivera, Marketing Coordinator</h3>
                    <div className={`text-black/90 text-sm sm:text-base`}>
                        <p>Everything Globle's approach to social media management has given us the results we needed. They understand the trends, know how to engage, and have brought a fresh voice to our online presence.</p>
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
