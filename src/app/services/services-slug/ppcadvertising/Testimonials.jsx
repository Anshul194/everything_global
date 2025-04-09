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
                        <h3 className={`font-semibold text-xl`}>John White, Marketing Executive</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}>
                            <p>Everything Globle has helped us maximize our ROI with their PPC services. The targeted ads have driven quality traffic to our site, resulting in more conversions and a better return on our ad spend.</p>
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
                        <h3 className={`font-semibold text-xl`}>Samantha Reed, E-commerce Director</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}>
                            <p>PPC with Everything Globle was a huge success. Their team optimized our campaigns to ensure we were reaching the right people, and we saw an immediate boost in both traffic and sales.</p>
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
                        <h3 className={`font-semibold text-xl`}>David Carter, Business Development Manager</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}>
                            <p>We’ve been working with Everything Globle for our PPC campaigns, and their expertise has been invaluable. They continuously refine our approach for better targeting and higher conversion rates.</p>
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
