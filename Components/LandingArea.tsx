import React from 'react'
import AnimatedBanner from './AnimatedBanner';
import TextEffect from './TextEffect';
import DownloadCV from './DownloadCV';

const LandingArea = () => {

    const Introduction = () => (
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            Hi! My name is&nbsp;
            <span className='text-yellow-400'>Robert Whalen</span>
        </h1>
    )

    const Description = () => (
        <p className='mt-8 text-[20px] text-[#ffffff92]'>
            Currently an Associate Software Engineer for <a href='https://www.ivanti.com/en-gb/' target='_blank' className='text-yellow-400'>Ivanti</a>,
            powering engineers through developing internally consumed tooling and webapps with proficiency in DevOps and MERN development.
        </p>
    )

    return (
        <div id='Landing' className="h-[93vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/banner.jpg)' }}>
            <AnimatedBanner />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-12 h-full items-center'>
                <div className='fadeInUp-animation'>
                    <Introduction />
                    <Description />
                    <TextEffect />
                    <div className='mt-8 flex-col space-y-6 sm:space-y-0 sm:flex sm:slex-row items-center sm:space-x-6'>
                        <DownloadCV />
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