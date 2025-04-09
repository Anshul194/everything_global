import React from 'react'
import { GoDotFill } from 'react-icons/go'

export default function Button({ text, width }) {
    return (
        <>
            <div className="flex justify-center mt-10">
                <div className="overflow-hidden  max-w-xs">
                    <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[${width}] m-auto text-lg overflow-hidden flex items-center`}>
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#f8a065] rounded-full group-hover:w-full group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                        <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
                            <GoDotFill className="text-[#f8a065]" />
                            <span className="sliding-text hidden group-hover:block">{text}</span>
                            <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                            <span className="sliding-text hidden group-hover:block">{text}</span>
                            <GoDotFill className="text-[#f8a065] hidden group-hover:block" />
                            <span className="sliding-text">{text}</span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}
