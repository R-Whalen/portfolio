import React from 'react'
import AnimatedBanner from './AnimatedBanner';
import TextEffect from './TextEffect';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const LandingArea = () => {

    const Introduction = () => (
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            Hi! My name is&nbsp;
            <span className='text-yellow-400'>Robert Whalen</span>
        </h1>
    )

    const Description = () => (
        <p className='mt-8 text-[20px] text-[#ffffff92]'>
            Lorem Ipsum (Need to fill in this description later)
        </p>
    )

    const Download = () => (
        <button className='px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase flex items-center space-x-2 bg-[#55e6a5] rounded-md'>
            <p>Download CV</p>
            <ArrowDownTrayIcon className='w-6 h-6 text-black' />
        </button>
    )

    return (
        <div className="h-[90vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <AnimatedBanner />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-12 h-full items-center'>
                <div>
                    <Introduction />
                    <TextEffect />
                    <Description />
                    <div className='mt-8 flex-col space-y-6 sm:space-y-0 sm:flex sm:slex-row items-center sm:space-x-6'>
                        <Download />
                        {/* AMPLE SPACE HERE TO PUT ANOTHER THING TO DRAW ATTENTION TO*/}
                    </div>
                </div>
                <div>
                    &nbsp; {/*EMPTY SPACE, PERFECT FOR LOGO / IMAGE */}
                </div>
            </div>
        </div >
    )
}

export default LandingArea;