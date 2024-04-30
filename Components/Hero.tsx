import React from 'react'
import AnimatedBanner from './AnimatedBanner';

const Hero = () => {

    return (
        <div className="h-[90vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <AnimatedBanner />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-12 h-full items-center'>
                <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                    Hi! I'm&nbsp;
                    <span className='text-yellow-400'>Robert</span>
                </h1>
            </div>
        </div>
    )
}

export default Hero;