import React from 'react';

export default function ServiceBanner() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <img src='/image/services/shop-home-img2.jpg' alt='service-banner' title='service-banner'
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="qodef-shortcode qodef-m qodef-memory-cards qodef-layout--default">
                    <div className="qodef-background-image"></div>
                    <div className="qodef-grid-inner">
                        {[...Array(15)].map((_, index) => (
                            <article className="hover-container" key={index}>
                                <div className="hover-box">
                                    <div className='w-full h-full m-auto'>
                                        <img src={`/image/services/shop-list-img${index + 1}.jpg`} alt='service-banner' title='service-banner'
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                </div>
                                <div className="qodef-m-top-holder">
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
