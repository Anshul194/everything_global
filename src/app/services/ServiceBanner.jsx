import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ServiceBanner() {
    const location = useLocation();
    const [bannerImage, setBannerImage] = useState('/image/portfoilo/port6.jpg');

    useEffect(() => {
        // Set different banner images based on the current route
        if (location.pathname === '/web-design') {
            setBannerImage('/image/portfoilo/port2.jpg');
        } else if (location.pathname === '/growth-advertising') {
            setBannerImage('/image/portfoilo/port4.jpg');
        } else if (location.pathname === '/creative-marketing') {
            setBannerImage('/image/portfoilo/port6.jpg');
        } else {
            // Default image for other routes
            setBannerImage('/image/portfoilo/port6.jpg');
        }
    }, [location.pathname]);

    return (
        <>
            <div className="relative w-full h-full max-h-[550px] overflow-hidden">
                <img 
                    src={bannerImage} 
                    alt='service-banner' 
                    title='service-banner'
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="qodef-shortcode qodef-m qodef-memory-cards qodef-layout--default">
                    <div className="qodef-background-image"></div>
                    <div className="qodef-grid-inner">
                        {[...Array(15)].map((_, index) => (
                            <article className="hover-container" key={index}>
                                <div className="hover-box">
                                    <div className='w-full h-full m-auto'>
                                        <img 
                                            src={`/image/portfoilo/port${index + 1}.jpg`} 
                                            alt='service-banner' 
                                            title='service-banner'
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="qodef-m-top-holder">
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
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
