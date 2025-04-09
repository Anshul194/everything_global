import React from 'react'
import Team from './Team'
import FooterTop from '../../component/layout/FooterTop'

export default function OurTeam() {
    return (
        <>
            <div className={`py-32`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <div className='w-3/5 m-auto relative'>
                    <div className="absolute -top-20 left-0">
                        <img src="/image/home/hello.webp" className='w-[90px] z-20 animate_zoom_in delay-500' alt="port1" />
                    </div>
                    <div className='relative'>
                        <h1 className='text-6xl font-semibold text-center relative z-10'>We Have Awesome Team Members</h1>
                        <img src={`/image/services/p3-offset-img.png`} alt="Error" className='absolute top-0 left-0 transform translate-x-1/2 -translate-y-[30%]' />
                    </div>
                    <div className="absolute -bottom-20 right-0">
                        <img src="/image/home/about-2.png" className='w-[50px] z-20 animate_zoom_in delay-1000' alt="port1" />
                    </div>
                </div>
            </div>
            <div>
                <Team />
            </div>
            <div className={`custom_global_space`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <FooterTop />
            </div>
        </>
    )
}
