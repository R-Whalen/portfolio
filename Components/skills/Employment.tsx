import { Employment } from '@/types'
import React from 'react'

const Employment = ({ title, startYear, endYear, description }: Employment) => {
    return (
        <div className='mb-16 md:mb-32'>
            <span className='px-8 text-[rgb(85,230,165)] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
                {`${startYear} - ${endYear || 'Present'}`}
            </span>
            <h1 className='mt-[2rem] font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white'>
                {title}
            </h1>
            <p className='text-[#aaa] font-normal w-[80%] text-[17px] opacity-80'>
                {description}
            </p>
        </div>
    )
}

export default Employment;