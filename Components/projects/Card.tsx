import { Project } from '@/types'
import React from 'react'

const Card = ({
    title,
    description,
    image,
    link,
    tags }: Project) => (
    <a href={link} target='__blank'>
        <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-8'>
            {image ? <div className={`h-16 w-16 bg-[url(${image})]`} /> : <div className='h-16 w-full'>&nbsp;</div>}
            <h1 className='text=[20px] md:text-[30px] my-6'>{title}</h1>
            <p className='text-[15px] text-[#d3fae8] font-normal'>{description}</p>
        </div>
    </a>
)

export default Card;