import React, { useEffect, useState } from "react";
import FooterTop from "../../../component/layout/FooterTop";
import PortBanner from "./PortBanner";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, IMAGE_BASE_URL, orgId } from "../../../utils/config";
import Loader from "../../../component/layout/Loader";
import moment from "moment";

// Component to safely render HTML content
const HtmlContent = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default function PortfolioSlug() {
  const { id } = useParams();
  const currentId = parseInt(id);
  
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [portfolioNav, setPortfolioNav] = useState({
    hasPrevious: false,
    hasNext: false,
    totalItems: 0,
    allIds: []
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get current portfolio item
        const itemResp = await axios.get(`${BASE_URL}/get-portfolio/${id}`);
        
        // Get all portfolio items for navigation
        // const orgId = itemResp?.data?.data?.organizationId || '';
        const allItemsResp = await axios.get(`${BASE_URL}/all-portfolio?organizationId=${orgId}`);
        
        if (itemResp?.data?.http_status_code === 200) {
          setData(itemResp.data.data);
          
          // Set up navigation data
          if (allItemsResp?.data?.http_status_code === 200) {
            const portfolioItems = allItemsResp.data.data || [];
            const portfolioIds = portfolioItems.map(item => parseInt(item.id));
            const currentIndex = portfolioIds.indexOf(currentId);
            
            setPortfolioNav({
              hasPrevious: currentIndex > 0,
              hasNext: currentIndex < portfolioIds.length - 1 && currentIndex !== -1,
              totalItems: portfolioIds.length,
              allIds: portfolioIds,
              currentIndex
            });
          }
          
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id, currentId]);
  
  if (loading) {
    return <Loader />;
  }
  
  // Get previous and next IDs for navigation
  const getPreviousId = () => {
    const { currentIndex, allIds } = portfolioNav;
    return currentIndex > 0 ? allIds[currentIndex - 1] : null;
  };
  
  const getNextId = () => {
    const { currentIndex, allIds } = portfolioNav;
    return currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : null;
  };
  
  return (
    <>
      <PortBanner image={data?.pictures} />
      
      <div className="custom_container">
        <div className="grid grid-cols-12 gap-5 my-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="text-6xl text-[#151015] font-semibold">{data?.title}</h1>
            <p className="text-lg text-[#151015] font-semibold mb-4">{data?.sub_title}</p>
            
            {/* Render HTML content safely */}
            <HtmlContent content={data?.content} />
          </div>
          <div className="col-span-12 lg:col-span-1"></div>
          <div className="col-span-12 lg:col-span-3">
            <div className="space-y-2">
              <p>
                <span className="text-lg text-[#151015] font-semibold">Client:</span>&nbsp; {data?.client}
              </p>
              <p>
                <span className="text-lg text-[#151015] font-semibold">Category:</span>&nbsp; ({data?.category?.name})
              </p>
              <p>
                <span className="text-lg text-[#151015] font-semibold">Tag:</span>&nbsp;
                {data?.tags.map((item, index) => (
                  <span key={index} className="border border-black mt-2 py-1 px-3 rounded-full mr-2 inline-block">{item}</span>
                ))}
              </p>
              <p>
                <span className="text-lg text-[#151015] font-semibold">Date:</span>&nbsp; {moment(data?.published_date).format("DD-MM-YYYY")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-5">
          {portfolioNav.hasPrevious ? (
            <Link to={`/portfolio-slug/${getPreviousId()}`}>
              <div className="flex items-center gap-2 cursor-pointer text-xl font-medium">
                <GrLinkPrevious />
                Previous
              </div>
            </Link>
          ) : (
            <Link to="/portfolio">
              <div className="flex items-center gap-2 cursor-pointer text-xl font-medium opacity-50">
                <GrLinkPrevious />
                Back to Portfolio
              </div>
            </Link>
          )}
          
          {portfolioNav.hasNext ? (
            <Link to={`/portfolio-slug/${getNextId()}`}>
              <div className="flex items-center gap-2 cursor-pointer text-xl font-medium">
                Next
                <GrLinkNext />
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-2 text-xl font-medium opacity-50">
              Next
              <GrLinkNext />
            </div>
          )}
        </div>
      </div>
      <div className="pt-12" style={{ background: `url(/image/home/bacground-img.png)` }}>
        <FooterTop />
      </div>
    </>
  );
}