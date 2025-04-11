import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import Loader from '../layout/Loader';
import moment from 'moment';
import { stripHtml } from "string-strip-html";
import { BASE_URL, orgId } from '../../utils/config';
import { Link } from 'react-router-dom';

export default function News() {
    const [blogPosts, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Add these new states for the load more/less functionality
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [allPostsLoaded, setAllPostsLoaded] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Function to load more posts
    const loadMorePosts = () => {
        // If we've already loaded all posts, don't try to load more
        if (allPostsLoaded) return;
        
        // Otherwise, show 3 more posts
        setVisiblePosts(prevVisiblePosts => {
            const newValue = prevVisiblePosts + 3;
            setExpanded(true);
            
            // If this would display all fetched posts, mark all posts as loaded
            if (newValue >= blogPosts.length) {
                setAllPostsLoaded(true);
            }
            
            return newValue;
        });
    };

    // Function to see fewer posts
    const seeLessPosts = () => {
        setVisiblePosts(3);
        setAllPostsLoaded(false);
        setExpanded(false);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Changed endpoint from all-news to get-blog
                const response = await axios.get(`${BASE_URL}/get-blog?organizationId=${orgId}`);
                
                setBlogData(response.data.data);
                setLoading(false);
                
                // If we have 3 or fewer posts total, mark all as loaded
                if (response.data.data && response.data.data.length <= 3) {
                    setAllPostsLoaded(true);
                }
            } catch (err) {
                setError("Failed to fetch blog data.");
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className={`custom_container`}>
                <h2 className='text-3xl sm:text-[54px] mb-14 font-extrabold text-center'>Here Come The Blog </h2>

                <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4`}>
                    {
                        blogPosts && blogPosts.slice(0, visiblePosts).map((item, index) => {
                            const parsedContent = item?.content ? stripHtml(item.content).result : "";

                            const limitedContent = parsedContent.split(" ").slice(0, 150).join(" ") + (parsedContent.split(" ").length > 100 ? "..." : "");
                            const limitedTitle = item?.title?.length > 25 ? item?.title.substring(0, 25) + "..." : item?.title;

                            return (
                                <div className={`col-span-1 border border-black rounded-[50px] overflow-hidden space-y-4`} key={index}>
                                    <div className={`relative h-[300px] border-b border-black  rounded-[50px] overflow-hidden`}>
                                        <img src={item?.banner_image} alt="blog1" className='h-full object-cover w-full' />
                                    </div>
                                    <div className={`space-y-2 p-4 lg:p-8`}>
                                        <p className='uppercase text-sm'>({item?.category?.name || item?.category})</p>
                                        <h2 className='capitalize text-xl lg:text-2xl font-semibold'>{limitedTitle}</h2>
                                        <Link to={`/post/${item.id}`} className='flex uppercase text-sm items-center gap-2'>
                                           <p className="flex cursor-pointer uppercase text-sm items-center gap-1 group mt-4">
                                                <GoDotFill className="text-[#f8a065] transition-all duration-500 ease-in-out transform group-hover:translate-x-2 group-hover:opacity-0" />
                                                <span className="transition-all duration-500 ease-in-out group-hover:translate-x-2">Read More</span>
                                                <GoDotFill className="hidden text-[#f8a065] transition-all duration-500 ease-in-out transform group-hover:inline group-hover:translate-x-2 group-hover:opacity-100" />
                                           </p> 
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Add Load More / See Less buttons */}
                <div className='my-6 sm:my-12 flex justify-center'>
                    {!allPostsLoaded && blogPosts.length > visiblePosts && (
                        <button
                            onClick={loadMorePosts}
                            className="relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[160px] m-2 text-lg overflow-hidden flex items-center"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#F8A065] rounded-full group-hover:w-full group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                            <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                                <GoDotFill className="text-[#F8A065]" />
                                <span className="sliding-text hidden group-hover:block">Load More</span>
                                <GoDotFill className="text-[#F8A065] hidden group-hover:block" />
                                <span className="sliding-text hidden group-hover:block">Load More</span>
                                <GoDotFill className="text-[#F8A065] hidden group-hover:block" />
                                <span className="sliding-text">Load More</span>
                            </div>
                        </button>
                    )}
                    
                    {expanded && visiblePosts > 3 && (
                        <button
                            onClick={seeLessPosts}
                            className="relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[160px] m-2 text-lg overflow-hidden flex items-center"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#F8A065] rounded-full group-hover:w-full group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                            <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                                <GoDotFill className="text-[#F8A065]" />
                                <span className="sliding-text hidden group-hover:block">See Less</span>
                                <GoDotFill className="text-[#F8A065] hidden group-hover:block" />
                                <span className="sliding-text hidden group-hover:block">See Less</span>
                                <GoDotFill className="text-[#F8A065] hidden group-hover:block" />
                                <span className="sliding-text">See Less</span>
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { GoDotFill } from 'react-icons/go'
// import Loader from '../layout/Loader';
// import moment from 'moment';
// import { stripHtml } from "string-strip-html";
// import { BASE_URL, orgId } from '../../utils/config';
// import { Link } from 'react-router-dom';

// export default function News() {
//     const [blogPosts, setBlogData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const response = await axios.get(`${BASE_URL}/all-news?organizationId=${orgId}`);

//                 setBlogData(response.data.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError("Failed to fetch blog data.");
//                 setLoading(false);
//             }
//         };

//         fetchBlogs();
//     }, []);

//     if (loading) {
//         return <Loader />;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <>
//             <div className={`custom_container`}>
//                 <h2 className='text-3xl sm:text-[54px] mb-14 font-extrabold text-center'>Here Come The News</h2>

//                 <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4`}>
//                     {
//                         blogPosts && blogPosts.map((item, index) => {
//                             const parsedContent = item?.content ? stripHtml(item.content).result : "";


//                             const limitedContent = parsedContent.split(" ").slice(0, 150).join(" ") + (parsedContent.split(" ").length > 100 ? "..." : "");
//                             const limitedTitle = item?.title?.length > 25 ? item?.title.substring(0, 25) + "..." : item?.title;

//                             return (
//                                 <div className={`col-span-1 border border-black rounded-[50px] overflow-hidden space-y-4`} key={index}>
//                                     <div className={`relative h-[300px] border-b border-black  rounded-[50px] overflow-hidden`}>
//                                         <img src={item?.banner_image} alt="blog1" className='h-full object-cover w-full' />
//                                         <div className={`border border-black rounded-xl bg-[#f8a065] absolute top-6 right-6 p-2 w-min text-center`}>
//                                             <h4 className='text-2xl font-semibold'> {item?.createdAt ? moment(item.createdAt, "DD-MM-YYYY").format("DD MMM") : null}</h4>
//                                         </div>
//                                     </div>
//                                     <div className={`space-y-2 p-4 lg:p-8`}>
//                                         <p className='uppercase text-sm'>({item?.category})</p>
//                                         <h2 className='capitalize text-xl lg:text-2xl font-semibold'>{limitedTitle}</h2>
//                                         {/* <p className='text-sm'>{limitedContent}</p> */}
//                                         {/* <p className='flex uppercase text-sm items-center gap-2'>
//                                             <GoDotFill className='text-[#f8a065]' />  Read More
//                                         </p> */}
//                                         <Link to={`/news/${item.id}` }className='flex uppercase text-sm items-center gap-2'>
//                                            <p className="flex cursor-pointer uppercase text-sm items-center gap-1 group mt-4">
//                                                     <GoDotFill className="text-[#f8a065] transition-all duration-500 ease-in-out transform group-hover:translate-x-2 group-hover:opacity-0" />
//                                                      <span className="transition-all duration-500 ease-in-out group-hover:translate-x-2">Read More</span>
//                                                     <GoDotFill className="hidden text-[#f8a065] transition-all duration-500 ease-in-out transform group-hover:inline group-hover:translate-x-2 group-hover:opacity-100" />
//                                                                                                </p> 
//                                         </Link>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }
