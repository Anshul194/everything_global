import React from 'react'
import { GoDotFill } from 'react-icons/go'

export default function Service1() {
    return (
        <>
            <div className='grid grid-cols-12 gap-y-8 md:gap-8 lg:gap-20 custom_container'>
                <div className='col-span-full md:col-span-5'>
                    <div className="relative lg:mt-20">
                        {/* <img src="/image/services/servic-svg.png" alt="Error" /> */}
                        <div className="absolute -top-14 left-0 animate_zoom_in delay-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="342.316" height="190.607" viewBox="0 0 342.316 190.607">
                                <defs>
                                    <radialGradient id="radial-gradient33" cx="0.515" cy="0.501" r="1.096" gradientTransform="matrix(0.5, -0.866, 0.376, 0.217, 0.069, 0.839)" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#F8A065"></stop>
                                        <stop offset="1" stop-color="#fbfaf5"></stop>
                                    </radialGradient>
                                </defs>
                                <path id="Path_220" data-name="Path 220" d="M104.589,110.29c-33.311,0-62.955-4.856-82.275-16.931C6.107,83.23-1.146,72.6.146,60.848,4.022,25.566,93.855,2.59,104.089.087c1.986-.486,3.914,1.122,4.3,3.591s-.9,4.866-2.888,5.352C68.847,18.006,9.8,40.346,7.409,62.082c-1,9.1,9.345,17.6,18.2,23.134,18.089,11.306,46.54,15.859,78.719,15.861,84.695.005,195.331-31.521,211.7-54.426,2.017-2.822,1.432-3.923,1.152-4.451-12-22.6-109.612-17.874-172.292-9.183-2.012.279-3.826-1.522-4.05-4.024s1.225-4.756,3.237-5.035C160.492,21.681,304.994,2.709,323.3,37.178c1.482,2.791,3.22,8.52-1.79,15.528C304.177,76.956,191.839,110.282,104.589,110.29Z" transform="matrix(0.966, -0.259, 0.259, 0.966, 0, 84.075)" fill="url(#radial-gradient33)"></path>
                            </svg>
                        </div>
                        <div className=''>
                            <h2 className="text-5xl lg:text-[54px] lg:leading-[60px] font-semibold z-20 relative">Launch Your<br />
                                Online Store</h2>
                            <p className='mt-6'>Full WooCommerce compatibility and a great selection of captivating shop page layouts.</p>
                            <button className={`relative border mt-6 border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[140px] text-lg overflow-hidden flex items-center bg-white`}>
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
                    </div>

                </div>
                <div className='col-span-full md:col-span-7'>
                    <div className={`h-full relative`}>
                        <img src="/image/home/hello.webp" className='absolute w-[90px] z-20 animate_zoom_in delay-1000' alt="port1" />
                        <img src="/image/services/service-1.png" className='animate_zoom_in delay-500' alt="port1" />
                    </div>
                </div>
            </div>
        </>
    )
}
