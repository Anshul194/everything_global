import React from 'react'
import ServiceBanner from './ServiceBanner'
import AllServices from '../../component/services/AllServices'
// import AllServices from '../../component/'
// import ProfessionalSolutions from '../../component/home/ProfessionalSolutions'
import ProfessionalSolutions from '../../component/home/ProfessionalSolutionsTwo'
import Service1 from '../../component/services/Service1'
import Service2 from '../../component/services/Service2'
import ReadymadePages from '../../component/home/ReadymadePages'
import ServiceHeading from './ServiceHeading'

export default function Services() {  
    return (
        <>
            <ServiceBanner />
            <div className={`py-10 sm:!py-36`}>
                <ServiceHeading />
            </div>
            <div className={`custom_container sm:px-12`}>
                <AllServices />
            </div>
            <div className={`pt-28`}>
                <ProfessionalSolutions />
            </div>
            {/* <div className={`pt-24 md:pt-32`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <Service1 />
            </div>
            <div className={`pt-24 md:py-32`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <Service2 />
            </div> */}
            <div className={`pt-24 md:pt-32 pb-20`}>
                <ReadymadePages />
            </div>
        </>
    )
}
