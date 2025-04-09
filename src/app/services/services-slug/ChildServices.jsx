import React from 'react'
import ChildServiceBanner from '../../../component/services/ChildServiceBanner'
import Awards from '../../../component/services/Awards'
import Products from '../../../component/services/Products'
import NewsLetter from '../../../component/services/NewsLetter'
import Sales from '../../../component/services/Sales'
import { Testimonials } from '../../../component/home/Testimonials'

export default function ChildServices() {
    return (
        <>
            <ChildServiceBanner />
            <div>
                <Awards />
            </div>
            <div>
                <Products />
            </div>
            <div className={`py-28`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <NewsLetter />
            </div>
            <div className={``}>
                <Sales />
            </div>
            <div className={`py-28`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <Testimonials />
            </div>
        </>
    )
}
