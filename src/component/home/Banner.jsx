import React from 'react'
import { GoDotFill } from 'react-icons/go'
// import Accordion from './Accordion'

export default function Banner() {
    return (
        <>
            <div className={`pt-6 sm:pt-12 xl:pt-16 bg-[#f0ead8] rounded-b-[30px]`}>
                {/* <div className={`pt-6 sm:pt-12 xl:pt-16 bg-[#f0ead8] rounded-b-[50px]`}> */}
                <div className={`grid lg:grid-cols-12 custom_container px-8 gap-y-10 sm:gap-y-20 !pb-0`}>
                    <div className={`lg:col-span-7 h-full content-around relative`}>
                        <img src="/image/home/happy.webp" alt="Error" className={`absolute right-40 lg:-right-12 lg:top-20 z-0 hidden sm:block`} />
                        <h1 className="sm:w-[83%] lg:w-full text-4xl sm:text-[60px] sm:!leading-[65px] xl:text-[64px] xl:leading-[60px] lg:leading-[74px] font-semibold z-10 relative">Transform <span className="rocket-icon inline-block"><img decoding="async" src="https://pixated.agency/wp-content/uploads/2023/11/rocket-icon.svg" alt="pixated" className='max-w-[40px] sm:max-w-[70px]'/></span> Your Business with Web &amp; Marketing Strategies!</h1>
                        <img src="/image/home/banner-1.webp" alt="Error" className={`absolute sm:-left-6 `} />
                        <div className="mt-8 sm:my-8">
                            <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[300px] sm:w-[380px] text-lg overflow-hidden flex items-center`}>
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                                <div className="max-sm:text-sm sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                                    <GoDotFill className="text-[#f8a065]" />
                                    <span className="sliding-text hidden group-hover:block">Get Your FREE Website Proposal</span>
                                    <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                                    <span className="sliding-text hidden group-hover:block">Get Your FREE Website Proposal</span>
                                    <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                                    <span className="sliding-text">Get Your FREE Website Proposal</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={`lg:col-span-5`}>
                        <img src="/image/banner/banner.png" alt="Error" className={`w-fit m-auto lg:w-full h-full z-20`} />
                    </div>
                </div>
                {/* <Accordion /> */}
            </div>
        </>
    )
}
