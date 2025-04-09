// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { BASE_URL, IMAGE_BASE_URL, orgId } from '../../utils/config';
// import Loader from '../layout/Loader';

// export default function FiveColumns() {
//     const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
//     const [tooltipAlignment, setTooltipAlignment] = useState({ x: 'left', y: 'top' });


//     const [portfolioData, setPortfolioData] = useState([])
//     const [loading, setloading] = useState(true)

//     useEffect(() => {
//         const fetchData = async () => {
//             const resp = await axios.get(`${BASE_URL}/all-portfolio?organizationId=${orgId}`)

//             if (resp?.data?.http_status_code === 200) {
//                 setloading(false)
//                 setPortfolioData(resp.data.data) 
//             }
//         }
//         fetchData()
//     }, [])
//     console.log(portfolioData)


//     if (loading) {
//         return <Loader />
//     }


//     const handleMouseMove = (e, container) => {
//         const rect = container.getBoundingClientRect();
//         const tooltipWidth = 300;
//         const tooltipHeight = 60;

//         let xPos = e.clientX - rect.left;
//         let yPos = e.clientY - rect.top;

//         let xAlign = 'left';
//         let yAlign = 'top';

//         if (xPos + tooltipWidth > rect.width) {
//             xAlign = 'right';
//             xPos = rect.width - tooltipWidth;
//         }

//         if (yPos + tooltipHeight > rect.height) {
//             yAlign = 'bottom';
//             yPos = rect.height - tooltipHeight;
//         }

//         setTooltipPosition({ x: xPos, y: yPos });
//         setTooltipAlignment({ x: xAlign, y: yAlign });
//     };


//     return (
//         <>
//             <div className={`overflow-hidden`}>
//                 <div className={`px-4 sm:px-10 py-5 sm:py-14 flex`}>
//                     <div className='relative'>
//                         <h2 className={`text-5xl sm:text-[52px] font-semibold z-10 relative`}>Five Columns</h2>
//                         <span className='absolute -top-8 -right-10 z-0'>
//                             <svg width="103.525" height="103.509" viewBox="0 0 103.525 103.509">
//                                 <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
//                                     <stop offset="0" stopColor="#f98030"></stop>
//                                     <stop offset="1" stopColor="#f0ce8c" stopOpacity="0.22"></stop>
//                                 </radialGradient>
//                                 <g transform="translate(-13411.246 1564.608)">
//                                     <path d="M18632.9-2862.17a7.819,7.819,0,0,1-2.723-.49,7.817,7.817,0,0,1-4.609-10.048c.887-2.409,22.412-59.226,71.475-79.941a7.821,7.821,0,0,1,10.25,4.164,7.825,7.825,0,0,1-4.162,10.25c-42.748,18.048-62.7,70.442-62.9,70.97a7.824,7.824,0,0,1-7.328,5.1Z" transform="translate(-5193.139 1394.866)" fill="url(#radial-gradient)"></path>
//                                     <path d="M18711.5-2871.23a7.815,7.815,0,0,1-6.443-3.37c-6.131-8.854-55.8-42.7-85.662-61.96a7.825,7.825,0,0,1-2.336-10.815,7.824,7.824,0,0,1,10.814-2.337c13.334,8.6,80.35,52.2,90.049,66.2a7.82,7.82,0,0,1-1.98,10.885A7.787,7.787,0,0,1,18711.5-2871.23Z" transform="translate(-5204.564 1397.723)" fill="url(#radial-gradient)"></path>
//                                     <path d="M18632.9-2917.27a7.821,7.821,0,0,1-7.756-6.86,7.823,7.823,0,0,1,6.8-8.727c16.977-2.1,73.293-8.724,85.4-5.478a7.823,7.823,0,0,1,5.539,9.579,7.822,7.822,0,0,1-9.576,5.536c-6.256-1.67-46.1,1.756-79.436,5.891a7.771,7.771,0,0,1-.975.059Z" transform="translate(-5209.404 1412.235)" fill="url(#radial-gradient)"></path>
//                                     <path d="M18655.3-2852.54a7.851,7.851,0,0,1-3.324-.739c-22.8-10.641-17.895-89.048-14.922-97.53a7.826,7.826,0,0,1,3.99-4.466,7.818,7.818,0,0,1,5.979-.334,7.821,7.821,0,0,1,4.8,9.97c-4.139,11.818-1.643,72.791,6.836,78.213a7.782,7.782,0,0,1,4.031,4.411,7.777,7.777,0,0,1-.281,5.969,7.826,7.826,0,0,1-7.109,4.506Z" transform="translate(-5181.479 1391.441)" fill="url(#radial-gradient)"></path>
//                                 </g>
//                             </svg>
//                         </span>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-2 border-b border-l border-r border-black sm:grid-cols-3 md:grid-cols-4">
//                     {portfolioData.map((item, index) => (
//                         <div
//                             key={index}
//                             className="col-span-1 border-l border-t border-black p-2 sm:p-5 lg:p-10 img_box relative cursor-pointer group"
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//                         >
//                             <img
//                                 src={`${IMAGE_BASE_URL}/${item?.banner_image}`}
//                                 alt={item?.title}
//                                 className="rounded-3xl"
//                             />
//                             <div
//                                 style={{
//                                     top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
//                                     bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
//                                     left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                     right: tooltipAlignment.x === 'right' ? '50px' : 'auto', // Add 10px space from the right
//                                 }}
//                                 className="absolute z-20 border border-black uppercase px-3 hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
//                             >
//                                 {item.title}
//                             </div>
//                             <div
//                                 style={{
//                                     top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
//                                     bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
//                                     left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
//                                     right: tooltipAlignment.x === 'right' ? '50px' : 'auto', // Add 10px space from the right
//                                 }}
//                                 className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black hidden group-hover:block p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg"
//                             >
//                                 {item.sub_title}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }



