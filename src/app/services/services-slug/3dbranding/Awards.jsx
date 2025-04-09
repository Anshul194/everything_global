import React from 'react';
import AnimatedReadMore from '../../../../component/common/AnimatedReadMore';
import { Link } from 'react-router-dom';

const awardsData = [
  {
    icon: '/image/services/shop-home-icon-img1.webp',
    title: 'Realistic 3D Modeling',
    description: 'We craft highly detailed 3D models that bring your products and brand elements to life, making a powerful impact in both virtual and physical spaces.',
  },
  {
    icon: '/image/services/shop-home-icon-img2.webp',
    title: 'Interactive Environments',
    description: 'We design engaging virtual environments that allow customers to explore and interact with your brand, enhancing their overall experience and connection.',
  },
  {
    icon: '/image/services/shop-home-icon-img3.webp',
    title: 'Consistent Brand Integration',
    description: 'Every 3D element we create reflects your brand’s identity, ensuring a cohesive, immersive experience across all touchpoints.',
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
