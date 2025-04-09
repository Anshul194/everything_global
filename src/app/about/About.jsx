import React from 'react'
import AboutDetails from './AboutDetails'
import Banner from '../../component/home/Banner'
import Awards from '../../component/about/Awards'
import BrandAwards from '../../component/about/BrandAwards'
import { Testimonials } from '../../component/home/Testimonials'
import ProjectTacticsAndStrategies from '../../component/about/ProjectTacticsAndStrategies'

export default function About() {
  return (
    <>
      <Banner />
      <div className={`custom_container`}>
        {/* <div className={`w-full rounded-[50px] overflow-hidden`}>
          <img src="/image/portfoilo/about.jpg" alt="Error" />
        </div> */}
        <h2 className="uppercase text-6xl md:text-[110px] md:leading-[120px] lg:text-[131px] lg:leading-[140px] text-center font-extrabold mt-6">
          Something <span style={{ WebkitTextStroke: '1px black', color: 'transparent' }}>about us</span>
        </h2>
        <div className="my-32">
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
      <div className="mt-12">
        <AboutDetails />
      </div>
      <div className='my-12 lg:my-24 custom_container'>
        <Awards />
      </div>
      <div className="parallax"></div>
      <div className='py-20 md:py-40' style={{ background: `url(/image/home/bacground-img.png)` }}>
        <BrandAwards />
      </div>
      <div className=''>
        <ProjectTacticsAndStrategies />
      </div>
      <div className='my-32'> <Testimonials /></div>
    </>
  )
}
