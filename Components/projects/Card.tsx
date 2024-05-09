import { Project } from '@/types'
import Image from 'next/image';
import React, { Fragment } from 'react'

const Card = ({
    title,
    description,
    image,
    link,
    tags }: Project) => (
    <a href={link} target='__blank' className='group hover:-translate-y-3 transform transition-all duration-300'>
        <div>
            <div className='w-full relative h-[300px] md:h-[400px]'>
                <Image
                    src={image}
                    alt='Project'
                    layout='fill'
                    className='object-cover'
                />
            </div>
            <div className='w-[90%] text-center mx-auto bg-[#09101a] relative mt-[-1rem] p-8 font-semibold transform transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#55e6a5]'>
                <div className='w-fit px-4 my-4 bg-[#55e6a5] relative mt-[-3rem] text-black text-[17px] mx-auto'>
                    {title}
                </div>
                <p className='pt-4 text-white text-[17px] font-normal'>{description}</p>
                <div className='flex flex-row justify-center gap-3 flex-wrap pt-2'>
                    {
                        tags.map((tag: string) => <Fragment key={tag}>
                            <div className='bg-yellow-400 px-2 rounded-sm'>
                                {tag}
                            </div>
                        </Fragment>)
                    }
                </div>
            </div>
        </div>
    </a>
)

export default Card;