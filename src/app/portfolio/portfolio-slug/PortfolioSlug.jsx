import React, { useEffect, useState } from "react";
import FooterTop from "../../../component/layout/FooterTop";
import PortBanner from "./PortBanner";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../utils/config";
import Loader from "../../../component/layout/Loader";
import moment from "moment";

// Component to safely render HTML content
const HtmlContent = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default function PortfolioSlug() {
  const { id } = useParams();
  
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`${BASE_URL}/get-portfolio/${id}`);
      if (resp?.data?.http_status_code === 200) {
        setData(resp.data.data);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  
  if (loading) {
    return <Loader />;
  }
  
  return (
    <>
      <PortBanner image={data?.pictures} />
      
      <div className="custom_container ">
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
                <span className="text-lg text-[#151015] font-semibold">Date:</span>&nbsp; {moment(data?.createdAt).format("DD-MM-YYYY")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-5">
          <Link to={`${id === "1" ? "/portfolio" : `/portfolio-slug/${Number(id) - 1}`}`}>
            <div className="flex items-center gap-2 cursor-pointer text-xl font-medium">
              <GrLinkPrevious />
              Previous
            </div>
          </Link>
          <Link to={`/portfolio-slug/${Number(id) + 1}`}>
            <div className="flex items-center gap-2 cursor-pointer text-xl font-medium">
              Next
              <GrLinkNext />
            </div>
          </Link>
        </div>
      </div>
      <div className="pt-12" style={{ background: `url(/image/home/bacground-img.png)` }}>
        <FooterTop />
      </div>
    </>
  );
}
// import React, { useEffect, useState } from "react";
// import FooterTop from "../../../component/layout/FooterTop";
// import PortBanner from "./PortBanner";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "../../../utils/config";
// import Loader from "../../../component/layout/Loader";
// import moment from "moment";

// export default function PortfolioSlug() {
//   const { id } = useParams();

//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const resp = await axios.get(`${BASE_URL}/get-portfolio/${id}`);
//       if (resp?.data?.http_status_code === 200) {
//         setData(resp.data.data);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [id]);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       <PortBanner image={data?.pictures} />

//       <div className="custom_container max-h-[70vh]">
//         <div className="grid grid-cols-12 gap-5 my-10 items-end">
//           <div className="col-span-12 lg:col-span-8">
//             <h1 className="text-6xl text-[#151015] font-semibold">{data?.title}</h1>
//             <p className="text-lg text-[#151015] font-semibold">{data?.sub_title}</p>
//             <p>{data?.content}</p>
//           </div>
//           <div className="col-span-12 lg:col-span-1"></div>
//           <div className="col-span-12 lg:col-span-3">
//             <div className="space-y-2">
//               <p>
//                 <span className="text-lg text-[#151015] font-semibold">Client:</span>&nbsp; {data?.client}
//               </p>
//               <p>
//                 <span className="text-lg text-[#151015] font-semibold">Category:</span>&nbsp; ({data?.category?.name})
//               </p>
//               <p>
//                 <span className="text-lg text-[#151015] font-semibold">Tag:</span>&nbsp;
//                 {data?.tags.map(item=>(<span className="border border-black py-1 px-3 rounded-full">{item}</span>))}
//               </p>
//               <p>
//                 <span className="text-lg text-[#151015] font-semibold">Date:</span>&nbsp; {moment(data?.createdAt).format("DD-MM-YYYY")}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between pb-5">
//           <Link to={`${id === 1 ? "/portfolio" : `/portfolio-slug/${+id - 1}`}`}>
//             <div className="flex items-center gap-2 cursor-pointer text-xl font-medium">
//               <GrLinkPrevious />
//               Previous
//             </div>
//           </Link>
//           <Link to={`/portfolio-slug/${+id + 1}`}>
//             <div className="flex items-center gap-2 cursor-pointer text-xl font-medium">
//               Next
//               <GrLinkNext />
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div className={`pt-12`} style={{ background: `url(/image/home/bacground-img.png)` }}>
//         <FooterTop />
//       </div>
//     </>
//   );
// }
