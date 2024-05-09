import { Skill } from '@/types'
import Image from 'next/image'
import React from 'react'

const Skill = ({ name, image }: Skill) => {
    return (
        <div className='flex flex-col gap-2 px-8'>
            <Image alt={name + ' - Skill'} src={image} height={100} width={100} objectFit='contain' />
            <div className='text-[#AAA] text-[17px] text-center opacity-80'>
                {name}
            </div>
        </div>
    )
}

export default Skill