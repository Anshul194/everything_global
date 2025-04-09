import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/config';
import {LinkedinShareButton,TwitterShareButton,FacebookShareButton} from "react-share"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import moment from 'moment'

import Sidebar from '../blog/Sidebar';
import NewsSidebar from './NewsSidebar';


const News = () => {
    const { id } = useParams()
       const [blogPosts, setBlogData] = useState();
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const currentPageUrl = window.location.href;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/get-news/${id}`);
                setBlogData(response.data.data);
                console.log(response.data.data)
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch blog data.");
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [id]);
  return (
    <>
    <div className='space-y-5'>
        
        <div className={`grid grid-cols-12 gap-y-10 w-[90%] m-auto`}>
            <div className='col-span-12 lg:col-span-8'>
                <div className="grid">
                    <div className="space-y-4">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden">
                            <img src={blogPosts?.banner_image} alt={blogPosts?._id} className="h-full object-cover w-full" />
                            <div className="border border-black rounded-xl bg-[#F8A065] absolute top-6 left-6 p-2 w-min text-center">
                                <h4 className="text-2xl font-semibold">{blogPosts?.createdAt ? moment(blogPosts.createdAt, "DD-MM-YYYY").format("DD MMM") : null}</h4>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                       <div className="custom_tool_tip z-20 text-xl px-6 font-semibold relative  border border-black p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg" >
                        <div className='flex gap-4'>
                          <LinkedinShareButton url={currentPageUrl}  >  <div className={`hover:text-[#F8A065] text-sm cursor-pointer`}><FaLinkedin /></div></LinkedinShareButton>
                           <FacebookShareButton url={currentPageUrl} quote="Please share this post" hashtag='#codeyes'> <div className={`hover:text-[#F8A065] text-sm cursor-pointer `}><FaFacebook /></div></FacebookShareButton>
                           <TwitterShareButton url={currentPageUrl}> <div className={`hover:text-[#F8A065] text-sm cursor-pointer `}><FaTwitter /></div></TwitterShareButton>
                            {/* <div className={`hover:text-[#F8A065] text-sm cursor-pointer`}><FaInstagram /></div> */}
                        </div>
                    </div>
                       </div>
                        <div className="space-y-2 py-4 lg:py-8">
                            {/* <p className="uppercase ">({blogPosts?.category?.name})</p> */}
                            <h2 className="capitalize text-2xl sm:text-3xl lg:text-5xl font-semibold">{blogPosts?.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: blogPosts?.content }}></p>
                        </div>
                    </div>
                </div>
                
                {/* <ProfileCard
                    name={blogPosts?.authorName || "Steven Zissou"}
                    role={blogPosts?.authorRole ||"MARKETING"}
                    description={blogPosts?.authorDescription ||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua."}
                    imageUrl={blogPosts?.authorProfile ||"https://i.pravatar.cc/150?img=32"}
                /> */}
                
                
                
            </div>
            <div className='col-span-12 lg:col-span-1 hidden lg:block'></div>
                 <div className='col-span-12 md:col-span-4 lg:col-span-3 max-lg:order-1'>
                        <NewsSidebar />
                    </div>
           
           

        </div>
    </div >

</>
  )
}

export default News


// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { BASE_URL } from '../../utils/config';
// import {LinkedinShareButton,TwitterShareButton,FacebookShareButton} from "react-share"
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import moment from 'moment'

// import Sidebar from '../blog/Sidebar';
// import NewsSidebar from './NewsSidebar';


// const News = () => {
//     const { id } = useParams()
//        const [blogPosts, setBlogData] = useState();
//         const [loading, setLoading] = useState(true);
//         const [error, setError] = useState(null);
//         const currentPageUrl = window.location.href;

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const response = await axios.get(`${BASE_URL}/get-news/${id}`);
//                 setBlogData(response.data.data);
//                 console.log(response.data.data)
//                 setLoading(false);
//             } catch (err) {
//                 setError("Failed to fetch blog data.");
//                 setLoading(false);
//             }
//         };

//         fetchBlogs();
//     }, [id]);
//   return (
//     <>
//     <div className='space-y-5'>
        
//         <div className={`grid grid-cols-12 gap-y-10 w-[90%] m-auto`}>
//             <div className='col-span-12 lg:col-span-8'>
//                 <div className="grid">
//                     <div className="space-y-4">
//                         <div className="relative h-[500px] rounded-2xl overflow-hidden">
//                             <img src={blogPosts?.banner_image} alt={blogPosts?._id} className="h-full object-cover w-full" />
//                             <div className="border border-black rounded-xl bg-[#f8a065] absolute top-6 left-6 p-2 w-min text-center">
//                                 <h4 className="text-2xl font-semibold">{blogPosts?.createdAt ? moment(blogPosts.createdAt, "DD-MM-YYYY").format("DD MMM") : null}</h4>
//                             </div>
//                         </div>
//                         <div className="custom_tool_tip z-20 text-xl px-6 font-semibold relative  border border-black p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg" >
//                         <div className='flex gap-4'>
//                           <LinkedinShareButton url={currentPageUrl}  >  <div className={`hover:text-[#f8a065] text-sm cursor-pointer`}><FaLinkedin /></div></LinkedinShareButton>
//                            <FacebookShareButton url={currentPageUrl} quote="Please share this post" hashtag='#codeyes'> <div className={`hover:text-[#f8a065] text-sm cursor-pointer `}><FaFacebook /></div></FacebookShareButton>
//                            <TwitterShareButton url={currentPageUrl}> <div className={`hover:text-[#f8a065] text-sm cursor-pointer `}><FaTwitter /></div></TwitterShareButton>
//                             {/* <div className={`hover:text-[#f8a065] text-sm cursor-pointer`}><FaInstagram /></div> */}
//                         </div>
//                     </div>
//                         <div className="space-y-2 py-4 lg:py-8">
//                             {/* <p className="uppercase ">({blogPosts?.category?.name})</p> */}
//                             <h2 className="capitalize text-2xl sm:text-3xl lg:text-5xl font-semibold">{blogPosts?.title}</h2>
//                             <p dangerouslySetInnerHTML={{ __html: blogPosts?.content }}></p>
//                         </div>
//                     </div>
//                 </div>
                
//                 {/* <ProfileCard
//                     name={blogPosts?.authorName || "Steven Zissou"}
//                     role={blogPosts?.authorRole ||"MARKETING"}
//                     description={blogPosts?.authorDescription ||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua."}
//                     imageUrl={blogPosts?.authorProfile ||"https://i.pravatar.cc/150?img=32"}
//                 /> */}
                
                
                
//             </div>
//             <div className='col-span-12 lg:col-span-1 hidden lg:block'></div>
//                  <div className='col-span-12 md:col-span-4 lg:col-span-3 max-lg:order-1'>
//                         <NewsSidebar />
//                     </div>
           
           

//         </div>
//     </div >

// </>
//   )
// }

// export default News
