import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CountUp from 'react-countup';
import { GoDotFill } from 'react-icons/go';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const ApplyNow = () => {
  return (
    <>
      <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[160px]  text-lg overflow-hidden flex items-center`}>
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
        <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
          <GoDotFill className="text-[#f8a065]" />
          <span className="sliding-text hidden group-hover:block">Apply Now</span>
          <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
          <span className="sliding-text hidden group-hover:block">Apply Now</span>
          <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
          <span className="sliding-text">Apply Now</span>
        </div>
      </button>
    </>
  )
}
const OpenPosition = () => {
  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: false,
  };

  return (
    <div className="slider-container career_slider">
      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        autoplay={false}
        loop={true}
        speed={500}
        modules={[Navigation, Pagination, Autoplay]}
        style={{ height: '100vh' }}
      >
        <SwiperSlide className="slide bg-[#d2ebf8]" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <div className='grid grid-cols-12 gap-y-5 lg:gap-x-24'>
            <div className='hidden xl:block col-span-1'></div>
            <div className='hidden lg:block  col-span-12 lg:col-span-5 xl:col-span-4'>
              <img src={`/image/client/app-home-rev-img4.png`} alt='' className='' />
            </div>
            <div className='col-span-12 lg:col-span-6'>
              <div className='pt-4 lg:pt-12'>
                <div className=''>
                  <h2 className='text-4xl lg:text-5xl font-semibold'>Our Proficient Work</h2>
                  <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum</p>
                </div>
                <div className='pt-6'>
                  <div className='overflow-hidden'>
                    <h4 className='border-b border-black text-xl font-semibold pb-2'>Web Design</h4>
                    <div className='my-5 relative'>
                      <svg width="522.473" height="76.037" viewBox="0 0 522.473 76.037">
                        <defs>
                          <linearGradient id="qodef-progress-fill-552" x1="0.17" y1="0.786" x2="1.223" y2="0.422" gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#f8a065"></stop>
                            <stop offset="1" stop-color="#fbfaf5" stop-opacity="0"></stop>
                          </linearGradient>
                        </defs>
                        <path fill="url(#qodef-progress-fill-552)" d="M10965.14 1064.75a8.545 8.545 0 0 1-6.3-2.495c-4.18-4.3-2.966-12.5-.641-25.512 1.387-7.762 3.969-22.21.541-24.22-5.524-1.523-34.843 12.878-54.241 22.4-29.535 14.5-48.119 23.292-57.548 22.944-4.494-.165-6.742-2.1-7.836-3.7-3.747-5.468.472-13.9 7.666-27.2 3.253-6.014 9.309-17.208 8.066-19.737-4.74-.976-28.415 10.811-45.692 19.418-32.8 16.337-55.215 26.9-67.528 24.969-4.75-.746-7.043-3.143-8.129-5.022-4.472-7.732 3.168-21.542 10.556-34.9 2.661-4.811 6.1-11.022 7.311-14.532-19.06 5.36-91.909 44.88-97.069 49.026l-2.787-2.685-.488.061-2.008 3.578-2.474-4.2c1.258-7.014 95.207-52.768 105.813-54.136 4.109-.53 6.205 1.181 7.094 2.248 3.473 4.175.08 10.772-7.3 24.11-4.888 8.835-13.067 23.623-10.627 27.843.114.2.352.608 1.689.818 10.036 1.575 38.577-12.641 61.512-24.065 28.569-14.231 45.126-22.166 53.219-19.793a8.026 8.026 0 0 1 5.189 4.164c2.82 5.828-2.3 15.287-8.221 26.24-3.253 6.014-9.309 17.209-8.066 19.737 7.989.13 33.11-12.2 53.27-22.1 38.321-18.82 55.917-26.6 63.621-22.079 8.221 4.821 5.858 18.041 3.357 32.037-1.144 6.4-3.057 17.112-1.4 19.152 8.9-.388 127.721-35.212 200.4-57.14l2.92 7.489c-19.432 5.868-190.227 57.282-203.869 57.282Z" transform="translate(-10646.534 -988.713)"></path>
                      </svg>
                      <span
                        className="counter_text absolute right-0 top-0 lg:bg-[#d2ebf8] px-10"
                        style={{
                          fontSize: '60px',
                          fontWeight: 'bold',
                          WebkitTextStroke: '1px black',
                          color: 'transparent',
                          textShadow: 'none',
                        }}
                      >
                        <CountUp start={0} end={64} duration={1.5} />%
                      </span>
                    </div>
                  </div>
                  <div className='overflow-hidden'>
                    <h4 className='border-b border-black text-xl font-semibold pb-2'>Development</h4>
                    <div className='my-5 relative'>
                      <svg width="522.473" height="76.037" viewBox="0 0 522.473 76.037">
                        <defs>
                          <linearGradient id="qodef-progress-fill-552" x1="0.17" y1="0.786" x2="1.223" y2="0.422" gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#f8a065"></stop>
                            <stop offset="1" stop-color="#fbfaf5" stop-opacity="0"></stop>
                          </linearGradient>
                        </defs>
                        <path fill="url(#qodef-progress-fill-552)" d="M10965.14 1064.75a8.545 8.545 0 0 1-6.3-2.495c-4.18-4.3-2.966-12.5-.641-25.512 1.387-7.762 3.969-22.21.541-24.22-5.524-1.523-34.843 12.878-54.241 22.4-29.535 14.5-48.119 23.292-57.548 22.944-4.494-.165-6.742-2.1-7.836-3.7-3.747-5.468.472-13.9 7.666-27.2 3.253-6.014 9.309-17.208 8.066-19.737-4.74-.976-28.415 10.811-45.692 19.418-32.8 16.337-55.215 26.9-67.528 24.969-4.75-.746-7.043-3.143-8.129-5.022-4.472-7.732 3.168-21.542 10.556-34.9 2.661-4.811 6.1-11.022 7.311-14.532-19.06 5.36-91.909 44.88-97.069 49.026l-2.787-2.685-.488.061-2.008 3.578-2.474-4.2c1.258-7.014 95.207-52.768 105.813-54.136 4.109-.53 6.205 1.181 7.094 2.248 3.473 4.175.08 10.772-7.3 24.11-4.888 8.835-13.067 23.623-10.627 27.843.114.2.352.608 1.689.818 10.036 1.575 38.577-12.641 61.512-24.065 28.569-14.231 45.126-22.166 53.219-19.793a8.026 8.026 0 0 1 5.189 4.164c2.82 5.828-2.3 15.287-8.221 26.24-3.253 6.014-9.309 17.209-8.066 19.737 7.989.13 33.11-12.2 53.27-22.1 38.321-18.82 55.917-26.6 63.621-22.079 8.221 4.821 5.858 18.041 3.357 32.037-1.144 6.4-3.057 17.112-1.4 19.152 8.9-.388 127.721-35.212 200.4-57.14l2.92 7.489c-19.432 5.868-190.227 57.282-203.869 57.282Z" transform="translate(-10646.534 -988.713)"></path>
                      </svg>
                      <span
                        className="counter_text absolute right-0 top-0 lg:bg-[#d2ebf8] px-10"
                        style={{
                          fontSize: '60px',
                          fontWeight: 'bold',
                          WebkitTextStroke: '1px black',
                          color: 'transparent',
                          textShadow: 'none',
                        }}
                      >
                        <CountUp start={0} end={85} duration={1.5} />%
                      </span>
                    </div>
                  </div>
                  <ApplyNow />
                </div>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-1'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide bg-[#cbdec6] max-md:!p-5">
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-12 lg:col-span-6 pt-2 md:pt-10 lg:pl-10'>
              <h2 className='text-4xl lg:text-5xl font-semibold'>New App For <br />Fashion Lovers</h2>
              <div className='grid grid-cols-12 lg:gap-x-5 gap-y-5 md:gap-y-10 mt-10'>
                <div className='col-span-12 lg:col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-02.png' alt='' className='relative z-10 w-[25px] md:w-[40px] h-[25px] md:h-[40px]' />
                    <p className='max-sm:w-[80%]'>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-01.png' alt='' className='relative z-10 w-[25px] md:w-[40px] h-[25px] md:h-[40px]' />
                    <p className='max-sm:w-[80%]'>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-02.png' alt='' className='relative z-10 w-[25px] md:w-[40px] h-[25px] md:h-[40px]' />
                    <p className='max-sm:w-[80%]'>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-01.png' alt='' className='relative z-10 w-[25px] md:w-[40px] h-[25px] md:h-[40px]' />
                    <p className='max-sm:w-[80%]'>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <ApplyNow />
              </div>
            </div>
            <div className='hidden lg:block col-span-6'>
              <div className='relative pl-20 pt-20'>
                <img src='/image/client/app-home-rev-img1.png' alt='' className='relative z-10' />
                <img src='/image/client/h2-img-05.png' alt='' className='absolute left-0 top-0' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide max-md:!p-5" style={{ background: `url(/image/home/bacground-img.png)` }}>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-12 lg:col-span-6 pt-2 md:pt-10 lg:pl-10'>
              <h2 className='text-4xl lg:text-5xl font-semibold'>What We Can Do <br />For Business</h2>
              <div className='grid grid-cols-12 lg:gap-x-5 gap-y-5 md:gap-y-10 mt-10'>
                <div className='col-span-12 lg:col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-02.png' alt='' className='relative z-10 w-[25px] md:w-[40px] h-[25px] md:h-[40px]' />
                    <p className='max-sm:w-[80%]'>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-01.png' alt='' className='relative z-10 w-[25px] md:w-[40px] h-[25px] md:h-[40px]' />
                    <p className='max-sm:w-[80%]'>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-02.png' alt='' className='relative z-10 w-[25px] md:w-[40px] h-[25px] md:h-[40px]' />
                    <p className='max-sm:w-[80%]'>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-01.png' alt='' className='relative z-10 w-[25px] md:w-[40px] h-[25px] md:h-[40px]' />
                    <p className='max-sm:w-[80%]'>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <ApplyNow />
              </div>
            </div>
            <div className='hidden lg:block col-span-6'>
              <div className='relative pl-20 '>
                <img src='/image/client/h2-slider-4-img-02.png' alt='' className='relative z-10' />
                <img src='/image/client/h2-slider-4-img-03.png' alt='' className='absolute w-[140px] left-0 top-[-25px]' />
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
      {/* <Slider {...settings}>
        <div className="slide bg-[#d2ebf8]">
          <div className='grid grid-cols-12 gap-y-5 lg:gap-x-24'>
            <div className='hidden xl:block col-span-1'></div>
            <div className='hidden lg:block  col-span-12 lg:col-span-5 xl:col-span-4'>
              <img src={`/image/client/app-home-rev-img4.png`} alt='' className='' />
            </div>
            <div className='col-span-12 lg:col-span-6'>
              <div className='pt-4 lg:pt-12'>
                <div className=''>
                  <h2 className='text-4xl lg:text-5xl font-semibold'>Our Proficient Work</h2>
                  <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum</p>
                </div>
                <div className='pt-6'>
                  <div className='overflow-hidden'>
                    <h4 className='border-b border-black text-xl font-semibold pb-2'>Web Design</h4>
                    <div className='my-5 relative'>
                      <svg width="522.473" height="76.037" viewBox="0 0 522.473 76.037">
                        <defs>
                          <linearGradient id="qodef-progress-fill-552" x1="0.17" y1="0.786" x2="1.223" y2="0.422" gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#f8a065"></stop>
                            <stop offset="1" stop-color="#fbfaf5" stop-opacity="0"></stop>
                          </linearGradient>
                        </defs>
                        <path fill="url(#qodef-progress-fill-552)" d="M10965.14 1064.75a8.545 8.545 0 0 1-6.3-2.495c-4.18-4.3-2.966-12.5-.641-25.512 1.387-7.762 3.969-22.21.541-24.22-5.524-1.523-34.843 12.878-54.241 22.4-29.535 14.5-48.119 23.292-57.548 22.944-4.494-.165-6.742-2.1-7.836-3.7-3.747-5.468.472-13.9 7.666-27.2 3.253-6.014 9.309-17.208 8.066-19.737-4.74-.976-28.415 10.811-45.692 19.418-32.8 16.337-55.215 26.9-67.528 24.969-4.75-.746-7.043-3.143-8.129-5.022-4.472-7.732 3.168-21.542 10.556-34.9 2.661-4.811 6.1-11.022 7.311-14.532-19.06 5.36-91.909 44.88-97.069 49.026l-2.787-2.685-.488.061-2.008 3.578-2.474-4.2c1.258-7.014 95.207-52.768 105.813-54.136 4.109-.53 6.205 1.181 7.094 2.248 3.473 4.175.08 10.772-7.3 24.11-4.888 8.835-13.067 23.623-10.627 27.843.114.2.352.608 1.689.818 10.036 1.575 38.577-12.641 61.512-24.065 28.569-14.231 45.126-22.166 53.219-19.793a8.026 8.026 0 0 1 5.189 4.164c2.82 5.828-2.3 15.287-8.221 26.24-3.253 6.014-9.309 17.209-8.066 19.737 7.989.13 33.11-12.2 53.27-22.1 38.321-18.82 55.917-26.6 63.621-22.079 8.221 4.821 5.858 18.041 3.357 32.037-1.144 6.4-3.057 17.112-1.4 19.152 8.9-.388 127.721-35.212 200.4-57.14l2.92 7.489c-19.432 5.868-190.227 57.282-203.869 57.282Z" transform="translate(-10646.534 -988.713)"></path>
                      </svg>
                      <span
                        className="counter_text absolute right-0 top-0 lg:bg-[#d2ebf8] px-10"
                        style={{
                          fontSize: '60px',
                          fontWeight: 'bold',
                          WebkitTextStroke: '1px black',
                          color: 'transparent',
                          textShadow: 'none',
                        }}
                      >
                        <CountUp start={0} end={64} duration={1.5} />%
                      </span>
                    </div>
                  </div>
                  <div className='overflow-hidden'>
                    <h4 className='border-b border-black text-xl font-semibold pb-2'>Development</h4>
                    <div className='my-5 relative'>
                      <svg width="522.473" height="76.037" viewBox="0 0 522.473 76.037">
                        <defs>
                          <linearGradient id="qodef-progress-fill-552" x1="0.17" y1="0.786" x2="1.223" y2="0.422" gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#f8a065"></stop>
                            <stop offset="1" stop-color="#fbfaf5" stop-opacity="0"></stop>
                          </linearGradient>
                        </defs>
                        <path fill="url(#qodef-progress-fill-552)" d="M10965.14 1064.75a8.545 8.545 0 0 1-6.3-2.495c-4.18-4.3-2.966-12.5-.641-25.512 1.387-7.762 3.969-22.21.541-24.22-5.524-1.523-34.843 12.878-54.241 22.4-29.535 14.5-48.119 23.292-57.548 22.944-4.494-.165-6.742-2.1-7.836-3.7-3.747-5.468.472-13.9 7.666-27.2 3.253-6.014 9.309-17.208 8.066-19.737-4.74-.976-28.415 10.811-45.692 19.418-32.8 16.337-55.215 26.9-67.528 24.969-4.75-.746-7.043-3.143-8.129-5.022-4.472-7.732 3.168-21.542 10.556-34.9 2.661-4.811 6.1-11.022 7.311-14.532-19.06 5.36-91.909 44.88-97.069 49.026l-2.787-2.685-.488.061-2.008 3.578-2.474-4.2c1.258-7.014 95.207-52.768 105.813-54.136 4.109-.53 6.205 1.181 7.094 2.248 3.473 4.175.08 10.772-7.3 24.11-4.888 8.835-13.067 23.623-10.627 27.843.114.2.352.608 1.689.818 10.036 1.575 38.577-12.641 61.512-24.065 28.569-14.231 45.126-22.166 53.219-19.793a8.026 8.026 0 0 1 5.189 4.164c2.82 5.828-2.3 15.287-8.221 26.24-3.253 6.014-9.309 17.209-8.066 19.737 7.989.13 33.11-12.2 53.27-22.1 38.321-18.82 55.917-26.6 63.621-22.079 8.221 4.821 5.858 18.041 3.357 32.037-1.144 6.4-3.057 17.112-1.4 19.152 8.9-.388 127.721-35.212 200.4-57.14l2.92 7.489c-19.432 5.868-190.227 57.282-203.869 57.282Z" transform="translate(-10646.534 -988.713)"></path>
                      </svg>
                      <span
                        className="counter_text absolute right-0 top-0 lg:bg-[#d2ebf8] px-10"
                        style={{
                          fontSize: '60px',
                          fontWeight: 'bold',
                          WebkitTextStroke: '1px black',
                          color: 'transparent',
                          textShadow: 'none',
                        }}
                      >
                        <CountUp start={0} end={85} duration={1.5} />%
                      </span>
                    </div>
                  </div>
                  <ApplyNow />
                </div>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-1'></div>
          </div>
        </div>
        <div className="slide bg-[#cbdec6]">
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-12 lg:col-span-6 pt-10 pl-10'>
              <h2 className='text-4xl lg:text-5xl font-semibold'>New App For <br />Fashion Lovers</h2>
              <div className='grid grid-cols-12 gap-x-5 gap-y-10 mt-10'>
                <div className='col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-02.png' alt='' className='relative z-10 w-[40px] h-[40px]' />
                    <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-01.png' alt='' className='relative z-10 w-[40px] h-[40px]' />
                    <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-02.png' alt='' className='relative z-10 w-[40px] h-[40px]' />
                    <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-01.png' alt='' className='relative z-10 w-[40px] h-[40px]' />
                    <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <ApplyNow />
              </div>
            </div>
            <div className='hidden lg:block col-span-6'>
              <div className='relative pl-20 pt-20'>
                <img src='/image/client/app-home-rev-img1.png' alt='' className='relative z-10' />
                <img src='/image/client/h2-img-05.png' alt='' className='absolute left-0 top-0' />
              </div>
            </div>
          </div>
        </div>
        <div className="slide" style={{ background: `url(/image/home/bacground-img.png)` }}>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-12 lg:col-span-6 pt-10 pl-10'>
              <h2 className='text-4xl lg:text-5xl font-semibold'>New App For <br />Fashion Lovers</h2>
              <div className='grid grid-cols-12 gap-x-5 gap-y-10 mt-10'>
                <div className='col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-02.png' alt='' className='relative z-10 w-[40px] h-[40px]' />
                    <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-01.png' alt='' className='relative z-10 w-[40px] h-[40px]' />
                    <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-02.png' alt='' className='relative z-10 w-[40px] h-[40px]' />
                    <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='space-y-5'>
                    <img src='/image/client/h2-img-01.png' alt='' className='relative z-10 w-[40px] h-[40px]' />
                    <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu.</p>
                  </div>
                </div>
                <ApplyNow />
              </div>
            </div>
            <div className='hidden lg:block col-span-6'>
              <div className='relative pl-20 pt-20'>
                <div className='h-[300px]'>
                  <img src='/image/client/h2-slider-4-img-02.png' alt='' className='relative z-10 h-full w-full object-contain' />
                </div>
                <img src='/image/client/h2-slider-4-img-03.png' alt='' className='absolute left-0 top-0' />
              </div>
            </div>
          </div>
        </div>
      </Slider> */}
    </div>
  );
}

export default OpenPosition;





