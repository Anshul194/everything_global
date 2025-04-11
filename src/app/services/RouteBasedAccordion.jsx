import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Content mapping based on routes
const routeContentMap = {
  '/web-design': {
    id: "WD",
    title: "Web Design ",
    content: "Our web design services create compelling, user-friendly websites that capture your brand's essence while ensuring optimal functionality across all devices.",
    type: "Create captivating digital experiences",
    headering: "Elevate Your Online Presence with Our Web Design Services",
    img: "/image/home/accordion1.jpg",
    color: "#d2ebf8"
  },
  '/growth-advertising': {
    id: "GA",
    title: "Growth Advertising",
    content: "Our growth advertising strategies drive targeted traffic and conversions through data-driven campaigns that maximize your ROI and expand your market reach.",
    type: "Scale your brand effectively",
    headering: "Accelerate Your Business Growth with Strategic Advertising",
    img: "/image/home/accordion3.jpg",
    color: "#F8A065"
  },
  '/creative-marketing': {
    id: "CM",
    title: "Creative Marketing",
    content: "Our creative marketing services help you stand out with innovative campaigns that captivate your audience and communicate your brand's unique value proposition.",
    type: "Inspire engagement and action",
    headering: "Transform Your Brand Story with Creative Marketing Solutions",
    img: "/image/home/accordion1.jpg",
    color: "#d2ebf8"
  }
};

export default function RouteBasedAccordion() {
  const location = useLocation();
  const [accordionItem, setAccordionItem] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Check if the current path matches any of our target routes
    const path = location.pathname;
    if (routeContentMap[path]) {
      setAccordionItem(routeContentMap[path]);
    } else {
      setAccordionItem(null);
    }
  }, [location.pathname]);

  // If no matching route is found, don't render anything
  if (!accordionItem) return null;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-20">
      <div 
        className={`border border-black rounded-[50px] ${isOpen ? `bg-[${accordionItem.color}]` : 'bg-white hover:scale-y-110 transition-transform duration-200 ease-in-out'} relative cursor-pointer`} 
        onClick={toggleAccordion}
      >
        <div className="custom_container px-8 sm:mb-0 !pt-16 ">
          <div className="flex justify-between w-full text-lg font-medium text-left focus:outline-none pb-2 sm:pb-10 lg:pb-20">
            <div className="flex justify-between w-full">
              <div className="flex flex-wrap gap-1 gap-x-20 sm:gap-6 items-start">
                <h2 
                  className="uppercase text-3xl sm:text-4xl md:text-6xl lg:!text-[75px] lg:leading-[65px] max-w-5xl break-words font-black" 
                  style={{
                    WebkitTextStroke: !isOpen ? '1px black' : 'none',
                    color: !isOpen ? 'transparent' : 'black',
                  }}
                >
                  {accordionItem.title}
                </h2>
              </div>
              <h2 
                className="hidden lg:block uppercase text-[75px] font-black" 
                style={{
                  WebkitTextStroke: !isOpen ? '1px black' : 'none',
                  color: !isOpen ? 'transparent' : 'black',
                }}
              >
                {accordionItem.id}
              </h2>
            </div>
          </div>

          <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-screen " : "max-h-0"}`}>
            <div className="grid md:grid-cols-12 gap-3 mb-10 sm:mb-0">
              <div className="md:col-span-5 relative max-sm:order-1">
                <div className="space-y-2">
                  <h3 className="text-lg lg:text-xl font-semibold">{accordionItem.headering}</h3>
                  <p className="text-sm lg:text-base">{accordionItem.content}</p>
                </div>
              </div>
              <div className="md:col-span-7">
                <img src={accordionItem.img} alt={`${accordionItem.title} image`} className="rounded-t-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}