import React from 'react'

export default function Button({ title }) {


    
    return (
        <>
            <div className="flex items-center justify-center mx-10 md:ml-0 md:mr-16">
                <button className="relative text-black opacity-80 bg-white p-3 Oxanium hover:bg-black hover:text-white border border-transparent hover:border-custom-blue transition-all duration-300  group">
                    {title}
                </button>
            </div>
        </>
        
    )
}
