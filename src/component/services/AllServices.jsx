import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const AnimatedText = ({ text, link }) => {
    return (
        <div className="relative group">
            <Link to={link} className='flex items-center gap-2'>
                <GoDotFill className="fill-[#F8A065] absolute left-0 opacity-0 transition-all duration-500 ease-in-out transform -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
                <span className="transition-all duration-500 ease-in-out group-hover:ml-6 font-semibold text-xl ">{text}</span>
            </Link>
        </div>
    )
}
export default function AllServices() {
    return (
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20`}>
            <div className={`col-span-1`}>
                <div className={`flex flex-col gap-20`}>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port1.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Branding`} link={`/creative-marketing/branding`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port4.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Graphic Design`} link={`/creative-marketing/graphic-design`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port7.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`3D Branding`} link={`/creative-marketing/3d-branding`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port10.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Product Photography`} link={`/creative-marketing/product-photography`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port13.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Video Editing`} link={`/creative-marketing/video-editing`} />
                    </div>
                </div>
            </div>
            <div className={`col-span-1`}>
                <div className={`flex flex-col gap-20`}>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port2.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Facebook Ads`} link={`/growth-advertising/facebook-ads`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port5.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`PPC (Pay-Per-Click)`} link={`/growth-advertising/ppc`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port8.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Motion Graphics`} link={`/creative-marketing/motion-graphics`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port11.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Modeling`} link={`/creative-marketing/modeling`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port14.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`YouTube Marketing`} link={`/growth-advertising/youtube-marketing`} />
                    </div>
                </div>
            </div>
            <div className={`col-span-1`}>
                <div className={`flex flex-col gap-20`}>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port3.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Social Media Management`} link={`/creative-marketing/social-media-management`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port6.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Influencer Marketing`} link={`/growth-advertising/influencer-marketing`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port9.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`E-commerce Marketing`} link={`/growth-advertising/ecommerce-marketing`} />
                    </div>
                    <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port12.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`Email Marketing`} link={`/growth-advertising/email-marketing`} />
                    </div>
                    {/* <div className={`space-y-3 group cursor-pointer`}>
                        <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                            <img src="/image/portfoilo/port15.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
                        </div>
                        <AnimatedText text={`SEO`} link={`/growth-advertising/seo`} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
