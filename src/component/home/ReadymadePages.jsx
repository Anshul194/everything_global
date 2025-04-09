import React from 'react'
import { GoDot, GoDotFill } from 'react-icons/go'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

export default function ReadymadePages() {

    return (
        <div className={`border border-black rounded-[70px] bg-[#f0ead8] pb-14 md:pb-32 overflow-hidden`}>
            <div className={`px-10 py-14 md:py-32 md:!pb-20 flex justify-center`}>
                <div className='relative'>
                    <h2 className={`text-2xl sm:text-3xl sm:text-[52px] font-semibold z-10 relative`}>Our Portfolio</h2>
                    <span className='absolute -top-8 -right-10 z-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="489.841" height="106.354" viewBox="0 0 489.841 106.354">
                            <defs>
                                <linearGradient id="linear-gradient" x1="0.872" y1="-0.248" x2="0.12" y2="0.761" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stop-color="#f8a065" sto p-opacity="0.82"></stop>
                                    <stop offset="1" stop-color="#f0ead8"></stop>
                                </linearGradient>
                            </defs>
                            <path id="Path_126" data-name="Path 126" d="M7492.333,2988.116q-.857,0-1.691-.023c-3.947-.1-14.431-.379-16.536-9.313-2.453-10.407,7.771-15.851,35.1-30.4,16.909-9,49.813-26.52,58.291-38.342-12.509,3.7-39,18.075-59.209,29.041-39.123,21.226-79.578,43.175-103.892,43.727-4.941.113-16.506.375-18.876-9.011-2.833-11.225,9.629-17.585,46.623-36.466,19.655-10.03,44.564-22.743,60.771-34.15-45.09,12.223-151.9,54.948-191.438,70.763-24.635,9.854-32.824,13.1-35.5,13.831a9.146,9.146,0,0,1-4.837-17.64c2.337-.691,16.8-6.477,33.544-13.174,205.49-82.2,220.517-80.321,228-70.445,1.589,2.1,4.646,7.808-1.275,15.533-11.983,15.629-43.9,32.616-73.9,47.973,16.945-7.97,35.5-18.034,52.058-27.018,51.551-27.968,70.611-37.1,82.06-29.742,4.3,2.762,6.534,7.634,6.14,13.367-1.37,19.862-31.161,37.243-69.963,57.9-1.758.936-3.585,1.908-5.424,2.894,13.034-2.555,29.039-6.914,47.395-11.911,45.307-12.336,107.355-29.23,175.084-31.165a9.146,9.146,0,1,1,.522,18.284c-65.55,1.872-123.909,17.763-170.8,30.53C7534,2981.485,7509.646,2988.116,7492.333,2988.116Z" transform="translate(-7254.417 -2881.762)" fill="url(#linear-gradient)"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="marquee-container">
                <div className="marquee-content"
                // style={{ backgroundImage: 'url(/image/home/landing-img.png)', backgroundSize: 'cover', backgroundRepeat:'repeat-x' }}

                >
                    <img src="/image/home/landing-img.png" alt="Marquee" />
                    <img src="/image/home/landing-img.png" alt="Marquee" />
                    <img src="/image/home/landing-img.png" alt="Marquee" />
                </div>
            </div>

            <Link to={`/portfolio`}>

                <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[160px] m-auto text-lg overflow-hidden flex items-center mt-10`}>
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                        <GoDotFill className="text-[#f8a065]" />
                        <span className="sliding-text hidden group-hover:block">View More</span>
                        <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                        <span className="sliding-text hidden group-hover:block">View More</span>
                        <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                        <span className="sliding-text">View More</span>
                    </div>
                </button>

            </Link>
        </div>
    )
}
