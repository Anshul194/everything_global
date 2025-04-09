import React, { useState } from "react";

const faqData = [
    { question: "Where Is My Order?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit." },
    { question: "Interactive Fab Template?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit." },
    { question: "Is it possible to pay by credit card?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit." },
    { question: "Help for our customers analytics?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit." },
    { question: "Can I return product after purchase?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit." },
    { question: "Can I return product after purchase?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit." },
    { question: "Can I return product after purchase?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit." },
    { question: "Can I return product after purchase?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit." },
];

const FAQContent = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        // <div className="w-[85%] m-auto">
        <div className="mt-12">
            {/* <div className="grid lg:grid-cols-12 gap-y-6">
                    <div className="lg:col-span-8"> */}
            {faqData.map((faq, index) => (
                <div key={index} className="border-b border-black">
                    <div
                        className="flex justify-between py-8 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <h2 className="text-2xl font-semibold">{faq.question}</h2>
                        <div className={`h-[30px] w-[30px] border border-black flex justify-center items-center rounded-full ${openIndex === index ? 'bg-[#f8a065]' : ''}`}>
                            <span className="text-2xl">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </div>
                    </div>
                    {openIndex === index && (
                        <div className="pb-10 text-gray-600 sm:w-1/2 text-lg">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
            {/* </div> */}
            {/* <div className="hidden lg:block col-span-1"></div>
                    <div className="lg:col-span-3">
                        <div className="space-y-8">
                            <div className={`border w-full border-black rounded-full overflow-hidden relative`}>
                                <input type="text" placeholder='Email...' className='bg-white w-full border-0 outline-0 h-full p-6' />
                                <button className='border border-r-0 border-black rounded-full bg-[#f8a065] p-2 absolute right-0 h-full w-[65px]'>
                                    <FaArrowRightLong className='text-2xl m-auto' />
                                </button>
                            </div>
                            <div className="space-y-3">
                                <h4 className='text-2xl font-semibold !mb-8'>Contact Us</h4>
                                <p>Delsjögatan, 217 Malmö, Sweden</p>
                                <p>randal@example.com</p>
                                <p>+1123456788</p>
                            </div>
                            <div className="h-[250px] w-full rounded-xl overflow-hidden">
                                <img src="/image/portfoilo/faq-image.jpg" alt="" className="w-full object-cover" />
                            </div>
                            <div className="space-y-3">
                                <h4 className='text-2xl font-semibold !mb-8'>Why Are We Here?</h4>
                                <p>Donec enim diam vulputate ut pharetra sit. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default FAQContent;
