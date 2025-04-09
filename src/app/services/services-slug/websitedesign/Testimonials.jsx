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
                    <h3 className={`font-semibold text-xl`}>Olivia Parker, E-commerce Manager</h3>
                    <div className={`text-black/90 text-sm sm:text-base`}>
                        <p>Everything Globle’s e-commerce marketing services helped increase our online sales by optimizing our store and creating targeted campaigns. We saw a significant boost in conversion rates!</p>
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
                    <h3 className={`font-semibold text-xl`}>Benjamin Adams, Sales Director</h3>
                    <div className={`text-black/90 text-sm sm:text-base`}>
                        <p>Thanks to Everything Globle, our e-commerce marketing has been more effective than ever. Their tailored strategies for product promotions and checkout optimization have really paid off.</p>
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
                    <h3 className={`font-semibold text-xl`}>Claire Thompson, Brand Manager</h3>
                    <div className={`text-black/90 text-sm sm:text-base`}>
                        <p>Everything Globle really knows how to drive e-commerce success. Their approach to online marketing has not only improved our sales but also enhanced the overall shopping experience on our website.</p>
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
