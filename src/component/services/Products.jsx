import React from 'react';

export default function Products() {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                {[...Array(8)].map((_, index) => (
                    <div
                        key={index}
                        className='col-span-1 bg-[#f1ead8] rounded-[50px] overflow-hidden border border-black relative product-card'
                    >
                        <div className='relative'>
                            <img
                                src={`/image/services/shop-list-img${index + 1}.jpg`}
                                alt='service-banner'
                                title='service-banner'
                                className="w-full h-full object-cover product-image"
                            />

                            <img
                                src={`/image/services/service_hover.png`}
                                alt='service-banner'
                                title='service-banner'
                                className="w-full h-full object-cover absolute top-0 left-0 hover-image"
                            />
                        </div>

                        <div className='p-8 bg-white rounded-[50px] border border-black absolute bottom-0 left-0 w-full'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h5 className='text-2xl lg:text-xl xl:text-2xl font-medium'>Black Sneakers</h5>
                                </div>
                                <div className='price-container'>
                                    <p className='font-medium hover-text'>45.00$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           
        </>
    );
}
