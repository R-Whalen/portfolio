import { Skill } from '@/types'
import React from 'react'

const Skill = ({ name, confidence }: Skill) => {
    return (
        <div>
            <div className='relative mb-12'>
                <h1 className='p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    {name}
                </h1>
                <span
                    className='bottom-0 h-[6px] absolute bg-[#55e6a5]'
                    style={{ width: confidence + '%' }}
                >
                    &nbsp;
                </span>
            </div>
        </div>
    )
}

export default Skill