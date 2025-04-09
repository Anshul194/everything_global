import React, { useState } from 'react';
import ContactForm from '../../component/pages/contact/ContactForm';
import { GoogleMap, Marker, LoadScript, InfoWindow } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from '../../utils/config';

const mapContainerStyle = {
    width: "100%",
    height: "700px",
};

export default function Contact() {
    const [mapCenter, setMapCenter] = useState({
        lat: 21.1702,
        lng: 72.8311,
    });
    const [infoWindowVisible, setInfoWindowVisible] = useState(false);
    const [infoWindowPosition, setInfoWindowPosition] = useState(mapCenter);
    const [selectedAddress, setSelectedAddress] = useState({
        country: 'India',
        city: 'Surat, Gujarat, India',
        email: 'randal@example.com',
        phone: '+1123456788',
    });

    const handleMarkerClick = (position) => {
        setInfoWindowPosition(position);
        setInfoWindowVisible(true);
    };

    const handleInfoWindowClose = () => {
        setInfoWindowVisible(false);
    };

    const handleLocationClick = (location, address) => {
        setMapCenter(location);
        setSelectedAddress(address);

        // Scroll to the map container on mobile view
        if (window.innerWidth <= 768) { // Check for phone view
            const mapContainer = document.getElementById('mapContainer');
            mapContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className={`custom_container sm:!py-10`}>
                <div className={`grid lg:grid-cols-12 gap-10`}>
                    <div className={`col-span-6 content-end pb-8 max-lg:order-1 xl:mr-32 flex flex-col justify-center`}>
                    {/* <div className={`col-span-6 content-end pb-8 max-lg:order-1 xl:mr-32`}> */}
                        <div className='space-y-4 mb-20 lg:pr-10'>
                            <div className='relative'>
                                <h1 className='text-[50px] sm:text-[64px] sm:leading-[70px] font-semibold relative z-10'>Contact Us.<br />
                                    Let's Work Together!</h1>
                                <span className={`absolute hidden lg:block z-0 right-10 md:right-40 lg:right-10 bottom-36`}>
                                    <img src="/image/home/happy.webp" alt="Error" />
                                </span>
                            </div>
                            <p>Let's connect and bring your ideas to life. Whether you're looking to enhance your digital presence or develop innovative solutions, our team is here to guide you every step of the way. Your journey starts with a conversation—let's make it happen!</p>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="col-span-1 cursor-pointer" onClick={() => handleLocationClick({ lat: 51.8959, lng: 0.8919 }, { country: 'UK', city: 'Colchester, Essex, UK', email: 'randal@example.com', phone: '+1123456788' })}>
                                {/* <div className="space-y-3">
                                    <h4 className='text-2xl font-semibold'>UK</h4>
                                    <p>Colchester, Essex, UK</p>
                                    <p>randal@example.com</p>
                                    <p>+1123456788</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-6 rounded-[50px] overflow-hidden`} id="mapContainer">
                        {/* <div className="w-full lg:col-span-1">
                            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                                <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={14}>
                                    <Marker position={mapCenter} onClick={() => handleMarkerClick(mapCenter)} />

                                    {infoWindowVisible && (
                                        <InfoWindow position={infoWindowPosition} onCloseClick={handleInfoWindowClose}>
                                            <div className="flex items-center">
                                                <p>{selectedAddress?.city || "No address provided"}</p>
                                            </div>
                                        </InfoWindow>
                                    )}
                                </GoogleMap>
                            </LoadScript>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="custom_container mb-10">
            <ContactForm mapCenter={mapCenter} selectedAddress={selectedAddress} />
            </div>
        </>
    );
}

// import React, { useState } from 'react';
// import ContactForm from '../../component/pages/contact/ContactForm';

// export default function Contact() {
//     const [mapCenter, setMapCenter] = useState({
//         lat: 21.1702,
//         lng: 72.8311,
//     });

//     const [selectedAddress, setSelectedAddress] = useState({
//         country: 'India',
//         city: 'Surat, Gujarat, India',
//         email: 'randal@example.com',
//         phone: '+1123456788',
//     });


//     const handleLocationClick = (location, address) => {
//         setMapCenter(location);
//         setSelectedAddress(address);
//     };

//     return (
//         <>
//             <div className={`custom_container sm:!py-10`}>
//                 <div className={`grid lg:grid-cols-12 gap-10`}>
//                     <div className={`col-span-6 content-end pb-8 max-lg:order-1 xl:mr-32`}>
//                         <div className='space-y-4 mb-20 lg:pr-10'>
//                             <div className='relative'>
//                                 <h1 className='text-[50px] sm:text-[64px] sm:leading-[70px] font-semibold relative z-10'>Contact Us.<br />
//                                     Let’s Work Together!</h1>
//                                 <span className={`absolute hidden lg:block z-0 right-10 md:right-40 lg:right-10 bottom-36`}>
//                                     <img src="/image/home/happy.webp" alt="Error" />
//                                 </span>
//                             </div>
//                             <p>Neque egestas congue quisque egestas diam in arcu cursus euismod. Pharetra convallis posuere morbi leo urna molestie bibendum ested.</p>
//                         </div>
//                         <div className="grid grid-cols-2 gap-5">
//                             <div className="col-span-1 cursor-pointer" onClick={() => handleLocationClick({ lat: 28.6203, lng: 77.3794 }, { country: 'India', city: 'Surat, Gujarat, India', email: 'randal@example.com', phone: '+1123456788' })}>
//                                 <div className="space-y-3">
//                                     <h4 className='text-2xl font-semibold'>India</h4>
//                                     <p>Surat, Gujarat, India</p>
//                                     <p>randal@example.com</p>
//                                     <p>+1123456788</p>
//                                 </div>
//                             </div>
//                             <div className="col-span-1 cursor-pointer" onClick={() => handleLocationClick({ lat: 34.0489, lng: 111.0937 }, { country: 'USA', city: 'Arizona, USA', email: 'randal@example.com', phone: '+1123456788' })}>
//                                 <div className="space-y-3">
//                                     <h4 className='text-2xl font-semibold'>USA</h4>
//                                     <p>Arizona, USA</p>
//                                     <p>randal@example.com</p>
//                                     <p>+1123456788</p>
//                                 </div>
//                             </div>
//                             <div className="col-span-1 cursor-pointer" onClick={() => handleLocationClick({ lat: 51.8959, lng: 0.8919 }, { country: 'UK', city: 'Colchester, Essex, UK', email: 'randal@example.com', phone: '+1123456788' })}>
//                                 <div className="space-y-3">
//                                     <h4 className='text-2xl font-semibold'>UK</h4>
//                                     <p>Colchester, Essex, UK</p>
//                                     <p>randal@example.com</p>
//                                     <p>+1123456788</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={`col-span-6 rounded-[50px] overflow-hidden`}>
//                         <img src="/image/portfoilo/contact.jpg" alt="Error" className='h-full' />
//                     </div>
//                 </div>
//             </div>
//             <div className="custom_container mb-10">
//                 <ContactForm mapCenter={mapCenter} selectedAddress={selectedAddress} />
//             </div>
//         </>
//     );
// }
