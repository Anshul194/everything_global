import React, { useEffect, useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { Link, useLocation } from 'react-router-dom'

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
    const location = useLocation();
    const [filteredServices, setFilteredServices] = useState([]);
    
    // Define all services categorized by type
    const allServices = {
        webDesign: [
            { title: 'UI/UX Design', image: '/image/portfoilo/port1.jpg', link: '/web-design/uiux-design' },
            { title: 'Website Design & Development', image: '/image/portfoilo/port4.jpg', link: '/web-design/website-design' },
            { title: 'Custom Web Applications', image: '/image/portfoilo/port7.jpg', link: '/web-design/web-application' },
            { title: 'SaaS Product Development', image: '/image/portfoilo/port10.jpg', link: '/web-design/saas-development' },
            { title: 'Seo Services', image: '/image/portfoilo/port10.jpg', link: '/web-design/seo-services' }
        ],
        growthAdvertising: [
            { title: 'Influencer Marketing', image: '/image/portfoilo/port6.jpg', link: '/growth-advertising/influencer-marketing' },
            { title: 'E-commerce Marketing', image: '/image/portfoilo/port9.jpg', link: '/growth-advertising/ecommerce-marketing' },
            { title: 'Facebook Ads', image: '/image/portfoilo/port2.jpg', link: '/growth-advertising/facebook-ads' },
            { title: 'PPC (Pay-Per-Click)', image: '/image/portfoilo/port5.jpg', link: '/growth-advertising/ppc' },
            { title: 'YouTube Marketing', image: '/image/portfoilo/port14.jpg', link: '/growth-advertising/youtube-marketing' },
            { title: 'Email Marketing', image: '/image/portfoilo/port12.jpg', link: '/growth-advertising/email-marketing' }
        ],
        creativeMarketing: [
            { title: 'Branding', image: '/image/portfoilo/port1.jpg', link: '/creative-marketing/branding' },
            { title: 'Graphic Design', image: '/image/portfoilo/port4.jpg', link: '/creative-marketing/graphic-design' },
            { title: '3D Branding', image: '/image/portfoilo/port7.jpg', link: '/creative-marketing/3d-branding' },
            { title: 'Product Photography', image: '/image/portfoilo/port10.jpg', link: '/creative-marketing/product-photography' },
            { title: 'Modeling', image: '/image/portfoilo/port11.jpg', link: '/creative-marketing/modeling' },
            { title: 'Video Editing', image: '/image/portfoilo/port13.jpg', link: '/creative-marketing/video-editing' },
            { title: 'Social Media Management', image: '/image/portfoilo/port3.jpg', link: '/creative-marketing/social-media-management' },
            { title: 'Motion Graphics', image: '/image/portfoilo/port8.jpg', link: '/creative-marketing/motion-graphics' }
        ]
    };

    // Determine which services to display based on the current path
    useEffect(() => {
        const path = location.pathname;
        
        if (path.includes('/web-design')) {
            setFilteredServices(allServices.webDesign);
        } else if (path.includes('/growth-advertising')) {
            setFilteredServices(allServices.growthAdvertising);
        } else if (path.includes('/creative-marketing')) {
            setFilteredServices(allServices.creativeMarketing);
        } else {
            // On main services page, show all services
            setFilteredServices([
                ...allServices.webDesign,
                ...allServices.growthAdvertising,
                ...allServices.creativeMarketing
            ]);
        }
    }, [location.pathname]);

    // Function to divide services into columns
    const divideIntoColumns = (services) => {
        const columns = [[], [], []];
        
        services.forEach((service, index) => {
            columns[index % 3].push(service);
        });
        
        return columns;
    };
    
    const columns = divideIntoColumns(filteredServices);

    return (
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20`}>
            {columns.map((column, columnIndex) => (
                <div key={columnIndex} className={`col-span-1`}>
                    <div className={`flex flex-col gap-20`}>
                        {column.map((service, serviceIndex) => (
                            <div key={serviceIndex} className={`space-y-3 group cursor-pointer`}>
                                <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
                                    <img 
                                        src={service.image} 
                                        className='group-hover:scale-110 transition-transform duration-300 ease-in-out' 
                                        alt={service.title} 
                                    />
                                </div>
                                <AnimatedText text={service.title} link={service.link} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

// import React from 'react'
// import { GoDotFill } from 'react-icons/go'
// import { Link } from 'react-router-dom'

// const AnimatedText = ({ text, link }) => {
//     return (
//         <div className="relative group">
//             <Link to={link} className='flex items-center gap-2'>
//                 <GoDotFill className="fill-[#F8A065] absolute left-0 opacity-0 transition-all duration-500 ease-in-out transform -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" />
//                 <span className="transition-all duration-500 ease-in-out group-hover:ml-6 font-semibold text-xl ">{text}</span>
//             </Link>
//         </div>
//     )
// }
// export default function AllServices() {
//     return (
//         <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20`}>
//             <div className={`col-span-1`}>
//                 <div className={`flex flex-col gap-20`}>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port1.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Branding`} link={`/creative-marketing/branding`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port4.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Graphic Design`} link={`/creative-marketing/graphic-design`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port7.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`3D Branding`} link={`/creative-marketing/3d-branding`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port10.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Product Photography`} link={`/creative-marketing/product-photography`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port13.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Video Editing`} link={`/creative-marketing/video-editing`} />
//                     </div>
//                 </div>
//             </div>
//             <div className={`col-span-1`}>
//                 <div className={`flex flex-col gap-20`}>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port2.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Facebook Ads`} link={`/growth-advertising/facebook-ads`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port5.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`PPC (Pay-Per-Click)`} link={`/growth-advertising/ppc`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port8.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Motion Graphics`} link={`/creative-marketing/motion-graphics`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port11.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Modeling`} link={`/creative-marketing/modeling`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port14.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`YouTube Marketing`} link={`/growth-advertising/youtube-marketing`} />
//                     </div>
//                 </div>
//             </div>
//             <div className={`col-span-1`}>
//                 <div className={`flex flex-col gap-20`}>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port3.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Social Media Management`} link={`/creative-marketing/social-media-management`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port6.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Influencer Marketing`} link={`/growth-advertising/influencer-marketing`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port9.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`E-commerce Marketing`} link={`/growth-advertising/ecommerce-marketing`} />
//                     </div>
//                     <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port12.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`Email Marketing`} link={`/growth-advertising/email-marketing`} />
//                     </div>
//                     {/* <div className={`space-y-3 group cursor-pointer`}>
//                         <div className={`h-full border border-[#858382] w-full rounded-xl overflow-hidden relative`}>
//                             <img src="/image/portfoilo/port15.jpg" className='group-hover:scale-110 transition-transform duration-300 ease-in-out' alt="port1" />
//                         </div>
//                         <AnimatedText text={`SEO`} link={`/growth-advertising/seo`} />
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     )
// }
