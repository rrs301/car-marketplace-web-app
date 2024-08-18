import React from 'react'
import { HiCalendarDays } from "react-icons/hi2";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
function DetailHeader({carDetail}) {
  return (
    <div>
      {carDetail?.listingTitle ?  <div>
            <h2 className='font-bold text-3xl'>{carDetail?.listingTitle}</h2>
            <p className='text-sm'>{carDetail?.tagline}</p>

            <div className='flex gap-2 mt-3'>
                <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3 '>
                    <HiCalendarDays className='h-5 w-5 text-primary' />
                    <h2 className='text-primary text-sm'>{carDetail?.year}</h2>
                </div>
                <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3 '>
                <BsSpeedometer2 className='h-5 w-5 text-primary' />
                    <h2 className='text-primary text-sm'>{carDetail?.mileage}</h2>
                </div>
                <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3 '>
                <GiGearStickPattern className='h-5 w-5 text-primary' />
                    <h2 className='text-primary text-sm'>{carDetail?.transmission}</h2>
                </div>
                <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3 '>
                <FaGasPump className='h-5 w-5 text-primary' />
                    <h2 className='text-primary text-sm'>{carDetail?.transmission}</h2>
                </div>
            </div>
        </div>:
        <div className='w-full rounded-xl h-[100px] bg-slate-200 animate-pulse'>

        </div>}

    </div>
  )
}

export default DetailHeader