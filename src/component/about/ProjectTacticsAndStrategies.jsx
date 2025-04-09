import React from 'react';
import Button from '../common/Button';
import { GoDotFill } from 'react-icons/go';

const ProjectTacticsAndStrategies = () => {
    return (
        <div className="flex items-center justify-between bg-[#e0f4ff] rounded-[50px] w-full border border-black">
            <div className='grid lg:grid-cols-5'>
                {/* Left Section */}
                <div className="col-span-2 p-10 xl:pt-28 xl:pl-28 xl:pr-24 lg:border-r border-black">
                    <div className='h-full grid justify-between'>
                        <div >
                            <h1 className="text-3xl sm:text-[54px] sm:leading-[60px] font-semibold mb-4 ">Project Tactics And Strategies</h1>
                            <p className=" mb-8">
                                Morbi leo urna molestie at. Enim praesent elementum facilisis leo vel fringilla est.
                                Nisl nunc mi ipsum faucibus.
                            </p>
                        </div>
                        <div className='mt-auto lg:mb-10'>
                            {/* <button className="flex items-center gap-2 h-auto px-6 py-3 border border-gray-900 rounded-full hover:bg-[#f8a065] hover:text-white transition-all">
                                <span className="text-sm font-semibold">● EXPLORE</span>
                            </button> */}

                            <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[140px] m-auto text-lg overflow-hidden flex items-center mt-10`}>
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                                <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                                    <GoDotFill className="text-[#f8a065]" />
                                    <span className="sliding-text hidden group-hover:block">EXPLORE</span>
                                    <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                                    <span className="sliding-text hidden group-hover:block">EXPLORE</span>
                                    <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                                    <span className="sliding-text">EXPLORE</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-span-3 relative p-10">
                    <img src="/image/about/p2-img5-1.jpg" alt="ProjectImage" className="rounded-3xl" />

                    {/* Overlay Buttons */}
                    {/* <div className="absolute bottom-8 right-8 flex flex-col gap-4">
                        <button className="p-4 bg-white rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <button className="p-4 bg-white rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-2 5H5" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectTacticsAndStrategies
