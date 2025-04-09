import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: 'Susie Booker',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing viverra.',
      image: '/image/client/p2-testimonials-img1.jpg',
    },
    {
      name: 'Susie Booker',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing viverra.',
      image: '/image/client/p2-testimonials-img2.jpg',
    },
    {
      name: 'Susie Booker',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing viverra.',
      image: '/image/client/p2-testimonials-img3.jpg',
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: false,
  };



  return (
    <div className="slider-container client_slider" >
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="slide">
            <div className='grid grid-cols-12 gap-y-5 sm:gap-20 lg:gap-28 items-center'>
              <div className='col-span-12 sm:col-span-3 lg:col-span-3  '>
                <div className='max-sm:m-auto relative h-[180px] md:h-[200px] lg:h-[250px] w-[180px] md:w-[200px] lg:w-[250px] border rounded-full border-black '>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='h-full w-full object-cover rounded-full overflow-hidden'
                  />
                <img
                  src={`/image/client/client-quotes.png`}
                  alt={testimonial.name}
                  className='absolute top-0 right-0 w-[50px]'
                />
                </div>
              </div>
              <div className='col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-7 max-sm:text-center'>
                <p className='text-3xl lg:text-[40px] lg:leading-[50px] font-semibold text-[#151015]'>{testimonial.text}</p>
                <p className='text-lg text-[#151015]'>{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
