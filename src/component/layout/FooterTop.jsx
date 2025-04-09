import React from 'react';
import Button from '../common/Button';
import { GoDotFill } from 'react-icons/go';

export default function FooterTop() {

    return (
        <div className={`py-20 sm:py-32`}>
            <div className="space-y-2 grid justify-center">
                <div className='m-auto relative'>
                    <img src="/image/home/happy.webp" alt="Error1" className='absolute bottom-[120px] md:left-[-72px]' />
                    <img src="/image/home/about-us3.webp" alt="Error1" className='absolute w-[130px] top-[-50px] right-2 md:-right-10' />
                    <h2 className="text-[52px] font-semibold text-center mb-6 z-10 relative">Want To Work With Us?</h2>
                    <div className="flex justify-center mt-10">
                        <div className="overflow-hidden  max-w-xs">
                            <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[160px] m-auto text-lg overflow-hidden flex items-center`}>
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
                        </div>
                    </div>
                    <img src="/image/home/hello.webp" alt="Error1" className='absolute w-[80px] bottom-0 md:left-[-72px]' />
                    <img src="/image/home/about-2.png" alt="Error1" className='absolute w-[50px] bottom-0 right-2 md:-right-10' />
                </div>
            </div>
        </div>
    );
}
