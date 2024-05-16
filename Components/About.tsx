/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import DownloadCV from './DownloadCV'
import { InboxArrowDownIcon } from '@heroicons/react/20/solid';

const About = () => {
    const Contact = () => (
        <a href='mailto:RobertWhalenBusiness@hotmail.com?subject=Inquiry%20(Generated%20from%20robert-whalen.dev)'>
            <button className='px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase flex items-center space-x-2 bg-[#55e6a5] rounded-md'>
                <p>Contact Directly</p>
                <InboxArrowDownIcon className='w-6 h-6 text-black' />
            </button>
        </a>
    );

    return (
        <div id='About' className='bg-[#121121] pb-12 pt-16 md:pt-32'>
            <div className='grid grid-cols-3 lg:grid-cols-6 w-[80%] mx-auto gap-12 items-center'>
                <div className='col-span-3 lg:col-span-4'>
                    <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-4'>
                        ABOUT ME
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-12 lelading-8 capitalize mb-12 font-bold text-white'>
                        Expanding <span className='text-yellow-400'>Horizons</span>
                    </h2>
                    <div className='mb-12 flex items-center md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm select-none'>&nbsp;</span>
                        <p>
                            A 24-year old self-made UK-based software developer. I first sparked an interest in Computer Science largely due to my childhood being surrounded by video games.
                            From there an obsession was born on understanding the inner workings of the very algorithms powering my competitive experiences and once I had to choose to specialise
                            in one direction academically and carve the path out my career will take, my strong and storied history in mathematics and physics spearheaded my progression in
                            software development, a craft I have been honing for the past 4 years between university and extensive work experience.
                            <br />
                            <br />
                            Aside from working hard and forever expanding my skillset using platforms such as LinkedIn Learning and Pluralsight, I tend to enjoy hitting the gym as an former 28 stone powerlifter, cooking, playing competitive video games at a high level and otherwise
                            reconnecting with old friends. If any of what I have said seems of interest to you, then please do not hesitate to send me a message on <span className='text-yellow-400'>RobertWhalenBusiness@hotmail.com</span>
                        </p>
                    </div>
                    <div className='flex justify-center lg:justify-start gap-8'>
                        <DownloadCV />
                        <Contact />
                    </div>
                </div>
                <div data-aos='fade-left' className='col-span-3 lg:col-span-2 flex justify-center'>
                    <div className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mx-auto md:mx-0 mt-8 lg:mt-0 relative'>
                        <Image src='/images/cyberpunk-image-2.png' alt='user' layout='fill' objectFit='contain' className='relative z-[11]' />
                        <div className='relative w-full h-full z-10 bg-[#55e6a5] top-[-2rem] right-[-2rem]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About