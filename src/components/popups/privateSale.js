import React from 'react';
import Image from 'next/image';
import PopupLogo from '../..//../public/assets/popupLogo.webp'
import './popup.css';
export default function PrivateSale() {
    return(
        <div className='PrivateSale text-center text-white Oxanium'>
            <div className='container md:pt-10 md:pb-16'>
              <Image className='mx-auto' src={PopupLogo}/>
              <h3 className='md:text-4xl py-5'>Private Sale</h3>
              <p className='popText mx-auto'>Enter your email below to receive instructions on how to participate in our token private sale</p>
              <form className='emailForm flex justify-between bg-white mt-10 py-3 px-5'>
                <input placeholder='Enter your email'/>
                <button className='bg-black py-3 px-6 emailButton text-sm'>Get Tokens</button>
              </form>
            </div>
        </div>
    )
};