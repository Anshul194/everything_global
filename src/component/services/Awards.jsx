import React from 'react';
import AnimatedReadMore from '../common/AnimatedReadMore';
import { Link } from 'react-router-dom';

const awardsData = [
  {
    icon: '/image/services/shop-home-icon-img1.webp',
    title: 'Behance x4 Award',
    description: 'Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Enisit amet venenatis urna cursus eget nunc sceler isque.',
  },
  {
    icon: '/image/services/shop-home-icon-img2.webp',
    title: 'Design x3 Award',
    description: 'Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Enisit amet venenatis urna cursus eget nunc sceler isque.',
  },
  {
    icon: '/image/services/shop-home-icon-img3.webp',
    title: 'Painting x3 Award',
    description: 'Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Enisit amet venenatis urna cursus eget nunc sceler isque.',
  },
];

const AwardCard = ({ icon, title, description }) => (
  <div className="relative p-10 pr-4  xl:p-20">
    <img src="/image/services/h1-icon-img1.png" alt="" className="absolute top-0 left-0" />
    <div className="flex items-end gap-5">
      <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <h5 className="text-xl lg:text-2xl font-semibold">{title}</h5>
    </div>
    <div className="mt-5">
      <p className="text-sm lg:text-base text-gray-600">{description}</p>
      <Link to="#" className="w-fit block mt-3">
        <AnimatedReadMore />
      </Link>
    </div>
  </div>
);

export default function Awards() {
  return (
    <div className="mt-16 lg:mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {awardsData.map((award, index) => (
          <AwardCard key={index} {...award} />
        ))}
      </div>
    </div>
  );
}
