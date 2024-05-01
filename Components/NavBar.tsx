import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
    openMenu: () => void;
}

const NavBar = ({ openMenu }: Props) => {

    return (
        <nav className='w-full fixed top-0 h-[7vh] min-h-[80px] bg-[#131c27] shadow-md z-50'>
            <div className='flex items-center justify-between h-full mx-2 sm:mx-20'>
                <h1 className='cursor-pointer text-[300%] text-white font-bold xs:text-5xl'>
                    HOME
                </h1>
                <div className='flex justify-between w-[70%] lg:w-[50%] xl:w-[40%]'>
                    <div className='nav-link'>About</div>
                    <div className='nav-link'>Services</div>
                    <div className='nav-link'>Skills</div>
                    <div className='nav-link'>Projects</div>
                    <div className='nav-link'>Testimonials</div>
                    <div onClick={openMenu}>
                        <Bars3Icon className='absolute right-4 top-1 w-8 md:hidden h-16 cursor-pointer text-yellow-300' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar