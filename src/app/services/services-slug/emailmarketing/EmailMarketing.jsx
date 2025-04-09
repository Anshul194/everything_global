import React from 'react';
import ChildServiceBanner from './ChildServiceBanner';
import Awards from './Awards';
import Products from './Products';
import NewsLetter from './NewsLetter';
import Sales from './Sales';
import { Testimonials } from './Testimonials';
import Accordion from './Accordion';

export default function EmailMarketing() {
    return (
        <>
            <ChildServiceBanner title="Branding Services" />
            
            <div className={`pt-28`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <NewsLetter />
            </div>
            <div>
                <Awards />     
            </div>
            {/* <div>
                <Products />
            </div> 
                        <div className={`pt-28`} style={{ background: `url(/image/home/bacground-img.png)` }}>
*/}
            <div className={`pt-20`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <Testimonials />
            </div>
            <div className={`pb-28`} style={{ background: `url(/image/home/bacground-img.png)` }}>
                <Sales />
            </div>
        </>
    );
}