import React, { useState } from 'react';

export default function FiveColumns() {
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipAlignment, setTooltipAlignment] = useState({ x: 'left', y: 'top' });
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1265);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1265);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e, container, index) => {
        if (isMobile) return; // Don't handle mouse move on mobile
        
        const rect = container.getBoundingClientRect();
        const tooltipWidth = 300;
        const tooltipHeight = 60;

        let xPos = e.clientX - rect.left;
        let yPos = e.clientY - rect.top;

        let xAlign = 'left';
        let yAlign = 'top';

        if (xPos + tooltipWidth > rect.width) {
            xAlign = 'right';
            xPos = rect.width - tooltipWidth;
        }

        if (yPos + tooltipHeight > rect.height) {
            yAlign = 'bottom';
            yPos = rect.height - tooltipHeight;
        }

        setTooltipPosition({ x: xPos, y: yPos });
        setTooltipAlignment({ x: xAlign, y: yAlign });
    };

    const handleInteraction = (e, container, index) => {
        if (isMobile) {
            // For mobile: toggle tooltip on click
            e.preventDefault(); // Prevent any default touch behavior
            setHoveredIndex(hoveredIndex === index ? null : index);
        } else {
            // For desktop: set on hover
            setHoveredIndex(index);
            handleMouseMove(e, container, index);
        }
    };

    // const array = [
    //     { image: 'img1.jpg', title: 'Financial Services & Banking', description: 'Build Trust, Drive Engagement' },
    //     { image: 'img2.jpg', title: 'Retail & E-commerce', description: 'Drive Sales, Build Loyalty' },
    //     { image: 'img3.jpg', title: 'Real Estate', description: 'Generate Leads, Close Deals' },
    //     { image: 'img4.jpg', title: 'Education & E-Learning', description: 'Expand Reach, Inspire Learners' },
    //     { image: 'img5.jpg', title: 'Healthcare', description: 'Build Trust, Engage Patients' },
    //     { image: 'img6.jpg', title: 'Travel & Hospitality', description: 'Boost Bookings, Create Experiences' },
    //     { image: 'img7.jpg', title: 'Automotive', description: 'Accelerate Sales, Drive Leads' },
    //     { image: 'img8.jpg', title: 'Technology & IT Services', description: 'Showcase Innovation, Gain Trust' },
    //     { image: 'img9.jpg', title: 'Fashion & Apparel', description: 'Build a Trend, Drive Sales' },
    //     { image: 'img10.jpg', title: 'Food & Beverage', description: 'Create Cravings, Build Loyalty' },
    //     { image: 'img11.jpg', title: 'Nonprofit & Charity Organizations', description: 'Raise Awareness, Inspire Action' },
    //     { image: 'img12.jpg', title: 'Media & Entertainment', description: 'Engage Audiences, Boost Reach' },
    //     { image: 'img13.jpg', title: 'Legal Services', description: 'Build Credibility, Generate Leads' },
    //     { image: 'img14.jpg', title: 'Fitness & Wellness', description: 'Inspire Health, Drive Memberships' },
    //     { image: 'img15.jpg', title: 'Home Improvement & Interior Design', description: 'Inspire Renovations, Grow Leads' },
    //     { image: 'img9.jpg', title: 'Manufacturing & Industrial', description: 'Increase Visibility, Drive B2B Leads' },
    // ];

        const array = [
        { image: 'img1.jpg', title: 'Banking Services', description: 'Secure solutions for enhanced customer experiences.' },
        { image: 'img2.jpg', title: 'Food & Restaurant', description: 'Platforms for online orders and loyalty.' },
        { image: 'img3.jpg', title: 'Real Estate', description: 'Websites connecting buyers, sellers, and agents.' },
        { image: 'img4.jpg', title: 'E-Commerce & Retail', description: 'E-commerce solutions to boost sales.' },
        { image: 'img5.jpg', title: 'Healthcare', description: 'Apps for improved patient engagement.' },
        { image: 'img6.jpg', title: 'Transport & Logistics', description: 'Optimized supply chain management solutions.' },
        { image: 'img7.jpg', title: 'Education Services', description: 'Interactive platforms for learning.' },
        { image: 'img8.jpg', title: 'Media & Entertainment', description: 'Captivating content and platforms.' },
        { image: 'img9.jpg', title: 'Travel & Tourism', description: 'Seamless booking systems for travelers.' },
        { image: 'img10.jpg', title: 'Enterprise Mobility', description: 'Mobile solutions for business efficiency.' },
        { image: 'img11.jpg', title: 'On-Demand App Solutions', description: 'Apps for real-time services.' },
        { image: 'img12.jpg', title: 'Sports & Fitness', description: 'Engaging platforms for fitness enthusiasts.' }
    ];

    return (
        <>
            <div className="pt-10 sm:pt-20">
                <div className="space-y-2 grid justify-center">
                    <div className="m-auto relative">
                        {/* <img src="/image/about/smile.png" alt="Error1" className="absolute -top-10 sm:top-0 left-0 sm:-left-20 md:-left-10 w-[30px] animate_zoom_in delay-500" />
                        <img src="/image/about/woohoo.png" alt="Error1" className="absolute w-[100px] md:w-[150px] -right-10 -top-14 animate_zoom_in delay-1000" /> */}
                        {/* <h2 className="text-4xl sm:text-[52px] sm:leading-[55px] font-semibold text-center z-10 relative">Five columns</h2> */}
                        <div className='relative'>
                         <h2 className={`text-5xl sm:text-[52px] font-semibold z-10 relative mb-8`}>Expertise Across Industries</h2>
                         <span className='absolute -top-8 -right-10 z-0'>
                             <svg width="103.525" height="103.509" viewBox="0 0 103.525 103.509">
                                 <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                                     <stop offset="0" stopColor="#f98030"></stop>
                                     <stop offset="1" stopColor="#f0ce8c" stopOpacity="0.22"></stop>
                                 </radialGradient>
                                 <g transform="translate(-13411.246 1564.608)">
                                     <path d="M18632.9-2862.17a7.819,7.819,0,0,1-2.723-.49,7.817,7.817,0,0,1-4.609-10.048c.887-2.409,22.412-59.226,71.475-79.941a7.821,7.821,0,0,1,10.25,4.164,7.825,7.825,0,0,1-4.162,10.25c-42.748,18.048-62.7,70.442-62.9,70.97a7.824,7.824,0,0,1-7.328,5.1Z" transform="translate(-5193.139 1394.866)" fill="url(#radial-gradient)"></path>
                                     <path d="M18711.5-2871.23a7.815,7.815,0,0,1-6.443-3.37c-6.131-8.854-55.8-42.7-85.662-61.96a7.825,7.825,0,0,1-2.336-10.815,7.824,7.824,0,0,1,10.814-2.337c13.334,8.6,80.35,52.2,90.049,66.2a7.82,7.82,0,0,1-1.98,10.885A7.787,7.787,0,0,1,18711.5-2871.23Z" transform="translate(-5204.564 1397.723)" fill="url(#radial-gradient)"></path>
                                     <path d="M18632.9-2917.27a7.821,7.821,0,0,1-7.756-6.86,7.823,7.823,0,0,1,6.8-8.727c16.977-2.1,73.293-8.724,85.4-5.478a7.823,7.823,0,0,1,5.539,9.579,7.822,7.822,0,0,1-9.576,5.536c-6.256-1.67-46.1,1.756-79.436,5.891a7.771,7.771,0,0,1-.975.059Z" transform="translate(-5209.404 1412.235)" fill="url(#radial-gradient)"></path>
                                     <path d="M18655.3-2852.54a7.851,7.851,0,0,1-3.324-.739c-22.8-10.641-17.895-89.048-14.922-97.53a7.826,7.826,0,0,1,3.99-4.466,7.818,7.818,0,0,1,5.979-.334,7.821,7.821,0,0,1,4.8,9.97c-4.139,11.818-1.643,72.791,6.836,78.213a7.782,7.782,0,0,1,4.031,4.411,7.777,7.777,0,0,1-.281,5.969,7.826,7.826,0,0,1-7.109,4.506Z" transform="translate(-5181.479 1391.441)" fill="url(#radial-gradient)"></path>
                                 </g>
                             </svg>
                        </span>                     </div>
                    </div>
                </div>
            </div>
            <div className="overflow-visible custom_global_space">
                <div className="grid grid-cols-2 border-b border-l border-r border-black sm:grid-cols-3 md:grid-cols-4">
                    {array.map((item, index) => (
                        <div
                            key={index}
                            className="col-span-1 border-l border-t border-black p-2 sm:p-5 lg:p-10 img_box relative cursor-pointer group"
                            onClick={(e) => handleInteraction(e, e.currentTarget, index)}
                            onMouseMove={!isMobile ? (e) => handleMouseMove(e, e.currentTarget, index) : undefined}
                            onMouseEnter={!isMobile ? (e) => handleInteraction(e, e.currentTarget, index) : undefined}
                            onMouseLeave={!isMobile ? () => setHoveredIndex(null) : undefined}
                        >
                            <img
                                src={`/image/home/img/img${index + 1}.jpg`}
                                alt={`Error${index}`}
                                className="rounded-3xl"
                            />
                            {hoveredIndex === index && (
                                isMobile ? (
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 w-[90%]">
                                        <div className="w-full border border-black bg-white rounded-lg shadow-lg px-3 py-2">
                                            <div className="uppercase text-sm text-center">
                                                {item.title}
                                            </div>
                                        </div>
                                        <div className="w-full border border-black bg-white rounded-lg shadow-lg px-3 py-2">
                                            <div className="text-xl font-semibold text-center">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            style={{
                                                top: tooltipAlignment.y === 'top' ? tooltipPosition.y : 'auto',
                                                bottom: tooltipAlignment.y === 'bottom' ? 0 : 'auto',
                                                left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
                                                right: tooltipAlignment.x === 'right' ? '50px' : 'auto'
                                            }}
                                            className="absolute z-20 border border-black uppercase px-3 block p-2 whitespace-nowrap bg-white text-sm rounded-lg shadow-lg"
                                        >
                                            {item.title}
                                        </div>
                                        <div
                                            style={{
                                                top: tooltipAlignment.y === 'top' ? tooltipPosition.y + 40 : 'auto',
                                                bottom: tooltipAlignment.y === 'bottom' ? 40 : 'auto',
                                                left: tooltipAlignment.x === 'left' ? tooltipPosition.x : 'auto',
                                                right: tooltipAlignment.x === 'right' ? '50px' : 'auto'
                                            }}
                                            className="absolute custom_tool_tip z-20 text-xl font-semibold border border-black block p-2 whitespace-nowrap bg-white rounded-lg shadow-lg"
                                        >
                                            {item.description}
                                        </div>
                                    </>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
