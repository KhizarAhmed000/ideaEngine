import React from "react";
import Image from 'next/image';
import Cross  from '../../../public/assets/cross.svg'
import './popup.css';


export default function Completed() {
    return(
        <div className="Completed Oxanium text-center">
            <div className="container relative">
              <div className="absolute right-8 cursor-pointer top-8 w-[16px]">
                <Image src={Cross}/>
              </div>
               <div className="py-20">
                  <h3 className="text-4xl text-custom-blue font-extrabold mb-4">Completed</h3>
                  <p className='popText mx-auto text-white'>Email with instructions will be sent shortly!</p>
               </div>
            </div>
        </div>
    )
}