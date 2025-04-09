import React from 'react';
import AnimatedReadMore from '../../../../component/common/AnimatedReadMore';
import { Link } from 'react-router-dom';

const awardsData = [
  {
    icon: '/image/services/shop-home-icon-img1.webp',
    title: 'Customized Visuals',
    description: 'We create designs that reflect your brand’s personality and values, ensuring every visual element is tailored specifically to resonate with your target audience.',
  },
  {
    icon: '/image/services/shop-home-icon-img2.webp',
    title: 'Consistent Branding',
    description: 'From social media to print materials, we maintain a cohesive look across all platforms to strengthen brand recognition and trust.',
  },
  {
    icon: '/image/services/shop-home-icon-img3.webp',
    title: 'Engaging and Modern Design',
    description: 'Using the latest design trends, we produce eye-catching visuals that capture attention and keep your audience engaged.',
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
