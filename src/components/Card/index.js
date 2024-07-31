import React from 'react'
import Image from 'next/image'
import block from "../../../public/assets/userProfile.png"
import fire from "../../../public/assets/fxemoji_fire.png";
import eth from "../../../public/assets/eth.png";
// import nft1 from "../../../public/assets/nft1.png";
import vectorTest from "../../../public/assets/vectorTest.png";

export default function Card({img,hearts,cryptoName,userName,ethAmount}) {

    const buttonStyle = {
        borderRadius: "0 20px 0 20px"
    }
    return (
        <div className='text-white bg-white bg-opacity-15 p-2 rounded-xl self-center'>

            <div className='relative'>
                <Image src={img} />
                <div style={buttonStyle} className='bg-white bg-opacity-15 p-2 absolute top-0 right-0 flex items-center'>
                    <div className='w-4 mr-3'>
                        <Image src={vectorTest} />
                    </div>
                    <div>{hearts}</div>
                </div>
            </div>

            <div className='flex items-center xl:ms-4 mt-2'>
                <div className='w-10 xl:mr-4'>
                    <Image src={block} />
                </div>
                <div>
                    <h4 className='text-lg xl:text-2xl'>
                        {cryptoName}
                    </h4>
                    <p className='Inter md:text-xs xl:text-sm'>
                        By @ {userName}
                    </p>
                </div>
            </div>

            <div className='flex justify-between mx-4 mt-5 xl:mt-10'>
                <div className='flex items-center'>
                    <p className='Oxanium lg:text-sm xl:text-lg mt-1'>
                        On Sale
                    </p>
                    <div className='w-4 xl:w-5 xl:ml-1'>
                        <Image src={fire} />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='w-6'>
                        <Image src={eth} />
                    </div>
                    <p className='lg:text-sm xl:text-lg'>
                        {ethAmount}
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center mt-5 xl:mt-10 mb-3 ">
                <button3 className="lg:text-xs xl:text-lg relative w-[80%] text-center  opacity-80 cursor-pointer  p-2 xl:p-3 Oxanium  hover:text-white border border-[#AD1AAF] group">
                    Coming Soon
                </button3>
            </div>

        </div>
    )
}
