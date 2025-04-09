import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

export default function Sales() {
    return (
        <>
            {/* <div className='grid grid-cols-1 sm:grid-cols-2'>
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className='col-span-1 p-6 bg-[#d2ebf8] rounded-[50px] overflow-hidden border border-black relative product-card'
                    >
                        <img
                            src={`/image/services/h7-banner-img1-${index + 1}.jpg`}
                            alt='service-banner'
                            title='service-banner'
                            className='rounded-[40px]'
                        />
                        {(index === 0 || index === 3) && (
                            <div className='absolute bottom-20 md:bottom-24 space-y-4 left-20 md:left-24'>
                                <h3 className='text-4xl sm:text-6xl font-semibold text-white'>Mate Mart</h3>
                                <button
                                    className={`relative border mt-6 border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[140px] text-lg overflow-hidden flex items-center bg-white`}
                                >
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#F8A065] rounded-full group-hover:w-full group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                                    <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                                        <GoDotFill className="text-[#F8A065]" />
                                        <span className="sliding-text hidden group-hover:block">EXPLORE</span>
                                        <GoDotFill className="text-[#F8A065] hidden group-hover:block" />
                                        <span className="sliding-text hidden group-hover:block">EXPLORE</span>
                                        <GoDotFill className="text-[#F8A065] hidden group-hover:block" />
                                        <span className="sliding-text">EXPLORE</span>
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div> */}
            {/* <div className='mt-20'> */}
            <div className=''>
                <div style={{ background: `url(/image/services/shop-home-img3.1.jpg)` }} className="max-md:!bg-none !bg-center !bg-no-repeat !bg-cover">
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='col-span-1'></div>
                        <div className='col-span-1 bg-[#cbdec6] px-12 py-24 md:p-12 lg:p-24 xl:px-28  xl:py-36 rounded-[50px] overflow-hidden border border-black relative'>
                            <img
                                src={`/image/services/shop-h-icon-img.png`}
                                alt='service-banner'
                                title='service-banner'
                                className='absolute bottom-20 right-32'
                            />
                            <div className='relative z-10'>
                                <h3 className='text-4xl xl:text-6xl font-semibold'>Let’s make your campaign more personal and engaging. 
                                </h3>
                                <p className='text-2xl xl:text-3xl font-semibold mt-2'>Book your modeling session now!</p>

                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> */}
                            </div>
                            <div className='mt-24 xl:mt-40'>
                                <Link to="/contact" >
                                    <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[355px] text-lg overflow-hidden flex items-center mt-10`}>
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#F8A065] rounded-full group-hover:w-full group-hover:h-56"></span>
                                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                                        <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                                            <GoDotFill className="text-[#F8A065]" />
                                            <span className="sliding-text hidden group-hover:block">Book your free consultation!</span>
                                            <GoDotFill className="text-[#F8A065] hidden group-hover:block" />
                                            <span className="sliding-text hidden group-hover:block">Book your free consultation!</span>
                                            <GoDotFill className="text-[#F8A065] hidden group-hover:block" />
                                            <span className="sliding-text">Book your free consultation!</span>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
