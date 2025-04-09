import React from 'react'

export default function AboutUs() {
    return (
        <>
            <div className={`grid md:grid-cols-12 gap-4`}>
                <div className={`col-span-7 content-center max-md:order-1`}>
                    <div className={`px-5 lg:px-20`}>
                        <h3 className={`text-3xl lg:text-[40px] font-semibold lg:leading-[50px]`}>At Everything Globle, we mix experience with fresh energy to build stunning websites and marketing strategies that actually work.</h3>
                        <div className={`grid grid-cols-2 gap-x-8 my-3`}>
                            <div className={`col-span-1 sapce-y-2`}>
                                <p className='font-semibold'> 01</p>
                                <p className='font-semibold'>Innovative Solutions</p>
                                <p>With 5+ years in web development and marketing, we help your brand thrive in today’s competitive digital landscape.</p>
                            </div>
                            <div className={`col-span-1 sapce-y-2`}>
                                <p className='font-semibold'> 02</p>
                                <p className='font-semibold'>Certified & Trusted</p>
                                <p>As a certified leader, we deliver reliable, scalable solutions that drive real growth for businesses worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hidden md:block col-span-5 px-4 sm:px-0 relative grid justify-center`}>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 -top-12`}>
                        <img src={`/image/home/about-us3.webp`} alt="Error" className='w-[120px]' />
                    </div>
                    <img src={`/image/home/about-us.png`} alt="Error" />
                    <div className={`absolute bottom-7 left-24`}>
                        <img src={`/image/home/about-2.png`} alt="Error" className='w-[60px]' />
                    </div>
                </div>
            </div>
        </>
    )
}
