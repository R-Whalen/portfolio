import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
    openMenu: () => void;
}

const NavBar = ({ openMenu }: Props) => {

    return (
        <nav className='w-full fixed top-0 h-[7vh] min-h-[80px] bg-[#131c27] shadow-md z-50'>
            <div className='flex items-center justify-between h-full mx-8 sm:mx-20'>
                <h1 className='cursor-pointer text-[300%] text-white font-bold xs:text-5xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[calc(7vh-12px)] h-[calc(7vh-12px)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </h1>
                <div className='flex justify-between w-[70%] lg:w-[50%] xl:w-[40%]'>
                    <div className='nav-link'>About</div>
                    <div className='nav-link'>Projects</div>
                    <div className='nav-link'>Skills</div>
                    <div className='nav-link'>Testimonials</div>
                    <div onClick={openMenu}>
                        <Bars3Icon className='absolute right-8 sm:right-4 top-3 w-8 md:hidden h-16 cursor-pointer text-yellow-300' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar