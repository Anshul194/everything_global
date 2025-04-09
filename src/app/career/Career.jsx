import React from 'react'
import FooterTop from '../../component/layout/FooterTop'
import OpenPosition from './OpenPosition'
import Banner from '../../component/home/Banner'

export default function Career() {
    return (
        <>
            <Banner />
            <div className={`custom_container`}>
                {/* <h2 className="uppercase text-6xl md:text-[110px] md:leading-[120px] lg:text-[131px] lg:leading-[140px] text-center font-extrabold mt-6">
          Something <span style={{ WebkitTextStroke: '1px black', color: 'transparent' }}>about us</span>
        </h2> */}
                <div className="my-20 sm:my-32">
                    <div className={`grid md:grid-cols-12 gap-4`}>
                        <div className={`col-span-12 md:col-span-7 content-center max-md:order-1`}>
                            <h3 className={`text-3xl lg:text-[40px] font-semibold lg:leading-[50px]`}>At Everything Globle, we mix experience with fresh energy to build stunning websites and marketing strategies that actually work.</h3>
                            <div className={`grid grid-cols-2 gap-x-8 my-3`}>
                                <div className={`col-span-1 sapce-y-2`}>
                                    <p className='font-semibold'> 01</p>
                                    <p>Duis aute irure dolor in repreh endet in voluptate velit esse cillum dolore eu fugiat nulla sunt in culpa.</p>
                                </div>
                                <div className={`col-span-1 sapce-y-2`}>
                                    <p className='font-semibold'> 02</p>
                                    <p>Sem et tortor consequat id porta nibh venenatis cras proin sagittis nisl.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`hidden md:block col-span-5 relative grid justify-center`}>
                            <div className={`absolute left-1/2 transform -translate-x-1/2 -top-12`}>
                                <img src={`/image/home/about-us3.webp`} alt="Error" className='w-[120px]' />
                            </div>
                            <img src={`/image/home/about-us.png`} alt="Error" />
                            <div className={`absolute bottom-7 `}>
                                <img src={`/image/home/about-2.png`} alt="Error" className='w-[60px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`custom_global_space`}>
                <OpenPosition />
            </div>
            <div className={`custom_global_space`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <FooterTop />
            </div>
        </>
    )
}
