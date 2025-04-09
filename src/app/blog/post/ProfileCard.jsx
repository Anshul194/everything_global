import React from 'react';

const ProfileCard = ({ name, role, description, imageUrl }) => {
    return (
        // <div className="bg-[#cbdec6] rounded-3xl border border-black p-12 my-24 sm:my-32">
        <div className="bg-[#cbdec6] rounded-3xl border border-black p-12 my-24">
            <div className="flex items-start  flex-wrap sm:flex-nowrap gap-5 sm:space-x-6">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-[150px] h-[150px] border border-black rounded-full object-cover"
                />
                <div>
                    <p className="text-gray-600 uppercase text-sm mb-1">({role})</p>
                    <h2 className="text-2xl font-bold mb-4">{name}</h2>
                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;