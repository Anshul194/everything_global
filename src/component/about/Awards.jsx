import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const awards = [
    { title: 'Marsille Animation Festival', award: 'Coca-Cola, Commercial Of The Year', img: '/image/about/p2-img3.png' },
    { title: 'Graphic Design Award', award: 'Chocolate Packaging', img: '/image/about/p2-img7.png' },
    { title: 'Branding Award', award: 'Music Production Video', img: '/image/about/p2-img8.png' },
    { title: 'Public Award', award: 'Motion & Animation Video', img: '/image/about/p2-img9.png' }
];

const Awards = () => {
    return (
        <section className="bg-neutral-50 py-12">
            <div className="px-4">
                <h2 className="text-[54px] font-bold text-black mb-8">Awards & Recognitions</h2>
                <div className="space-y-4">
                    {awards.map((item, index) => (
                        <div
                            key={index}
                            className={`grid group grid-cols-12 items-center border-t border-black py-4 ${index === 3 ? 'border-b' : ''}`}
                        >
                            <div className="col-span-12 sm:col-span-10 relative">
                                <div className="grid md:grid-cols-7 items-center">
                                    <h3 className="text-lg text-[#151015] col-span-2">{item.title}</h3>
                                    <Link to="#" className="col-span-5">
                                        <p className="text-2xl sm:text-[32px] font-semibold text-black">{item.award}</p>
                                    </Link>
                                    <div className="hidden sm:block absolute -right-10 -top-28 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                        <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-2 text-end flex justify-end">
                                <button className="flex justify-center items-center h-14 w-14 bg-[#f8a065] border border-black rounded-full hover:bg-orange-400 transition">
                                    <MdArrowOutward className="text-3xl text-black" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
