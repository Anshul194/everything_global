import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdFormatQuote } from 'react-icons/md';
import { BASE_URL, orgId } from '../../utils/config';
import axios from 'axios';
import Loader from '../layout/Loader';

export const Testimonials = () => {

    const [testimonialData, setTestimonialData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get(`${BASE_URL}/all-testimonial-text?organizationId=${orgId}`)

            if (resp?.data?.http_status_code === 200) {
                setTestimonialData(resp?.data?.data || [])
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) {
        return <Loader />
    }



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
                {testimonialData ? testimonialData.map((item, index) => (
                    <div className={`relative mb-[40px] `} key={index}>
                        <img src={item?.image_url} className={`rounded-full overflow-hidden border border-black h-[200px] w-[200px]`} alt={`category-1`} />
                        <div className={`border border-black w-[80%] ml-auto -mt-14 relative bg-white flex flex-col justify-start space-y-4 p-4 sm:p-8 rounded-2xl `}>
                            <h3 className={`font-semibold text-xl`}>{item?.name}, {item?.title}</h3>
                            <div className={`text-black/90 text-sm sm:text-base`}><p>{item?.description}</p></div>
                        </div>
                        <div className="absolute -bottom-5 -right-0 border border-black bg-[#cbdec6] rounded-xl p-3">
                            <MdFormatQuote className='text-3xl' />
                        </div>
                    </div>
                )) : "No Testimonial Available"}

            </Slider>
            <div className="swiper-pagination-custom mt-4"></div>
        </div>
    );
};
