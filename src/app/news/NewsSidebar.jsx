   

import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { BASE_URL, orgId } from "../../utils/config";
import Loader from "../../component/layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addAllBlog, setShowBlogs } from "../../utils/blogSlice";
import { Link, useNavigate } from "react-router-dom";

export default function NewsSidebar() {
  const [categories, setCategories] = useState();  
  const dispatch = useDispatch();
const [allBlogs,setBlogData]=useState([])
  const navigate = useNavigate();

  
  const [tagloading, setTagLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
       
            const response = await axios.get(`${BASE_URL}/all-news?organizationId=${orgId}`);
            setBlogData(response.data.data);
            setTagLoading(false)
    };

    fetchBlogs();
}, []);

 
  if (tagloading) {
    return <Loader />;
  }
  if(allBlogs.length==0) return <h1>No news</h1>

  
  
  return (
    <>
      <div className="flex flex-col gap-16">
       
        
        <div className="space-y-5">
          <h4 className="text-3xl font-semibold">Recent News</h4>
          {
            // let count = 0;
            allBlogs.map((post, index) => {  
              if (index < 5) {
                return (
                  <Link to={`/news/${post.id}`} key={post.id}>
                    {" "}
                    <div className="space-y-4 flex gap-5">
                      <div className="w-[80px] rounded-2xl overflow-hidden">
                        <img src={post.banner_image} alt="Error" className="w-full h-full object-contain" />
                      </div>
                      <div className="">
                        <h5 className="text-lg font-semibold">{post.title}</h5>
                        <p className="text-[15px]">{post.createdAt.slice(0, 10)}</p>
                      </div>
                    </div>
                  </Link>
                );
              } else {
                return null;
              }
            })
          }
        </div>
        
        <div className="h-[350px] w-full rounded-xl overflow-hidden">
          <img src={"/image/portfoilo/faq-image.jpg"} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}

