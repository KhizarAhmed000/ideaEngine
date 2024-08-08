import React from 'react';
import Image from 'next/image';
import PopupLogo from '../..//../public/assets/popupLogo.webp'
import './popup.css';
export default function JoinWhitelist() {
    return(
        <div className='JoinWhitelist text-white Oxanium'>
            <div className='container md:pt-10 md:pb-14'>
                <div className='flex align-center justify-between md:ps-16 pe-8'>
                  <div>
                    <Image className='mx-auto' src={PopupLogo}/>
                  </div>
                  <div className='ps-24'>
                    <h3 className='md:text-4xl py-5 font-bold'>Join Our Whitelist</h3>
                    <p className='popText font-normal text-lg'>Fill your email below to join our whitelist today!</p>
                    <form className='emailForm'>
                    <input className='emailInput bg-white mt-10 py-4 px-5 w-full mb-5' placeholder='Enter your email'/>
                    <button className='bg-blue py-4 px-6 emailButton text-sm w-full'>Complete Registration</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>
    )
};