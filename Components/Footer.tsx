import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClipboardDocumentIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { ReactNode } from 'react';
import { toast } from 'react-toastify';

const Footer = () => {
    const IconWrapper = ({ children }: { children: ReactNode }) => (
        <div className='md:w-[6.5rem] md:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <div className='md:w-16 md:h-16 w-14 h-14'>
                {children}
            </div>
        </div>
    );

    const Location = () => (
        <div className='flex items-center space-x-6'>
            <IconWrapper>
                <MapIcon className='text-black' />
            </IconWrapper>
            <a href='https://www.google.com/maps/place/Liverpool/@53.3138773,-2.394275,7z/data=!4m6!3m5!1s0x487adf8a647060b7:0x42dc046f3f176e01!8m2!3d53.4083714!4d-2.9915726!16zL20vMDRsaDY?entry=ttu' target='_blank'>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Location</h1>
                <p className='opacity-80 text-white'>Liverpool, UK&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline relative top-[-2px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </p>
            </a>
        </div>
    )

    const Email = () => {
        const email = 'RobertWhalenBusiness@hotmail.com';

        const copy = () => {
            navigator.clipboard.writeText(email);
            toast("Copied to clipboard");
        }

        return <div className='flex items-center space-x-6'>
            <IconWrapper>
                <EnvelopeIcon className='text-black' />
            </IconWrapper>
            <div>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>Send me an email</h1>
                <p className='opacity-80 text-white flex items-center'>{email}&nbsp;
                    <button className='w-4 h-4'
                        onClick={copy}
                    >
                        <ClipboardDocumentIcon className='text-white hover:text-gray-700' />
                    </button>
                </p>
            </div>
        </div>
    }

    const GitHub = () => (
        <div className='flex items-center space-x-6'>
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-black' viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
            </IconWrapper>
            <a href='https://github.com/R-Whalen' target='_blank'>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>GitHub Profile</h1>
                <p className='opacity-80 text-white flex items-center'>https://github.com/R-Whalen&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 relative top-[-1px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </p>
            </a>
        </div>
    )

    return <footer className='pt-32 pb-16 bg-[#02050a] z-50'>
        <section className='grid border-b-[1px] pb-24 border-gray-400 grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto gap-12'>
            <Location />
            <GitHub />
            <Email />
        </section>
        <section className='w-[80%] mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
            <div className='text-[18px] mb-8 md:mb-0 text-white opacity-20'>
                Robert Whalen <p className='text-base inline'>{new Date().getFullYear()} </p> | All Rights Reserved
            </div>
            {/* <div className='flex items-center space-x-10'>
                <p className='text-base text-white opacity-20'>Terms & Conditions</p>
                <p className='text-base text-white opacity-20'>Privacy Policy</p>
                <p className='text-base text-white opacity-20'>Sitemap</p>
            </div> */}
        </section>
    </footer>
}

export default Footer;