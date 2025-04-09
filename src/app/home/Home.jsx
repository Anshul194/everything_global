import React from 'react'
import Banner from '../../component/home/Banner'
import Clients from '../../component/home/Clients'
import AboutUs from '../../component/home/AboutUs'
import { ProfessionalSolutions1, ProfessionalSolutions2, ProfessionalSolutions3 } from '../../component/home/ProfessionalSolutions'
import FiveColumns from '../../component/home/FiveColumns'
import ReadymadePages from '../../component/home/ReadymadePages'
import { Testimonials } from '../../component/home/Testimonials'
import News from '../../component/home/News'
import FooterTop from '../../component/layout/FooterTop'
import Clients2 from '../../component/home/Clients2'
import VideoTestimonial from '../../component/home/VideoTestimonial'

export default function Home() {
    return (
        <>
            <Banner />
            <div className={``}>
                <Clients />
                <Clients2 />
            </div>
            <div className={`mt-24 sm:mt-44`}>
                <AboutUs />
            </div>
            <div className={`mt-28`}>
                <ProfessionalSolutions1 />
                <ProfessionalSolutions2 />
                <ProfessionalSolutions3 />
            </div>
            <div className={`mt-12`}>
                <FiveColumns />
            </div>
            <div className={`mt-24`}>
                <ReadymadePages />
            </div>
            <div className={`pt-28`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <Testimonials />
            </div>
            <div className={`!pb-14 sm:!pb-28`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <VideoTestimonial />
            </div>
            <div className={``} >
                <News />
            </div>
            <div className={`pt-12`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <FooterTop />
            </div>
        </>
    )
}
