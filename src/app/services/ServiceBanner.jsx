import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function DynamicServiceBanner() {
    const location = useLocation();
    const [heading, setHeading] = useState('Reach wider audiences authentically.');

    useEffect(() => {
        // Set different headings based on the current route
        if (location.pathname === '/web-design') {
            setHeading('Create stunning web experiences.');
        } else if (location.pathname === '/growth-advertising') {
            setHeading('Scale your business with smart ads.');
        } else if (location.pathname === '/creative-marketing') {
            setHeading('Engage customers with creative strategies.');
        } else {
            // Default heading for other routes
            setHeading('Reach wider audiences authentically.');
        }
    }, [location.pathname]);

    return (
        <div className="rounded-b-[30px] bg-[#F0EAD8]">
            <div className="grid lg:grid-cols-12 custom_container px-8 gap-y-10 sm:gap-y-20 !pb-0">
                <div className="lg:col-span-7 h-full content-around relative">
                    <img src="/image/home/happy.webp" alt="Happy" className="absolute right-40 lg:-right-12 lg:top-20 z-0 hidden sm:block" />
                    <h1 className="sm:w-[83%] lg:w-full text-5xl sm:text-[60px] sm:!leading-[65px] xl:text-[64px] xl:leading-[60px] lg:leading-[74px] font-semibold z-10 relative">
                        {heading}
                    </h1>
                    <img src="../../image/home/banner-1.webp" alt="Banner" className="absolute sm:-left-6" />
                </div>
                <div className="lg:col-span-5">
                    <img src="/image/banner/banner.png" alt="Banner" className="w-fit m-auto lg:w-full h-full z-20" />
                </div>
            </div>
        </div>
    );
}
// import React from 'react';

// export default function ServiceBanner() {
//     return (
//         <>
//             <div className="relative w-full h-full max-h-[550px] overflow-hidden">
//                 <img src='/image/services/shop-home-img2.jpg' alt='service-banner' title='service-banner'
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                 />
//                 <div className="qodef-shortcode qodef-m qodef-memory-cards qodef-layout--default">
//                     <div className="qodef-background-image"></div>
//                     <div className="qodef-grid-inner">
//                         {[...Array(15)].map((_, index) => (
//                             <article className="hover-container" key={index}>
//                                 <div className="hover-box">
//                                     <div className='w-full h-full m-auto'>
//                                         <img src={`/image/services/shop-list-img${index + 1}.jpg`} alt='service-banner' title='service-banner'
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>

//                                 </div>
//                                 <div className="qodef-m-top-holder">
//                                 </div>
//                             </article>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
