import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { SlArrowUp } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { BASE_URL, orgId } from '../../utils/config';
import Loader from './Loader';
import { toast } from "react-toastify";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            return;
        }

        try {
            setLoading(true);
            const formData = {
                email: email,
                organizationId: orgId,
            };
            const resp = await axios.post(`${BASE_URL}/add-footer-email`, formData);
            if (resp?.data?.http_status_code === 201) {
                setEmail("");
            } else {
                console.log(resp?.data?.message || "Something went wrong");
            }
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
          <>
                    {loading && <Loader />}
                    {isVisible && (
                        <div
                            onClick={scrollToTop}
                            className="border border-black rounded-full text-3xl w-fit p-3 fixed left-7 bottom-7 z-50 cursor-pointer animate-arrow"
                        >
                            <SlArrowUp className="transition-transform duration-300 transform" />
                        </div>
                    )}
                    <div className="border custom_container !py-0 border-black bg-[#cbdec6] overflow-hidden rounded-[70px] mb-10">
                        <div className="md:px-[70px] !bg-[#fbfaf5] grid md:grid-cols-6 border-b border-black">
                            <div className="col-span-3 py-8 max-md:grid max-md:justify-center">
                                <img src="/image/logo.png" alt="Error" className="w-[240px]" />
                            </div>
                            <div className="col-span-3">
                                <div className="flex w-full h-full md:ml-[70px] max-md:border-t border-black">
                                   <Link to="https://in.linkedin.com/company/codeyes-media/" className={`border-r hover:text-[#f8a065] max-md:py-6 md:border-l border-black w-full h-full flex items-center justify-center text-3xl`}><FaLinkedin /></Link>
                                                               <Link to="https://www.facebook.com/codeyesmedia/" className={`border-r hover:text-[#f8a065] max-md:py-6 border-black w-full h-full flex items-center justify-center text-3xl`}><FaFacebook /></Link>
                                                               <Link to="https://api.whatsapp.com/send?phone=8849723987" className={`border-r hover:text-[#f8a065] max-md:py-6 border-black w-full h-full flex items-center justify-center text-3xl`}><FaWhatsapp /></Link>
                                                               <Link to="https://www.instagram.com/codeyesmedia/" className={` w-full  hover:text-[#f8a065] max-md:py-6 h-full flex items-center justify-center text-3xl`}><FaInstagram /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="my-20 md:my-[170px] mx-[6%] md:mx-[70px]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10">
                                <div className="col-span-1 space-y-3">
                                    <h5 className="text-2xl font-semibold">Hello, Partners! :)</h5>
                                    <p>At Everything Globle, our clients' success is our success. Through expert web development and data-driven marketing, we help your business grow, engage, and thrive in the digital world.</p>
                                </div>
                                <div className="col-span-1 space-y-3">
                                    <h5 className="text-2xl font-semibold">Contact Us</h5>
                                    <div className="space-y-1">
                                        <p>213, Skyview Business Horizon, nr. Shyamdham Temple, Sarthana Jakat Naka, Surat, Gujarat 395006</p>
                                        <p>info@everythinggloble.com</p>
                                        <p>+91 8849723987</p>
                                    </div>
                                </div>
                                <div className="col-span-1 space-y-3">
                                    <h5 className="text-2xl font-semibold">About Us</h5>
                                    <div className="space-y-2 capitalize">
                                        <p><Link to="/">Home</Link></p>
                                        <p><Link to="/about">About</Link></p>
                                        <p><Link to="/growth-advertising">Growth Advertising</Link></p>
                                        <p><Link to="/creative-marketing">Creative Marketing</Link></p>
                                        {/* <p><Link to="/services">Services</Link></p> */}
                                        <p><Link to="/portfolio">Portfolio</Link></p>
                                        {/* <p><Link to="/faq">FAQs</Link></p> */}
                                        {/* <p><Link to="/our-client">Our Client</Link></p> */}
                                        {/* <p><Link to="/our-team">Our Team</Link></p> */}
                                        {/* <p><Link to="/career">CAREER</Link></p> */}
                                        <p><Link to="/blog">Blog</Link></p>
                                        {/* <p><Link to="/privacy-policy">Privacy Policy</Link></p> */}
                                        {/* <p><Link to="/terms-of-use">Terms of use</Link></p> */}
                                        <p><Link to="/contact">Contact</Link></p>
                                        {/* <p><Link to="/career">Career</Link></p> */}
                                    </div>
                                </div>
                                <div className="col-span-1 space-y-3 mb-4">
                                    <h5 className="text-2xl font-semibold">Contact Us</h5>
                                    <div className="space-y-2">
                                        <p>Want To Work With Us?</p>
                                        <form onSubmit={handleSubmit} className="border hidden md:block border-black rounded-full overflow-hidden relative">
                                            <input
                                                type="email"
                                                placeholder="Email..."
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="bg-white w-full border-0 outline-0 h-full p-6"
                                            />
                                            <button type="submit" className="border border-r-0 border-black rounded-full bg-[#f8a065] p-2 absolute right-0 h-full w-[65px]">
                                                <FaArrowRightLong className="text-2xl m-auto" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="border block md:hidden border-black rounded-full overflow-hidden relative">
                                <input
                                    type="email"
                                    placeholder="Email..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-white w-full border-0 outline-0 h-full p-6"
                                />
                                <button type="submit" className="border border-r-0 border-black rounded-full bg-[#f8a065] p-2 absolute right-0 h-full w-[65px]">
                                    <FaArrowRightLong className="text-2xl m-auto" />
                                </button>
                            </form>
                        </div>
                    </div>
                </>
    );
}