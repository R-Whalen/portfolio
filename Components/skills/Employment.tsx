import { Employment as IEmployment } from '@/types'
import React from 'react'

const Employment = ({
    title,
    education,
    startYear,
    endYear,
    description }: IEmployment) => {

    const themedStyling = education ? 'border-[#55e6a5] text-[rgb(85,230,165)]' : 'border-yellow-400 text-yellow-400';

    return (
        <div className='pb-16 md:pb-32 h-full'>
            <span className={`px-8 py-[0.9rem] font-bold text-[18px] border-[2px] ${themedStyling}`}>
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