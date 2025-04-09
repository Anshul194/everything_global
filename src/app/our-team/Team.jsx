
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineFacebook } from 'react-icons/md';
import { BASE_URL, orgId } from '../../utils/config';

export default function Team() {
    const[team,setTeam]=useState([]);
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{  
        const res = await fetch(`${BASE_URL}/all-our-team?organizationId=${orgId}`)
        const json = await res.json();
        console.log(json)
        setTeam(json.data)
    }
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                {team.map((member, index) => (
                    <div
                        key={index}
                        className='col-span-1 rounded-[50px] overflow-hidden border border-black relative product-card group'
                    >
                        <div className='relative'>
                            <div className='p-10'>
                                <img
                                    src={member.image_url}
                                    alt='team-member'
                                    title='team-member'
                                    className="w-full h-full object-cover product-image rounded-2xl"
                                />
                            </div>

                            <div className='qodef-social-icon '>
                                <span className="qodef-social-dot group-hover:hidden">...</span>
                                <div className='flex items-center gap-2 absolute right-0 opacity-0 group-hover:opacity-100 group-hover:right-[5px] transition-all duration-300 ease-in-out'>
                                    <a href={member.linkedin_link}><FaLinkedin className='text-xl' /></a>
                                    <a href={member.facebook_link}><MdOutlineFacebook className='text-xl' /></a>
                                    <a href={member.twitter_link}><FaTwitter className='text-xl' /></a>
                                    <a href={member.instagram_link}><FaInstagram className='text-xl' /></a>
                                </div>
                            </div>

                            <img
                                src={`/image/services/service_hover.png`}
                                alt='hover-banner'
                                title='hover-banner'
                                className="w-full h-full object-cover absolute top-0 left-0 hover-image"
                            />

                            <div className='border-t border-black p-10 pt-5 relative z-10'>
                                <div>
                                    <h5 className='text-2xl lg:text-xl xl:text-2xl font-medium'>{member.name}</h5>
                                    <p className='uppercase text-[#151015]'>{member.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
