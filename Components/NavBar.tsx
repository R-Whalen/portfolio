import { Bars3Icon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import React from 'react'

interface Props {
    openMenu: () => void;
}

const NavBar = ({ openMenu }: Props) => {
    const scroll = (section: string) => {
        const element = document.getElementById(section);
        element?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <nav className='w-full fixed top-0 h-[7vh] min-h-[80px] bg-[#131c27] shadow-md z-50'>
            <div className='flex items-center justify-between h-full mx-8 sm:mx-20'>
                <h1 className='cursor-pointer'>
                    <Image alt='Whale Logo' src='/images/favicon.png' width={100} height={160} onClick={() => scroll('Landing')} />
                </h1>
                <div className='flex justify-between w-[70%] lg:w-[50%] xl:w-[40%]'>
                    <div className='nav-link' onClick={() => scroll('About')}>About</div>
                    <div className='nav-link' onClick={() => scroll('Skills')}>Skills</div>
                    <div className='nav-link' onClick={() => scroll('Projects')}>Projects</div>
                    {/* <div className='nav-link'>Testimonials</div> */}
                    <div onClick={openMenu}>
                        <Bars3Icon className='absolute right-8 sm:right-4 top-3 w-8 md:hidden h-16 cursor-pointer text-yellow-300' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar