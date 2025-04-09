import React, { useState } from 'react'

export default function AboutDetails() {
    const [index, setIndex] = useState('1')
    return (
        <>
            <div className={`border border-black rounded-[70px] grid lg:grid-cols-2 overflow-hidden`}>
                <div className={`col-span-1 border-r border-black`}>
                    <div className={`px-10 py-6 sm:py-14 bg-[#c3d9bd] border-b border-black`}>
                        <h2 className={`text-3xl sm:text-[52px] font-semibold`}>Portfolio Styles</h2>
                    </div>
                    <div className={`sm:px-10 p-3 sm:py-8 ${index === "1" ? 'bg-white' : 'bg-[#c3d9bd]'} hover:bg-white border-b border-black cursor-pointer`} onMouseEnter={() => setIndex("1")}>
                        <div className={`flex items-center gap-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50.298" height="50.187" viewBox="0 0 137.298 135.187">
                                <defs>
                                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.521" gradientTransform="matrix(-0.242, -0.97, 1.147, -0.287, 0.047, 1.128)" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#f8a065"></stop>
                                        <stop offset="1" stop-color="#f0ead8" stop-opacity="0.369"></stop>
                                        <stop offset="1" stop-color="#ecece4" stop-opacity="0"></stop>
                                    </radialGradient>
                                </defs>
                                <g id="Group_683" data-name="Group 683" transform="translate(9064.631 -10067.445) rotate(138)">
                                    <path id="Path_120" data-name="Path 120" d="M18633.041-2860.222a7.992,7.992,0,0,1-2.783-.5,7.989,7.989,0,0,1-4.709-10.264c.91-2.46,22.9-60.494,73.01-81.655a7.99,7.99,0,0,1,6.117-.042,7.987,7.987,0,0,1,4.352,4.3,7.993,7.993,0,0,1-4.25,10.47c-43.664,18.435-64.043,71.953-64.246,72.491A8,8,0,0,1,18633.041-2860.222Z" transform="translate(-5192.701 1394.999)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_121" data-name="Path 121" d="M18713.535-2869.521a7.984,7.984,0,0,1-6.576-3.443c-6.264-9.044-57-43.62-87.5-63.288a8,8,0,0,1-2.383-11.047,7.987,7.987,0,0,1,11.043-2.386c13.621,8.783,82.076,53.317,91.977,67.623a7.988,7.988,0,0,1-2.02,11.119A7.954,7.954,0,0,1,18713.535-2869.521Z" transform="translate(-5204.566 1397.967)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_122" data-name="Path 122" d="M18633.055-2916.8a7.985,7.985,0,0,1-7.918-7.007,8,8,0,0,1,6.941-8.915c17.34-2.148,74.863-8.91,87.232-5.594a7.988,7.988,0,0,1,5.658,9.784,7.99,7.99,0,0,1-9.779,5.654c-6.391-1.706-47.094,1.794-81.141,6.017a7.968,7.968,0,0,1-.994.062Z" transform="translate(-5209.328 1413.045)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_123" data-name="Path 123" d="M18655.762-2850.322a8.019,8.019,0,0,1-3.4-.755c-23.289-10.869-18.277-90.955-15.242-99.62a7.99,7.99,0,0,1,10.184-4.9,7.993,7.993,0,0,1,4.9,10.183c-4.229,12.075-1.678,74.353,6.982,79.89a7.951,7.951,0,0,1,4.117,4.506,7.948,7.948,0,0,1-.289,6.1A7.993,7.993,0,0,1,18655.762-2850.322Z" transform="translate(-5180.576 1391.441)" fill="url(#radial-gradient)"></path>
                                </g>
                            </svg>
                            <h2 className={`text-3xl sm:text-[40px] font-semibold`}>Small Image</h2>
                        </div>
                    </div>
                    <div className={`sm:px-10 p-3 sm:py-8 ${index === "2" ? 'bg-white' : 'bg-[#c3d9bd]'} hover:bg-white border-b border-black cursor-pointer`} onMouseEnter={() => setIndex("2")}>
                        <div className={`flex items-center gap-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50.298" height="50.187" viewBox="0 0 137.298 135.187">
                                <defs>
                                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.521" gradientTransform="matrix(-0.242, -0.97, 1.147, -0.287, 0.047, 1.128)" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#f8a065"></stop>
                                        <stop offset="1" stop-color="#f0ead8" stop-opacity="0.369"></stop>
                                        <stop offset="1" stop-color="#ecece4" stop-opacity="0"></stop>
                                    </radialGradient>
                                </defs>
                                <g id="Group_683" data-name="Group 683" transform="translate(9064.631 -10067.445) rotate(138)">
                                    <path id="Path_120" data-name="Path 120" d="M18633.041-2860.222a7.992,7.992,0,0,1-2.783-.5,7.989,7.989,0,0,1-4.709-10.264c.91-2.46,22.9-60.494,73.01-81.655a7.99,7.99,0,0,1,6.117-.042,7.987,7.987,0,0,1,4.352,4.3,7.993,7.993,0,0,1-4.25,10.47c-43.664,18.435-64.043,71.953-64.246,72.491A8,8,0,0,1,18633.041-2860.222Z" transform="translate(-5192.701 1394.999)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_121" data-name="Path 121" d="M18713.535-2869.521a7.984,7.984,0,0,1-6.576-3.443c-6.264-9.044-57-43.62-87.5-63.288a8,8,0,0,1-2.383-11.047,7.987,7.987,0,0,1,11.043-2.386c13.621,8.783,82.076,53.317,91.977,67.623a7.988,7.988,0,0,1-2.02,11.119A7.954,7.954,0,0,1,18713.535-2869.521Z" transform="translate(-5204.566 1397.967)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_122" data-name="Path 122" d="M18633.055-2916.8a7.985,7.985,0,0,1-7.918-7.007,8,8,0,0,1,6.941-8.915c17.34-2.148,74.863-8.91,87.232-5.594a7.988,7.988,0,0,1,5.658,9.784,7.99,7.99,0,0,1-9.779,5.654c-6.391-1.706-47.094,1.794-81.141,6.017a7.968,7.968,0,0,1-.994.062Z" transform="translate(-5209.328 1413.045)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_123" data-name="Path 123" d="M18655.762-2850.322a8.019,8.019,0,0,1-3.4-.755c-23.289-10.869-18.277-90.955-15.242-99.62a7.99,7.99,0,0,1,10.184-4.9,7.993,7.993,0,0,1,4.9,10.183c-4.229,12.075-1.678,74.353,6.982,79.89a7.951,7.951,0,0,1,4.117,4.506,7.948,7.948,0,0,1-.289,6.1A7.993,7.993,0,0,1,18655.762-2850.322Z" transform="translate(-5180.576 1391.441)" fill="url(#radial-gradient)"></path>
                                </g>
                            </svg>
                            <h2 className={`text-3xl sm:text-[40px] font-semibold`}>Big Image</h2>
                        </div>
                    </div>
                    <div className={`sm:px-10 p-3 sm:py-8 ${index === "3" ? 'bg-white' : 'bg-[#c3d9bd]'} hover:bg-white border-b border-black cursor-pointer`} onMouseEnter={() => setIndex("3")}>
                        <div className={`flex items-center gap-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50.298" height="50.187" viewBox="0 0 137.298 135.187">
                                <defs>
                                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.521" gradientTransform="matrix(-0.242, -0.97, 1.147, -0.287, 0.047, 1.128)" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#f8a065"></stop>
                                        <stop offset="1" stop-color="#f0ead8" stop-opacity="0.369"></stop>
                                        <stop offset="1" stop-color="#ecece4" stop-opacity="0"></stop>
                                    </radialGradient>
                                </defs>
                                <g id="Group_683" data-name="Group 683" transform="translate(9064.631 -10067.445) rotate(138)">
                                    <path id="Path_120" data-name="Path 120" d="M18633.041-2860.222a7.992,7.992,0,0,1-2.783-.5,7.989,7.989,0,0,1-4.709-10.264c.91-2.46,22.9-60.494,73.01-81.655a7.99,7.99,0,0,1,6.117-.042,7.987,7.987,0,0,1,4.352,4.3,7.993,7.993,0,0,1-4.25,10.47c-43.664,18.435-64.043,71.953-64.246,72.491A8,8,0,0,1,18633.041-2860.222Z" transform="translate(-5192.701 1394.999)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_121" data-name="Path 121" d="M18713.535-2869.521a7.984,7.984,0,0,1-6.576-3.443c-6.264-9.044-57-43.62-87.5-63.288a8,8,0,0,1-2.383-11.047,7.987,7.987,0,0,1,11.043-2.386c13.621,8.783,82.076,53.317,91.977,67.623a7.988,7.988,0,0,1-2.02,11.119A7.954,7.954,0,0,1,18713.535-2869.521Z" transform="translate(-5204.566 1397.967)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_122" data-name="Path 122" d="M18633.055-2916.8a7.985,7.985,0,0,1-7.918-7.007,8,8,0,0,1,6.941-8.915c17.34-2.148,74.863-8.91,87.232-5.594a7.988,7.988,0,0,1,5.658,9.784,7.99,7.99,0,0,1-9.779,5.654c-6.391-1.706-47.094,1.794-81.141,6.017a7.968,7.968,0,0,1-.994.062Z" transform="translate(-5209.328 1413.045)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_123" data-name="Path 123" d="M18655.762-2850.322a8.019,8.019,0,0,1-3.4-.755c-23.289-10.869-18.277-90.955-15.242-99.62a7.99,7.99,0,0,1,10.184-4.9,7.993,7.993,0,0,1,4.9,10.183c-4.229,12.075-1.678,74.353,6.982,79.89a7.951,7.951,0,0,1,4.117,4.506,7.948,7.948,0,0,1-.289,6.1A7.993,7.993,0,0,1,18655.762-2850.322Z" transform="translate(-5180.576 1391.441)" fill="url(#radial-gradient)"></path>
                                </g>
                            </svg>
                            <h2 className={`text-3xl sm:text-[40px] font-semibold`}>Wide Image</h2>
                        </div>
                    </div>
                    <div className={`sm:px-10 p-3 sm:py-8 ${index === "4" ? 'bg-white' : 'bg-[#c3d9bd]'} hover:bg-white cursor-pointer`} onMouseEnter={() => setIndex("4")}>
                        <div className={`flex items-center gap-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50.298" height="50.187" viewBox="0 0 137.298 135.187">
                                <defs>
                                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.521" gradientTransform="matrix(-0.242, -0.97, 1.147, -0.287, 0.047, 1.128)" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#f8a065"></stop>
                                        <stop offset="1" stop-color="#f0ead8" stop-opacity="0.369"></stop>
                                        <stop offset="1" stop-color="#ecece4" stop-opacity="0"></stop>
                                    </radialGradient>
                                </defs>
                                <g id="Group_683" data-name="Group 683" transform="translate(9064.631 -10067.445) rotate(138)">
                                    <path id="Path_120" data-name="Path 120" d="M18633.041-2860.222a7.992,7.992,0,0,1-2.783-.5,7.989,7.989,0,0,1-4.709-10.264c.91-2.46,22.9-60.494,73.01-81.655a7.99,7.99,0,0,1,6.117-.042,7.987,7.987,0,0,1,4.352,4.3,7.993,7.993,0,0,1-4.25,10.47c-43.664,18.435-64.043,71.953-64.246,72.491A8,8,0,0,1,18633.041-2860.222Z" transform="translate(-5192.701 1394.999)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_121" data-name="Path 121" d="M18713.535-2869.521a7.984,7.984,0,0,1-6.576-3.443c-6.264-9.044-57-43.62-87.5-63.288a8,8,0,0,1-2.383-11.047,7.987,7.987,0,0,1,11.043-2.386c13.621,8.783,82.076,53.317,91.977,67.623a7.988,7.988,0,0,1-2.02,11.119A7.954,7.954,0,0,1,18713.535-2869.521Z" transform="translate(-5204.566 1397.967)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_122" data-name="Path 122" d="M18633.055-2916.8a7.985,7.985,0,0,1-7.918-7.007,8,8,0,0,1,6.941-8.915c17.34-2.148,74.863-8.91,87.232-5.594a7.988,7.988,0,0,1,5.658,9.784,7.99,7.99,0,0,1-9.779,5.654c-6.391-1.706-47.094,1.794-81.141,6.017a7.968,7.968,0,0,1-.994.062Z" transform="translate(-5209.328 1413.045)" fill="url(#radial-gradient)"></path>
                                    <path id="Path_123" data-name="Path 123" d="M18655.762-2850.322a8.019,8.019,0,0,1-3.4-.755c-23.289-10.869-18.277-90.955-15.242-99.62a7.99,7.99,0,0,1,10.184-4.9,7.993,7.993,0,0,1,4.9,10.183c-4.229,12.075-1.678,74.353,6.982,79.89a7.951,7.951,0,0,1,4.117,4.506,7.948,7.948,0,0,1-.289,6.1A7.993,7.993,0,0,1,18655.762-2850.322Z" transform="translate(-5180.576 1391.441)" fill="url(#radial-gradient)"></path>
                                </g>
                            </svg>
                            <h2 className={`text-3xl sm:text-[40px] font-semibold`}>Big Slider</h2>
                        </div>
                    </div>

                </div>
                <div className={`col-span-1 relative`} >
                    <img src={`/image/about/about${index}.jpg`} alt="Error" className='h-full object-cover lg:absolute w-full left-0' />
                </div>
            </div>
        </>
    )
}
