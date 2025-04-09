import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const accordionItems = [
    {
        id: "01",
        title: "be creative",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "photography",
        headering: "Marketing Solution For Brand",
        img: "/image/home/accordion1.jpg",
        color: "#cbdec6"
    },
    {
        id: "02",
        title: "graphic-concept",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "photography",
        headering: "Marketing Solution For Brand",
        img: "/image/home/accordion2.jpg",
        color: "#f8a065"
    },
    {
        id: "03",
        title: "Anever say no",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "design",
        headering: "Marketing Solution For Brand",
        img: "/image/home/accordion3.jpg",
        color: "#f0ead8"
    },
    {
        id: "04",
        title: "free art",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "photography",
        headering: "Marketing Solution For Brand",
        img: "/image/home/accordion4.jpg",
        color: "#d2ebf8"
    },
    {
        id: "05",
        title: "portret",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "design",
        headering: "Marketing Solution For Brand",
        img: "/image/home/accordion5.jpg",
        color: "#cbdec6"
    },
    {
        id: "06",
        title: "inspire",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "creative",
        headering: "Marketing Solution For Brand",
        img: "/image/home/accordion6.jpg",
        color: "#f8a065"
    },
    {
        id: "07",
        title: "colors of life",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "ART",
        headering: "Marketing Solution For Brand",
        img: "/image/home/accordion7.jpg",
        color: "#f0ead8"
    },
    {
        id: "08",
        title: "branding",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "ART",
        headering: "Marketing Solution For Brand",
        img: "/image/home/accordion8.jpg",
        color: "#d2ebf8"
    },
];

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        if (index === 0 && openIndex === 0) {
            return;
        }
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className={`w-full`}>
            {accordionItems.length > 0 && accordionItems.map((item, index) => (
                <div key={index} className={`border border-black rounded-[50px]  ${openIndex === index ? `bg-[${item?.color}]` : 'bg-white hover:scale-y-110 transition-transform duration-200 ease-in-out'} ${index === 0 ? '' : '-mt-[9.25rem] overflow-hidden'}  relative cursor-pointer ${index === accordionItems.length - 1 ? 'top-6 lg:top-0' : ''
                    }`} onClick={() => toggleAccordion(index)}
                >
                    <div className={`custom_container ${item.id === "05" ? "mb-[106px] sm:mb-0" : ""} px-8 !pt-8 mb-20 sm:mb-0 sm:!pb-20 lg:!py-16 ${index === accordionItems.length - 1 ? 'max-sm:!mb-14 !pb-2 lg:!pb-0' : ''} ${item.id === "06" ? "max-sm:mb-[125px]" : ""}  ${item.id === "03" || item.id === "04" ? "max-sm:mb-[132px]" : ""}`}>
                        <div className={`flex justify-between w-full text-lg  font-medium text-left focus:outline-none pb-2 sm:pb-10 lg:pb-20 ${index === accordionItems.length - 1 ? 'max-sm:!pb-0' : ''
                            }`} >
                            <div className={`flex justify-between w-full`}>
                                <div className={`flex flex-wrap gap-1 gap-x-20 sm:gap-6 items-start`}>
                                    <h2 className={`uppercase text-3xl sm:text-4xl md:text-6xl lg:!text-[75px] lg:leading-[35px] font-black`} style={{
                                        WebkitTextStroke: openIndex !== index ? '1px black' : 'none',
                                        color: openIndex !== index ? 'transparent' : 'black',
                                    }}>{item?.title}</h2>
                                    <p className={`lg:-mt-5 uppercase text-[15px] text-[#151015]`}>({item.type})</p>
                                </div>
                                <h2 className={`hidden lg:block uppercase text-[75px] font-black`} style={{
                                    WebkitTextStroke: openIndex !== index ? '1px black' : 'none',
                                    color: openIndex !== index ? 'transparent' : 'black',
                                }}>{item.id}</h2>
                            </div>
                        </div>

                        <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-screen pb-[50px] sm:pb-[60px] lg:pb-[50px]" : "max-h-0"} ${index === accordionItems.length - 1 ? '!pb-0' : ''
                            }`}>
                            <div className={`grid md:grid-cols-12 gap-3 mb-10 sm:mb-0`}>
                                <div className={`md:col-span-5 relative max-sm:order-1`}>
                                    <div className={`space-y-2`}>
                                        <h3 className={`text-lg lg:text-xl font-semibold`}>{item.headering}</h3>
                                        <p className={`#151015 text-sm lg:text-base`}>{item.content}</p>
                                    </div>
                                    <div className={`border hidden md:block border-black p-2 lg:p-3 rounded-full w-fit absolute bottom-6 xl:bottom-20 bg-[#f8a065]`}>
                                        <MdArrowOutward className='text-2xl lg:text-3xl' />
                                    </div>
                                </div>
                                <div className={`md:col-span-7 `}>
                                    <img src={item?.img} alt={`error${index}`} className={`rounded-t-3xl`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}
