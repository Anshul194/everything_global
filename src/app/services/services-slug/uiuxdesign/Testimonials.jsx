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
                    <h3 className={`font-semibold text-xl`}>Jessica Boyd, Marketing Manager</h3>
                    <div className={`text-black/90 text-sm sm:text-base`}>
                        <p>Everything Globle’s influencer marketing campaign was a huge success for us. They connected us with the perfect influencers who really resonated with our target audience, and we saw fantastic results.</p>
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
                    <h3 className={`font-semibold text-xl`}>Travis Harris, PR Director</h3>
                    <div className={`text-black/90 text-sm sm:text-base`}>
                        <p>The influencer partnerships Everything Globle helped us create have been incredibly effective. Their strategy increased our brand visibility and engagement in ways we never anticipated.</p>
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
                    <h3 className={`font-semibold text-xl`}>Sophie Turner, Digital Marketing Specialist</h3>
                    <div className={`text-black/90 text-sm sm:text-base`}>
                        <p>Everything Globle made influencer marketing easy. They handled everything, from influencer selection to campaign execution, and the results exceeded our expectations. Our brand has never been more visible!</p>
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
