import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function NewsLetter() {
    return (
        <>
            <div className="w-full md:w-2/3 m-auto px-4 pt-8 relative max-md:custom_container">
                <div className="absolute top-0 left-[10%] lg:left-[20%]">
                    <img src="/image/home/hello.webp" className='w-[90px] z-20 animate_zoom_in delay-500' alt="port1" />
                </div>

                {/* <div className="absolute top-20 right-[10%] lg:right-[20%] transform translate-x-1/2 -translate-y-1/2">
                    <img src="/image/services/h1-newsletter-img1.webp" className='w-[50px] z-20 animate_zoom_in delay-1000' alt="port1" />
                </div> */}

                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Approach to Social Media Management
                </h1>
                {/* <p className="text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

                {/* <div className="flex items-center w-3/4 m-auto space-x-2">
                    <div className="absolute -bottom-6 md:bottom-16 left-4 md:left-0 ">
                        <img src="/image/services/h1-newsletter-img2.webp" className='w-[130px] z-20 animate_zoom_in delay-1000' alt="port1" />
                    </div>
                    <div className={`border w-full border-black rounded-full overflow-hidden relative z-10`}>
                        <input type="text" placeholder='Email...' className='bg-transparent w-full border-0 outline-0 h-full p-6' />
                        <button className='border border-r-0 border-black rounded-full bg-[#F8A065] p-2 absolute right-0 h-full w-[65px]'>
                            <FaArrowRightLong className='text-2xl m-auto' />
                        </button>
                    </div>
                    <div className="absolute -bottom-6 md:bottom-2 right-4 lg:right-0">
                        <img src="/image/services/h1-newsletter-img4.webp" className='w-[130px] z-20 animate_zoom_in delay-500' alt="port1" />
                    </div>
                </div> */}


            </div>
        </>
    )
}
