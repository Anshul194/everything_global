import React from 'react';
import AnimatedReadMore from '../../../../component/common/AnimatedReadMore';
import { Link } from 'react-router-dom';

const awardsData = [
  {
    icon: '/image/services/shop-home-icon-img1.webp',
    title: 'High-Quality Imagery',
    description: 'We capture sharp, vibrant images that showcase every detail, making your products look their absolute best and building customer confidence.',
  },
  {
    icon: '/image/services/shop-home-icon-img2.webp',
    title: 'Consistent Brand Aesthetics',
    description: 'We align each photo with your brand’s style, ensuring a cohesive look that enhances your brand’s identity across all platforms.',
  },
  {
    icon: '/image/services/shop-home-icon-img3.webp',
    title: 'Enhanced Visual Storytelling',
    description: "Through thoughtful angles and lighting, we tell your product's story visually, creating an emotional connection that resonates with your audience.",
  },
];

const AwardCard = ({ icon, title, description }) => (
  <div className="relative p-10 pr-4 xl:p-20">
    <img src="/image/services/h1-icon-img1.png" alt="" className="absolute top-0 left-0" />
    <div className="flex items-end gap-5">
      <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <h5 className="text-xl lg:text-2xl font-semibold">{title}</h5>
    </div>
    <div className="mt-5">
      <p className="text-sm lg:text-base text-gray-600">{description}</p>
      {/* <Link to="#" className="w-fit block mt-3">
        <AnimatedReadMore />
      </Link> */}
    </div>
  </div>
);

export default function Awards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {awardsData.map((award, index) => (
        <AwardCard key={index} {...award} />
      ))}
    </div>
  );
}
