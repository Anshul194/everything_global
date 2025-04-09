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
                        <h3 className={`font-semibold text-xl`}>Sophia Martin, Marketing Specialist</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}>
                            <p>Everything Globle’s email marketing services have been essential in nurturing our leads and boosting conversions. Their personalized email campaigns are tailored perfectly to our audience.</p>
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
                        <h3 className={`font-semibold text-xl`}>Leo Mitchell, E-commerce Manager</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}>
                            <p>We’ve seen an increase in both open rates and conversions thanks to the email marketing services from Everything Globle. Their team really knows how to craft engaging emails that get results.</p>
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
                        <h3 className={`font-semibold text-xl`}>Olivia Hayes, CRM Manager</h3>
                        <div className={`text-black/90 text-sm sm:text-base`}>
                            <p>Everything Globle’s email marketing has been a huge asset to our business. Their strategy and design helped us build strong customer relationships and encourage repeat purchases.</p>
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
